'use client'
import { Anton } from 'next/font/google'
import styles from './primarytitle.module.css'
import { motion } from 'framer-motion'
import { gsap } from "gsap"

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"

gsap.registerPlugin(DrawSVGPlugin)


import Letter from '@/app/ui/Letter/Letter'
import BrainpowerButton from '@/app/ui/Buttons/BrainpowerButton/BrainpowerButton'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'


const anton = Anton({
  weight: ['400'],
  subsets: ['latin']
})

const textVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      // delay: 1.1,
      ease: 'easeOut',
      type: 'spring'
    }
  }
}

const miniTitleVariants = {
  hidden: {
    opacity: 0,
    y: 10
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 1.5,
      ease: 'easeIn',
      type: 'spring'
    }
  }
}

const PrimaryTitle = () => {


  return (
    <div className={styles.container}>
      <h1 className={` ${styles.primaryTitle} ${anton.className} `}>
        <span className='block-element'>
          WE SOLVE&nbsp;
          <span className='faint-text'>
            PROBLEMS
          </span>
        </span>
        <div>
          THROUGH <span className={styles.noWrapWord}> <Letter textSize='title'>K</Letter>REATIVITY</span> 
        </div>

      </h1>

      <motion.div
        variants={textVariants}
        initial='hidden'
        animate='show'>
        <p className={`${styles.text} `}>
          We’re a <Letter textSize="paragraph">K</Letter>reative web design studio based in Greece, designing beautiful and distinctive work for brands that <span className='bold-text'>dare to stand out.</span>
        </p>

      </motion.div>

      <BrainpowerButton />
      


    </div>
  )
}

export default PrimaryTitle

const Smudge = () => {
  return (
     <svg className={styles.smudge} width="406" height="36" viewBox="0 0 406 36" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path className={styles.svgClass} d="M8.70966 27.2071C120.597 8.91137 233.052 5.17311 345.624 12.2245C361.316 13.2074 377.207 14.8046 392.971 13.9068C394.84 13.8004 395.541 13.3257 396.717 11.893" stroke="#5E5AD6" strokeWidth="15" strokeLinecap="round" />
     </svg>
  )
}

const drawVariants = {
  hidden: {
    pathLength: 0
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 5
    }
  }
}

const SvgLine = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={379}
    height={40}
    className={styles.smudge}
    viewBox="0 0 379 40"
    fill="none"
    initial="hidden"
    animate="visible"
  >
    <motion.path
      variants={drawVariants}
      custom={3}
      initial="hidden"
      animate="visible"
      // className={styles.svgClass}
      fill="#5E5AD6"
      d="M376.518 10.671c-1.255-2.642-2.803-5.04-4.914-7.04-.971-.921-3.137-2.885-4.792-2.443C354.971.19 343.061.362 331.177.355c-12.023-.004-24.049.04-36.064.321a1961 1961 0 0 0-71.936 3.01c-47.927 2.87-95.666 7.639-143.262 14.168-13.3 1.829-26.605 3.806-39.938 5.308-6.464.73-12.942 1.35-19.435 1.802-3.322.227-6.648.414-9.97.641-2.538.17-8.004-.558-9.776 1.391.019.022.03.05.048.071-.95.602-.836 2.624-.514 3.861.739 2.82 2.515 5.738 5.014 7.216 2.732 1.608 6.087 1.274 9.178 1.384 3.038.112 6.074.15 9.116.101a435.717 435.717 0 0 0 18.1-.704c12.074-.71 24.08-1.77 36.105-3.05 24.045-2.563 48.094-4.977 72.199-6.84 48.198-3.718 96.423-6.218 144.752-6.738 13.567-.142 27.133-.25 40.695-.195 13.476.048 26.987.694 40.445.025 5.148-.253 1.666-9.17.578-11.463l.006.007Z"
    />
  </motion.svg>
)


