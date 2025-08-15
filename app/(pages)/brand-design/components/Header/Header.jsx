'use client'

import styles from './header.module.css'
import Image from 'next/image'
import packageImage from '@/app/assets/mockup-large.png'
import { Anton } from 'next/font/google'
import { motion } from 'motion/react'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.gridContainer}`}>
        <motion.div
          initial={{
            x: -20,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          transition={{
            delay: 0.4
          }}
          className={styles.textContainer}>
          <h4 className={styles.secondaryTitle}>what other people say about you </h4>
          <h2 className={`${anton.className} ${styles.title}`}>YOUR ONLINE SIGNATURE</h2>
          <p className={styles.paragraph}>Strong branding isn’t just a nice-to-have. It’s your story, your vibe, your promise. <span className="bold-text"> Because when people know who you are and what you stand for, choosing you becomes a no-brainer.</span>
          </p>

          <h3 className={styles.secondary}>
            In a sea of sameness, <span className="purple">choose to stand out.</span>
          </h3>

          {/* In a sea of sameness, it’s what makes your brand feel real — and worth remembering.   */}
        </motion.div>
        <motion.figure
          initial={{
            scale: 0.2,
            opacity: 0
          }}
          animate={{
            scale: .9,
            rotate: '5deg',
            opacity: 1.5
          }}
          transition={{
            delay: 2
          }}
          className={styles.imageContainer}>
          <Image className={styles.image} src={packageImage} alt='Hero image that shows a package' />
        </motion.figure>
      </div>

    </header>
  )
}

export default Header