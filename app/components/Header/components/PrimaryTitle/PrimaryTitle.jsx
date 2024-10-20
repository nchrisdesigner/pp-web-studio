'use client'
import { Poppins } from 'next/font/google'
import styles from './primarytitle.module.css'
import { motion } from 'framer-motion'
import localFont from 'next/font/local'
import PromiseTitle from '@/app/ui/PromiseTitle/PromiseTitle'

const myFont = localFont({
  src: './Unaessthetic.ttf',
  display: 'swap',
})
const myFontCondensed = localFont({
  src: './Druk-Heavy-Trial.otf',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})

const textVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      // delay: 1.1,
      ease: 'easeOut',
      type: 'spring'
    }
  }
}

const miniTitleVariants = {
  hidden: {
    opacity: 0,
    y: 10
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 1.5,
      ease: 'easeIn',
      type: 'spring'
    }
  }
}

const PrimaryTitle = () => {
  return (
    <div className={styles.container}>
      <h1 className={` ${styles.primaryTitle} ${myFontCondensed.className} `}>
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

      <motion.div
        variants={textVariants}
        initial='hidden'
        animate='show'>
        <p className={`${styles.text} ${poppins.className}`}>
          We’re a creative web design studio based in Greece, crafting beautiful and distinctive work for brands that <span className='bold-text purple'>dare to stand out.</span>
        </p>

      </motion.div>

      <motion.div
        variants={miniTitleVariants}
        initial='hidden'
        animate='show'
      >
        <PromiseTitle color='white'>
          We don't design boring stuff. Promise.
        </PromiseTitle>
      </motion.div>
    </div>
  )
}

export default PrimaryTitle

const Smudge = () => {
  return (
    <svg className={styles.smudge} width="406" height="36" viewBox="0 0 406 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={styles.svgClass} d="M8.70966 27.2071C120.597 8.91137 233.052 5.17311 345.624 12.2245C361.316 13.2074 377.207 14.8046 392.971 13.9068C394.84 13.8004 395.541 13.3257 396.717 11.893" stroke="#5E5AD6" strokeWidth="15" strokeLinecap="round" />
    </svg>
  )
}
