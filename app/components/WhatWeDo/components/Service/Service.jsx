'use client'
import { motion } from "motion/react"
import styles from './service.module.css'
import { useState } from 'react'
import { BiRightArrowAlt } from "react-icons/bi"
import Link from 'next/link'
import { GiCardboardBoxClosed } from "react-icons/gi"
import { GiCardboardBox } from "react-icons/gi"

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
    // top: '40%',
    // left: '60%',
    transform: 'translate(10rem, 10rem) scale(1.8)',
    opacity: .1
  }
}

const Card = ({ id, mainTitle, title, boldText, desc, link, image }) => {
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
          <Link className={styles.link} href={link}>Learn More <BiRightArrowAlt className={styles.miniIcon} />
          </Link>
        </motion.p>


        <div className={styles.titleContainer}>
          <h2 className={isOpen ? 'purple-text' : 'outline-text-white'}>{mainTitle}</h2>
            {
              !isOpen 
              ? 
              <GiCardboardBoxClosed className={styles.icon} onClick={() => setIsOpen(isOpen => !isOpen)} /> 
              : 
              <GiCardboardBox className={styles.icon} onClick={() => setIsOpen(isOpen => !isOpen)} />
            }
        </div>
      </div>
    </>
  )

}

export default Card