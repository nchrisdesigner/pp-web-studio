'use client'
import styles from './whoweare.module.css'
import { motion } from 'motion/react'
import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import Letter from '@/app/ui/Letter/Letter'
import { Anton } from 'next/font/google'
import TertiaryTitle from '@/app/ui/TertiaryTitle/TertiaryTitle'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const variants = {
  initial: { opacity: 0, x: -15 },
  whileInView: { opacity: 1, x: 5 },
  transition: { duration: 0.1 }
}

const WhoWeAre = () => {

  return (
    <section className={` ${styles.sectionContainer}`}>
      <div className='container'>
        <div className={styles.perspectiveContainer}>
          <MiniTitle>WHO WE ARE</MiniTitle>
          <h2 className={`${anton.className} ${styles.title}`}>
            <Letter textSize="title">K</Letter>REATIVE THINKERS, PROBLEM SOLVERS, GAME CHANGERS
          </h2>
          <motion.div
            variants={variants}
            initial='initial'
            whileInView='whileInView'
            transition={{
              duration: 0.1,
              delay: 0.3
            }}>

            <TertiaryTitle>
              CLIENT IS A BAD, BAD WORD. WE PREFER, < br />
              PARTNER-IN-<Letter textSize='title'>K</Letter>REATION STORYTELLERS
            </TertiaryTitle>
          </motion.div>


          <div className={`${styles.gridContainer}`}>
            <div className={styles.lineSVG}>
              <motion.svg
                aria-label="Animated Line"
                width="234"
                height="122"
                viewBox="0 0 234 122"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  initial={{
                    opacity: 0,
                    pathLength: 0,
                    strokeDasharray: "0 1",
                    strokeDashoffset: 4,
                  }}
                  whileInView={{
                    opacity: 1,
                    pathLength: 1,
                    strokeDasharray: "1 0",
                    strokeDashoffset: 0,
                  }}
                  transition={{
                    delay: 0.35,
                    duration: 0.7
                  }}
                  d="M1.05859 1.5C24.2364 11.241 47.1287 21.4782 69.1671 33.6274C92.5169 46.4995 115.952 61.8548 132.119 83.5048C137.124 90.2066 143 99.0964 142.878 107.911C142.801 113.434 135.674 117.975 131.141 119.315C123.288 121.638 113.177 120.32 105.711 117.318C99.916 114.989 89.8842 108.754 89.8842 101.477C89.8842 88.7399 117.161 86.9402 124.428 86.1229C160.625 82.0519 197.337 87.8847 232.059 97.8822" stroke="#5D5AD6"
                  strokeWidth="3"
                  strokeLinecap="butt" />
              </motion.svg>
            </div>

            <motion.p
              className={styles.paragraph}
              initial={{
                opacity: 0,
                y: 15
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.25
              }}>
              Here’s the thing — <span className='purple bold-text'>every brand faces hurdles.</span> Maybe it’s getting your message right or making sure your site works for visitors. That’s where we step in. We listen, figure out what’s going on, and fix it with <Letter>K</Letter>reative solutions. The result? A website that tells your story clearly and helps your business grow. No fluff. Just real, honest work that makes a difference.
            </motion.p>

          </div>
        </div>

      </div>
    </section>
  )
}

export default WhoWeAre

