'use client'
import styles from './navbar.module.css'
import Image from 'next/image'
import { useContext } from 'react'
import MenuContext from '@/app/context/context'
// import logo from './../../assets/white-logo.png'
import logo from './../../assets/logo-pixel-perfekt-lg.png'
import iconLogo from './../../assets/icon-logo.png'
import textLogo from './../../assets/text-logo.png'
import MenuButton from '@/app/ui/Buttons/MenuButton/MenuButton'
import AltMenu from '../AltMenu/AltMenu'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'


const NavBar = () => {
  const { openMenu, setOpenMenu } = useContext(MenuContext)

  return (
    <nav style={{ backgroundColor: 'var(--black)' }}>
      <div>
        <div className='navbar-container flex'>
          {/* <figure>
            <Link href="/">
              <Image src={logo} alt='Pixel Pefekt Logo' width={170} />
            </Link>
          </figure> */}
          <figure >
            <Link className={styles.logoContainer} href="/">
              <Image src={iconLogo} alt='Pixel Pefekt Logo' width={36} />
              <Image className={styles.textLogo} src={textLogo} alt='Pixel Pefekt Logo' width={150} />
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