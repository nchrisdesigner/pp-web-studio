'use client'
import styles from './navbar.module.css'
import Image from 'next/image'
import { useContext } from 'react'
import MenuContext from '@/app/context/context'

import officialLogo from './../../assets/official-logo-white.png'
import MenuButton from '@/app/ui/Buttons/MenuButton/MenuButton'
import AltMenu from '../AltMenu/AltMenu'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'


const NavBar = () => {
  const { openMenu, setOpenMenu } = useContext(MenuContext)

  return (
    <nav className={styles.navbar}>
      <div>
        <div className='navbar-container flex'>

          <figure >
            <Link className={styles.logoContainer} href="/">
              <Image className={styles.textLogo} src={officialLogo} alt='Pixel Perfekt Logo' width={150} />
            </Link>
          </figure>

          <div>
            <MenuButton onClick={() => setOpenMenu(prev => !prev)}>MENU</MenuButton>
          </div>
        </div>
        <AnimatePresence mode='wait'>
          {openMenu && <AltMenu />}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default NavBar