'use client'

import MenuContext from "@/app/context/context"
import { useContext } from "react"

const MenuIcon = () => {

  const { openMenu, setOpenMenu } = useContext(MenuContext)
  
  return (
    <div onClick={() => setOpenMenu(prev => !prev)} className='menu-icon'>
      <div className={`bar-half-1 ${openMenu ? 'open' : ''}`}></div>
      <div className={`bar ${openMenu ? 'open' : ''}`}></div>
      <div className={`bar-half-2 ${openMenu ? 'open' : ''}`}></div>
    </div>
  )
}

export default MenuIcon