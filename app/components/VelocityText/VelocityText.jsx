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

  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 500
  })

  const x1 = useTransform(scrollYProgress, [0, 1], ['100%', '-100%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['-100%', '100%'])

  const velocityThreshold = 10;
  const clampedVelocity = useTransform(smoothVelocity, v =>
    Math.abs(v) < velocityThreshold ? 0 : v
  );

  const skewFactor1 = useTransform(clampedVelocity, [-1000, 1000], [10, -10]);
  const skew1 = useSpring(0, {
    bounce: 0,
    visualDuration: 0
  });

  useAnimationFrame(() => {
    skew1.set(skewFactor1.get());
  });

  const skewFactor2 = useTransform(clampedVelocity, [-1000, 1000], [-10, 10]);
  const skew2 = useSpring(0, {
    bounce: 0,
    visualDuration: 0
  });

  useAnimationFrame(() => {
    skew2.set(skewFactor2.get());
  });


  return (
    <section ref={containerRef} className={styles.sectionContainer}>
      <motion.h2
        style={{
          // rotate: '-3.5deg',
          x: x1,
          skew: skew1
        }}
        className={anton.className}>
        CLIENT IS A BAD, BAD WORD. WE PREFER,
      </motion.h2>

      <motion.h2
        style={{
          // rotate: '-3.5deg',
          x: x2,
          skew: skew2
        }}
        className={anton.className}>
        PARTNER-IN-<Letter textSize="title">K</Letter>REATION STORYTELLERS
      </motion.h2>

    </section>
  )
}

export default VelocityText