'use client'

import Image from 'next/image'
import styles from './navbar.module.css'

import logo from './../../assets/white-logo.png'
import { useContext } from 'react'
import MenuContext from '@/app/context/context'
import PixelBg from '../PixelBg/PixelBg'

const NavBar = () => {
  const { openMenu, setOpenMenu } = useContext(MenuContext)

  return (
    <nav style={{backgroundColor: 'var(--black)'}}>    
    <div className={styles.navbar}>
      <div className='navbar-container flex'>
        <div className={styles.logo}>
          <Image src={logo} alt='Pixel Pefekt Logo' width={160} />
        </div>

        <div onClick={() => setOpenMenu(prev => !prev)} className='menu-icon'>
          <div className={`bar-half-1 ${openMenu ? 'open' : ''}`}></div>
          <div className={`bar ${openMenu ? 'open' : ''}`}></div>
          <div className={`bar-half-2 ${openMenu ? 'open' : ''}`}></div>
        </div>
      </div>
    {openMenu && <PixelBg /> }
    </div>
    </nav>
  )
}

export default NavBar