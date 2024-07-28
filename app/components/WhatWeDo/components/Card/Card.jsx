'use client'
import { motion } from 'framer-motion'
import styles from './card.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { BiPlus } from "react-icons/bi"
import { BiMinus } from "react-icons/bi"

const Card = ({ id, mainTitle, title, boldText, desc, image }) => {
  const [isOpen, setIsOpen] = useState(false)

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

  return (
    <div key={id} className={styles.service}>
      <Image src={image} alt={title} className={styles.image} />
      <div className={styles.miniGrid}>
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
          <h2 className="outline-text-white">{mainTitle}</h2>
          {
            !isOpen
            ?
            <BiPlus className={styles.icon} onClick={() => setIsOpen(isOpen => !isOpen)} />
            :
            <BiMinus className={styles.icon} onClick={() => setIsOpen(isOpen => !isOpen)} />

          }
        </div>

      </div>
    </div>
  )
}

export default Card