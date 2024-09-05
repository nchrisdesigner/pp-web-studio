'use client'
import { motion, useInView } from 'framer-motion'
import { ReactLenis } from 'lenis/react'
import styles from './animatetextsection.module.css'
import { Anton } from 'next/font/google'
import { useRef } from 'react'

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
      // once: true
    }
  )


  return (
    <section ref={containerRef} className='container'>
      <ReactLenis root>
        <div className={styles.containerLeft}>

          <div className={styles.overflowContainer}>
            <motion.h2
              variants={titleVariants}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              transition={{
                duration: .3,
                delay: .4
              }}
              className={`${anton.className}`}>WHERE</motion.h2></div>
          <div className={styles.overflowContainer}>
            <motion.h2
              variants={titleVariants}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              transition={{
                duration: .3,
                delay: .45
              }}
              className={`${anton.className}`}>IMAGINATION</motion.h2>
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
            <motion.h2
              variants={titleVariants}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              transition={{
                duration: .3,
                delay: .7
              }}
              className={`${anton.className}`}>MEETS</motion.h2>
          </div>
          <div className={styles.overflowContainer}>
            <motion.h2
              variants={titleVariants}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              transition={{
                duration: .3,
                delay: .75
              }}
              className={`${anton.className}`}>PRECISION</motion.h2>
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
              Driven by a passion for perfection and a flair for creative excellence, every pixel in our work tells the story of the results we bring to life. At Pixel Perfekt, your ideas don’t just take shape—they’re transformed into something extraordinary.</motion.p>
          </div>
        </div>


      </ReactLenis>

      <motion.h3 
      variants={textVariants}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration: .3,
        delay: 1.6
      }}
      className={styles.promiseTitle}>Experience the difference when your vision is crafted with our signature precision and artistry.</motion.h3>
    </section>
  )
}

export default AnimateTextSection

// Experience the difference when your vision is crafted with our signature precision and artistry.