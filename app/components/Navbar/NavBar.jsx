'use client'

import Image from 'next/image'
import { useContext } from 'react'
import MenuContext from '@/app/context/context'
import logo from './../../assets/white-logo.png'
import MenuButton from '@/app/ui/MenuButton/MenuButton'
import AltMenu from '../AltMenu/AltMenu'


const NavBar = () => {
  const { openMenu, setOpenMenu } = useContext(MenuContext)

  return (
    <nav style={{ backgroundColor: 'var(--black)' }}>
      <div>
        <div className='navbar-container flex'>
          <figure>
            <Image src={logo} alt='Pixel Pefekt Logo' width={160} />
          </figure>

          <div>
            <MenuButton onClick={() => setOpenMenu(prev => !prev)}>MENU</MenuButton>
          </div>
        </div>
        {openMenu && <AltMenu /> } 
      </div>
    </nav>
  )
}

export default NavBar