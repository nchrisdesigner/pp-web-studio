'use client'
import styles from './whoweare.module.css'
import Principle from './components/Principle/Principle'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import Title from '@/app/ui/Title/Title'
import PixelPerfektExplain from '@/app/ui/PixelPerfektExplain/PixelPerfektExplain'
import { principles } from '@/app/data/data'
import { Anton } from 'next/font/google'

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
          <MiniTitle>WHO WE ARE</MiniTitle>
          {/* <Title color='white' style={{ color: `var(--white})` }}>CREATIVE THINKERS, PROBLEM SOLVERS, GAME CHANGERS</Title> */}

          <h2 className={`${anton.className} ${styles.title}`}>
          CREATIVE THINKERS, PROBLEM SOLVERS, GAME CHANGERS
          </h2>
          <PixelPerfektExplain />

          <div className={`${styles.gridContainer}`}>
            <div className={styles.lineSVG}>
              <svg width="234" height="122" viewBox="0 0 234 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.05859 1.5C24.2364 11.241 47.1287 21.4782 69.1671 33.6274C92.5169 46.4995 115.952 61.8548 132.119 83.5048C137.124 90.2066 143 99.0964 142.878 107.911C142.801 113.434 135.674 117.975 131.141 119.315C123.288 121.638 113.177 120.32 105.711 117.318C99.916 114.989 89.8842 108.754 89.8842 101.477C89.8842 88.7399 117.161 86.9402 124.428 86.1229C160.625 82.0519 197.337 87.8847 232.059 97.8822" stroke="#5D5AD6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <p className={styles.paragraph}>
              At PixelPerfekt, <span className='purple bold-text'>each pixel has its story</span>. Therefore we are not just web design agency but rather a creative center where we focus on materializing all those digital concepts you have got. As brand architects, we meticulously construct digital presences <span className="bold-text">that reflect your core values and ambitions.</span>
            </p>

          </div>

        </div>

        <div className={styles.principlesContainer}>

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
        </div>

        {/* <Link className={styles.btn} href="/web-design" >About Us <BsArrowUpRightCircleFill className={styles.icon} /></Link> */}
        

      </div>
    </section>
  )
}

export default WhoWeAre