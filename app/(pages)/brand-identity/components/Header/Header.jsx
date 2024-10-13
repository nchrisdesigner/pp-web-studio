'use client'

import styles from './header.module.css'
import Image from 'next/image'
import packageImage from '@/app/assets/mockup-large.png'
import { Anton } from 'next/font/google'
import { motion } from 'framer-motion'

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
            delay: 0.1
          }}
          className={styles.textContainer}>
          <h4 className={styles.secondaryTitle}>what other people say about you </h4>
          <h2 className={`${anton.className} ${styles.title}`}>YOUR ONLINE SIGNATURE</h2>
          <p className={styles.paragraph}>Having strong branding is essential for businesses as it serves as the foundation upon which trust, recognition, and loyalty are built. A well-crafted brand identity communicates your company's story, values and mission. <span className="bold-text purple"> It distinguishes you from competitors,</span> helping you to stand out in a crowded marketplace.</p>
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
            delay: 0.4
          }}
          className={styles.imageContainer}>
          <Image className={styles.image} src={packageImage} alt='Hero image that shows a package' />
        </motion.figure>
      </div>

    </header>
  )
}

export default Header