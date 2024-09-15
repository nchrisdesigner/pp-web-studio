'use client'

import Image from 'next/image'
import { useContext } from 'react'
import MenuContext from '@/app/context/context'
import logo from './../../assets/white-logo.png'
import Menu from '../Menu/Menu'
import MenuButton from '@/app/ui/MenuButton/MenuButton'


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
        {openMenu && <Menu /> }
      </div>
    </nav>
  )
}

export default NavBar