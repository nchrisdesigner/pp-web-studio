'use client'
import MenuContext from '@/app/context/context'
import styles from './pixelbg.module.css'
import Link from 'next/link'
import { useContext } from 'react'

const links = [
  {
    id:1,
    href: '/web-design',
    title: 'Web Design'
  },
  {
    id:2,
    href: '/brand-identity',
    title: 'Brand Identity'
  },
  {
    id:3,
    href: '/video-motion',
    title: 'Video Motion'
  },
]

const PixelBg = () => {
  const { openMenu, setOpenMenu } = useContext(MenuContext)

  return (
    <div className={styles.pixelBackground}>
      {/* <div onClick={() => setOpenMenu(prev => !prev)} className='menu-icon'>
          <div className={`bar-half-1 ${openMenu ? 'open' : ''}`}></div>
          <div className={`bar ${openMenu ? 'open' : ''}`}></div>
          <div className={`bar-half-2 ${openMenu ? 'open' : ''}`}></div>
        </div> */}
      <div className={styles.linkContainer}>
        {
          links.map(({id, href, title}) => {
            return (
              <Link className={styles.link} key={id} href={href}>{title}</Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default PixelBg