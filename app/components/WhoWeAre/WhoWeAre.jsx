'use client'
import styles from './whoweare.module.css'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import PixelPerfektExplain from '@/app/ui/PixelPerfektExplain/PixelPerfektExplain'
import { Anton } from 'next/font/google'
import Letter from '@/app/ui/Letter/Letter'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const principleVariants = {
  hidden: {
    opacity: 0,
    y: 35
  },
  visible: {
    opacity: 1,
    y: 0,
  }
}

const WhoWeAre = () => {
  const containerRef = useRef(null)
  const isInView = useInView(
    containerRef,
    {
      margin: "0px 0px -200px 0px",
      // threshold: 0.5,
      once: true
    }
  )

  return (
    <section className={` ${styles.sectionContainer}`}>
      <div className='container'>
        <div className={styles.perspectiveContainer}>
          <motion.div
          initial={{
            opacity:0
          }}
          whileInView={{
            opacity:1,
            delay:1
          }}
          >
            <MiniTitle>WHO WE ARE</MiniTitle>
          </motion.div>

          <h2 className={`${anton.className} ${styles.title}`}>
            <Letter textSize="title">K</Letter>REATIVE THINKERS, PROBLEM SOLVERS, GAME CHANGERS
          </h2>
          <PixelPerfektExplain />

          <div className={`${styles.gridContainer}`}>
            <div className={styles.lineSVG}>
              {/* <svg width="234" height="122" viewBox="0 0 234 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.05859 1.5C24.2364 11.241 47.1287 21.4782 69.1671 33.6274C92.5169 46.4995 115.952 61.8548 132.119 83.5048C137.124 90.2066 143 99.0964 142.878 107.911C142.801 113.434 135.674 117.975 131.141 119.315C123.288 121.638 113.177 120.32 105.711 117.318C99.916 114.989 89.8842 108.754 89.8842 101.477C89.8842 88.7399 117.161 86.9402 124.428 86.1229C160.625 82.0519 197.337 87.8847 232.059 97.8822" stroke="#5D5AD6" strokeWidth="2" strokeLinecap="round" />
              </svg> */}
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
              At PixelPerfekt, <span className='purple bold-text'>each pixel has its story</span>. Therefore we are not just web design agency but rather a creative center where we focus on materializing all those digital concepts you have got. As brand architects, we meticulously construct digital presences <span className="bold-text">that reflect your core values and ambitions.</span>
            </motion.p>
          </div>
        </div>
        {/* <div className={styles.principlesContainer}>
          <motion.h3
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: isInView ? 1 : 0
            }}
            transition={{
              duration: .5,
              delay: .5
            }}
          >
            WE ARE GUIDED BY THREE MAJOR PRINCIPLES
          </motion.h3>

          <div ref={containerRef} className={styles.principleContainer}>
            {principles.map((principle, index) => {
              return (
                <motion.div
                  key={principle.id}
                  variants={principleVariants}
                  initial='hidden'
                  animate={isInView ? 'visible' : 'hidden'}
                  transition={{
                    delay: index * 0.2 + .7, // Adjusted for delay and index
                    type: "spring",
                    stiffness: 100,
                    damping: 12
                  }}
                >
                  <Principle {...principle} />
                </motion.div>
              )
            })}
          </div>
        </div> */}


      </div>
    </section>
  )
}

export default WhoWeAre