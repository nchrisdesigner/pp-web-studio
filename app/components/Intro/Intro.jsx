'use client'

import { Anton } from 'next/font/google'
import styles from './intro.module.css'
import SecondaryTitle from '@/app/ui/SecondaryTitle/SecondaryTitle'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  },
}

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const smudgeVariants = {
  hidden: {
    // pathLegth: 0,
    // strokeWidth: 20,
    opacity: 0
  },
  visible: {
    // pathLength: 1,
    // strokeWidth: 20,
    opacity: 1
  }
}

const Intro = () => {

  const containerRef = useRef()
  const isInView = useInView(
    containerRef,
    {
      margin: "0px 0px -450px 0px",
      once: true
    }
  )

  return (
    <section ref={containerRef} className={`${styles.sectionContainer} container`}>
      <motion.div
        variants={titleVariants}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
      >
        <SecondaryTitle>CLIENT IS A BAD, BAD WORD</SecondaryTitle>
      </motion.div>

      <div className={styles.miniContainer}>
        <motion.h3
          variants={titleVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          transition={{
            delay: .4
          }}
          className={`${anton.className} ${styles.title}`}><span style={{ position: 'relative' }}>

            <svg
              className={styles.smudgeOne} width="206" height="104" viewBox="0 0 206 104" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                variants={smudgeVariants}
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                transition={{
                  delay: 1.2
                }}
                d="M10.0293 10.97C67.1527 47.7891 129.692 75.269 195.029 93.97" stroke="#5D5AD6" strokeWidth="20" strokeLinecap="round" />
            </svg>

            <svg className={styles.smudgeTwo} width="289" height="96" viewBox="0 0 289 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
              variants={smudgeVariants}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              transition={{
                delay: 1.62
              }}
              d="M10.1992 85.97C19.7147 84.3299 29.2014 80.4448 38.4395 77.5735C74.0656 66.5006 109.947 56.5673 146.016 47.5861C181.628 38.7187 217.61 31.5196 252.989 21.4498C262.034 18.8751 270.426 16.4717 278.207 10.97" stroke="#5D5AD6" strokeWidth="20" strokeLinecap="round" />
            </svg>

            CLIENT</span>-INSPIRED
        </motion.h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        transition={{
          delay: 2.2,
          duration: 0.5
        }}
      >
        <SecondaryTitle>WE PREFER</SecondaryTitle>
        <h3 className={`${anton.className} ${styles.title}`}>PARTNER-IN-CREATIONS</h3>
        <h3 className={`${anton.className} ${styles.title}`}>STORYTELLERS</h3>
      </motion.div>

      <motion.h4
      initial={{opacity: 0}}
      animate={isInView ? {opacity: 1} : {opacity: 0} }
      transition={{delay: 2.5}}
      className={styles.promiseTitle}>We don't design boring stuff. Promise.</motion.h4>

    </section>
  )
}

export default Intro