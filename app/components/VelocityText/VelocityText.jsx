'use client'
import Letter from '@/app/ui/Letter/Letter'
import styles from './velocitytext.module.css'
import { motion, useAnimationFrame, useScroll, useSpring, useTransform, useVelocity } from 'motion/react'


import { Anton } from 'next/font/google'
import { useRef } from 'react'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const VelocityText = () => {
  const containerRef = useRef()

  const {  scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ['100%', '-120%'])

  return (
    <section ref={containerRef} className={styles.sectionContainer}>
      <motion.h2
        style={{
          x: x,
          rotate: '-3.5deg',
        }}
        className={anton.className}>
        WE <Letter textSize='title'>K</Letter>O-STRATEGIZE. WE <Letter textSize='title'>K</Letter>O-DESIGN. WE <Letter textSize='title'>K</Letter>O-WIN.
      </motion.h2>

    </section>
  )
}

export default VelocityText