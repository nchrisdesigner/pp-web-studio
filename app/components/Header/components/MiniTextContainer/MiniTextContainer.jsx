'use client'
import Image from 'next/image'
import styles from './minitextcontainer.module.css'
import { miniText } from '@/app/data/data'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { 
    opacity: 1
   },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    y:30 
  },
  show: { 
    opacity: 1,
    y:0
  }
}

const MiniTextContainer = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='show'
      className={styles.container}>
      {miniText.map(({ id, title, desc, icon }) => {
        return (
          <motion.div key={id} variants={itemVariants} className={styles.item}>
            <h3 className={styles.title}>
              {/* <Image src={icon} alt='icon' /> */}
              {title}
            </h3>
            <p className={styles.text}>{desc}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default MiniTextContainer