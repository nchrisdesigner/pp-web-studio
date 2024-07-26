'use client'

import Image from 'next/image'
import styles from './navbar.module.css'

import logo from './../../assets/logo.png'
import { useState } from 'react'

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className='navbar-container flex'>
      <div className={styles.logo}>
        <Image src={logo} alt='Pixel Pefekt Logo' width={160} />
      </div>

      <div onClick={() => setOpenMenu(prev => !prev)} className='menu-icon'>
        <div className={`bar-half-1 ${openMenu ? 'open' : '' }`}></div>
        <div className={`bar ${openMenu ? 'open' : '' }`}></div>
        <div className={`bar-half-2 ${openMenu ? 'open' : '' }`}></div>
      </div>
    </nav>
  )
}

export default NavBar