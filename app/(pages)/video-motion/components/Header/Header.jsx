'use client'
import Paragraph from '@/app/ui/TextComponents/Paragraph/Paragraph'
import styles from './header.module.css'
import { MdOutlineZoomInMap } from "react-icons/md"
import { motion } from "motion/react"

// import Icon from '@/app/ui/Icon/Icon'

import { Anton } from 'next/font/google'
import PurpleButton from '@/app/ui/Buttons/PurpleButton/PurpleButton'
const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})


const Header = () => {
  return (
    <header className={`${styles.headerContainer}`}>
      <div className={`container ${styles.sectionContainer}`}>

        <div className={styles.textContainer}>
          <h2 className={styles.miniTitle}>CAPTURE ATTENTION INSTANTLY WITH STUNNING VIDEOS</h2>
          <h1 className={`${anton.className} ${styles.title}`}>
            <motion.span
              initial={{
                x: 0,
                y: 0
              }}
              animate={{
                x: -75,
                y: -45
              }}
              transition={{
                delay: 2.2,
                ease: 'easeOut'
              }}
              className={`${anton.className} ${styles.absoluteTitle}`}
            >
              WE MOVE BRANDS
            </motion.span>
            <motion.span
              initial={{
                x: 0,
                y: 0
              }}
              animate={{
                x: 75,
                y: 45
              }}
              transition={{
                delay: 2.2,
                ease: 'easeOut'
              }}
              className={`${anton.className} ${styles.absoluteTitle}`}
            >
              WE MOVE BRANDS
            </motion.span>
            WE MOVE BRANDS</h1>
          <Paragraph color='white'>

            In a busy world,<strong> video gets eyes on you right away.</strong>  It tells your story quick and clear — no extra fluff, just feeling. With the right visuals, people get your message instantly and, more important, they remember it. When it’s done right, video connects with people and gets them to take action. 
          </Paragraph>
          <div className={styles.shapeContainer}>
            <motion.svg
            initial={{
              x: -1400,
              opacity:0
            }}
            animate={{
              x:0,
              opacity:1,
              transition:{
                duration: .6,
                delay: 1.5,
                ease: 'easeInOut',
                type:"spring",
      
              }
            }}
            width="391" height="471" viewBox="0 0 391 471" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M387.245 238.988L7.45911 469.062C4.79334 470.677 1.38657 468.757 1.38657 465.641L1.38659 5.4932C1.38659 2.37642 4.79336 0.457106 7.45914 2.07203L387.244 232.146C389.814 233.703 389.814 237.431 387.245 238.988Z" fill="#2C2C99" />
            </motion.svg>
          </div>
          <div className={styles.btnContainer}>

            <PurpleButton id='#video-pricing' icon={<MdOutlineZoomInMap/>}>Zoom Into Plans</PurpleButton>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header