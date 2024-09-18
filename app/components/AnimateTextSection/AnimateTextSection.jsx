'use client'
import { motion, useInView } from 'framer-motion'
import { ReactLenis } from 'lenis/react'
import styles from './animatetextsection.module.css'
import { useRef } from 'react'
import PromiseTitle from '@/app/ui/PromiseTitle/PromiseTitle'

import { Anton } from 'next/font/google'
const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const titleVariants = {
  hidden: {
    y: 150
  },
  visible: {
    y: 0
  },
}

const textVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}


const AnimateTextSection = () => {

  const containerRef = useRef()
  const isInView = useInView(
    containerRef,
    {
      margin: "0px 0px -350px 0px",
      once: true
    }
  )


  return (
    <section ref={containerRef} className={`${styles.sectionContainer} container`}>
      {/* <ReactLenis root> */}
        <div className={styles.containerLeft}>
          <div className={styles.overflowContainer}>
            <h2
              className={`${anton.className}`}>WHERE</h2></div>
          <div className={styles.overflowContainer}>
            <h2 className={`${anton.className}`}>IMAGINATION</h2>
          </div>
          <div className={styles.overflowContainer}>
            <motion.p
              variants={textVariants}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              transition={{
                duration: .3,
                delay: .8
              }}
            >Loud and clear, our results speak volumes.</motion.p>
          </div>

        </div>
        <div className={styles.containerRight}>
          <div className={styles.overflowContainer}>
            <h2 className={`${anton.className}`}>MEETS</h2>
          </div>
          <div className={styles.overflowContainer}>
            <h2 className={`${anton.className}`}>PRECISION</h2>
          </div>
          <div className={styles.overflowContainer}>
            <motion.p style={{
              marginLeft: 'auto'
            }}
              variants={textVariants}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              transition={{
                duration: .3,
                delay: 1.3
              }}
            >
              Driven by a passion for perfection and a flair for creative excellence, every pixel in our work tells the story of the results we bring to life. </motion.p>
          </div>
        </div>

      {/* </ReactLenis> */}
      <div
        className={styles.miniTitle}>
        <PromiseTitle color='dark-purple'>
          Experience the difference when your vision is crafted with our signature precision and artistry.
        </PromiseTitle>
      </div>


    </section>
  )
}

export default AnimateTextSection

