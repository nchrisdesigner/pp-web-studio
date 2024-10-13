'use client'

import styles from './transitionlink.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Anton } from 'next/font/google'
import { useContext } from 'react'
import MenuContext from '@/app/context/context'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const TransitionLink = ({children, href}) => {
  const { setOpenMenu } = useContext(MenuContext);
  const router = useRouter()

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const handleClickLink = async (e) => {
    // e.preventDefault()
    const body = document.querySelector('body')
    body?.classList.add('page-transition')
    await sleep(600)
    router.push(href)
    await sleep(600)
    setOpenMenu(false)
    body?.classList.remove('page-transition')
  }
  return (
    <Link
    className={`${styles.link} ${anton.className}`}
    href={href}
    onClick={handleClickLink}
  >
    {children}
  </Link>
  )
}

export default TransitionLink