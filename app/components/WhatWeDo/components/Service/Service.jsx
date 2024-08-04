'use client'
import { motion } from 'framer-motion'
import styles from './service.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { GoArrowUpLeft } from "react-icons/go";

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
  )
}

export default Card