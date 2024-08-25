'use client'
import { motion } from 'framer-motion'
import styles from './service.module.css'
import { useState } from 'react'
import { GoArrowUpLeft } from "react-icons/go";

const textVariants = {
  hidden: {
    opacity: 0,
    x: -10
  },
  visible: {
    opacity: 1,
    x: 0
  },
}

const svgVariants = {
  hidden: {
    top: '1.6rem',
    left: '1.6rem',
    transform: 'scale(1)',
    opacity: 1
  },
  visible: {
    top: '40%',
    left: '60%',
    transform: 'scale(2)',
    opacity: .2
  }
}

const Card = ({ id, mainTitle, title, boldText, desc, image }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && <div className={styles.borderElement}></div>}
      {isOpen && <div className={styles.blurElement}></div>}
      <div key={id} className={`relative ${styles.service}`}>

        <motion.div
          variants={svgVariants}
          layout
          initial='hidden'
          animate={isOpen ? 'visible' : 'hidden'}
          className={styles.svgContainer}>
          {image}
        </motion.div>

        <motion.h3
          variants={textVariants}
          initial='hidden'
          animate={isOpen ? 'visible' : 'hidden'}
        >
          {title}
        </motion.h3>

        <motion.p
          variants={textVariants}
          initial='hidden'
          animate={isOpen ? 'visible' : 'hidden'}
        ><span className='bold-text'>
            {boldText}
          </span>
          {desc}
        </motion.p>

        <div className={styles.titleContainer}>
          {/* <h2 className="outline-text-white">{mainTitle}</h2> */}
          <h2 className={isOpen ? 'purple-text' : 'outline-text-white'}>{mainTitle}</h2>

          <GoArrowUpLeft
            className={styles.icon}
            style={
              !isOpen
                ?
                {
                  transform: `rotate(0)`
                }
                :
                {
                  transform: `rotate(-45deg)`
                }

            }
            onClick={() => setIsOpen(isOpen => !isOpen)} />
        </div>
      </div>
    </>
  )

}

export default Card