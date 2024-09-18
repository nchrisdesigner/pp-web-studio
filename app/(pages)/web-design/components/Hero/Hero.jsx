'use client'
import SecondaryTitle from '@/app/ui/SecondaryTitle/SecondaryTitle'
import styles from './hero.module.css'
import Title from '@/app/ui/Title/Title'
import Paragraph from '@/app/ui/Paragraph/Paragraph'
import MiniTextContainer from '@/app/components/Header/components/MiniTextContainer/MiniTextContainer'
import { motion } from 'framer-motion'
import { PiRocketLaunchBold } from "react-icons/pi"

import { useTransform } from "framer-motion"
import { useScroll } from "framer-motion"
import { useRef } from 'react'

const Hero = () => {
  const containerRef= useRef()
  const { scrollY } = useScroll()
  console.log(scrollY);
  

  const y = useTransform(
    scrollY,
    [0, 100],
    [0, 360],
    { clamp: false }
  )


  return (
    <header ref={containerRef} className={styles.header}>
      <div className={styles.sectionContainer}>
        <div className={styles.textContainer}>
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: .5
            }}>
            <SecondaryTitle align='left' color='white'>Your Digital First Impression</SecondaryTitle>
          </motion.div>
          <motion.div
            initial={{
              x: -30,
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
          >
            <Title color='white' align='left'>SKYROCKET YOUR BUSINESS <span className='purple'>SUCCESS</span></Title>
          </motion.div>
          <motion.div
            initial={{
              x: -30,
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              delay: .15
            }}
          >
            <Paragraph color='white' align='left'>
              Nowadays, possessing a website is not just a benefit but rather an important aspect that any business looking forward to succeeding must prioritize. An online presence is like a 24/7 storefront accessible to anyone. As more customers turn to the internet for information on goods and services, <span className='bold-text underline-text'>those businesses without websites will miss out on significant opportunities.</span>
            </Paragraph>
          </motion.div>
          <MiniTextContainer />
          {/* <div className={styles.btnContainer}>
            <div className={styles.absoluteElement}></div>
            <a href="#pricing" className={styles.btn}>Choose your plan</a>
          </div> */}
        </div>
        <motion.p
          initial={{
            y: 30,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            delay: 1
          }}
          className={styles.promiseTitle}>Your project deserves more than design — <span className="yellow bold-text">it’s a story waiting to be told.</span></motion.p>
      </div>

      {/* <motion.div
      animate={{y}}
      className={styles.rocketContainer}>
        <PiRocketLaunchBold className={styles.rocket} />
      </motion.div> */}
    </header>
  )
}

export default Hero