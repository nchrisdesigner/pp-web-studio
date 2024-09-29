'use client'
import SecondaryTitle from '@/app/ui/SecondaryTitle/SecondaryTitle'
import styles from './hero.module.css'
import Paragraph from '@/app/ui/Paragraph/Paragraph'
import MiniTextContainer from '@/app/components/Header/components/MiniTextContainer/MiniTextContainer'
import { motion } from 'framer-motion'

import { useTransform } from "framer-motion"
import { useScroll } from "framer-motion"
import { useRef } from 'react'
import Image from 'next/image'
import mobile from './../../../../assets/mobile-mockup-purple.png'
// import mobile from './../../../../assets/mobile-mockup.png'

import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const Hero = () => {
  const containerRef= useRef()
  const { scrollY } = useScroll()
  
  const y = useTransform(
    scrollY,
    [0, 100],
    [0, 360],
  )

  console.log(y);
  


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
            <h1 className={`${styles.title} ${anton.className}`}>SKYROCKET YOUR BUSINESS <span className='purple'>SUCCESS</span></h1>
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
              Nowadays, <span className='bold-text underline-text'>having a website is essential for any business aiming for success.</span> Think of it as a 24/7 storefront, always accessible to potential customers. With more consumers turning online for products and services, businesses without a website risk losing significant opportunities. 
            </Paragraph>
            <Paragraph color='white' align='left' ><span className='bold-text yellow'>Don’t let your competitors get ahead.</span></Paragraph>
          </motion.div>
          <MiniTextContainer />
        </div>

          <motion.figure 
          initial={{
            opacity:0,
            scale: 0.3
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x:y
          }}
          className={styles.imageContainer}>
          <Image className={styles.image} src={mobile} alt="Mobile Mockup Image" />
          </motion.figure>
      </div>
    </header>
  )
}

export default Hero