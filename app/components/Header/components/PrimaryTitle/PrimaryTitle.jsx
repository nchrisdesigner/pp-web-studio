'use client'
import { Anton } from 'next/font/google'
import { Poppins } from 'next/font/google'
import styles from './primarytitle.module.css'
import { motion } from 'framer-motion'

import localFont from 'next/font/local'

const myFont = localFont({
  src: './Unaessthetic.ttf',
  display: 'swap',
})
const myFontDruk = localFont({
  src: './Druk-Heavy-Trial.otf',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})
const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const textVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1.1,
      ease: 'easeOut',
      type: 'spring'
    }
  }
}

const PrimaryTitle = () => {
  return (
    <motion.div className={styles.container}>
      <h1 className={` ${styles.primaryTitle} ${myFontDruk.className} `}>
        <span className='block-element'>WE SOLVE &nbsp;
          <span className='outline-text-white'>
            <Smudge />
            PROBLEMS
          </span>
        </span>

        <div className={styles.titleGrid}>
          <span className={styles.through}>THROUGH</span>
          <span className={`${myFont.className} ${styles.remarkable}`} >
            REMARKABLE
          </span>
          <span className={styles.design}>DESIGN</span>
        </div>
      </h1>

      <div>
        <motion.p
          // variants={textVariants}
          // initial='hidden'
          // animate='show'
          className={`${styles.text} ${poppins.className}`}>
          We’re a creative web design studio based in Greece, crafting beautiful and distinctive work for brands that <span className='bold-text'>dare to stand out.</span>
        </motion.p>

        <p style={{ letterSpacing: '0.04em', color: '#ccc' }}>Located in Greece - Available Everywhere</p>
      </div>
    </motion.div>
  )
}

export default PrimaryTitle

const Smudge = () => {
  return (
    <svg className={styles.smudge} width="406" height="36" viewBox="0 0 406 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.70966 27.2071C120.597 8.91137 233.052 5.17311 345.624 12.2245C361.316 13.2074 377.207 14.8046 392.971 13.9068C394.84 13.8004 395.541 13.3257 396.717 11.893" stroke="#5E5AD6" strokeWidth="15" strokeLinecap="round" />
    </svg>
  )
}
