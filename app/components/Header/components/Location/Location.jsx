'use client'
import styles from './location.module.css'
import { motion } from "motion/react"

const Location = () => {
  return (
    <motion.div
    initial={{
      opacity:0
    }}
    animate={{
      opacity:1
    }}
    transition={{
      delay:0,
      duration: 0.5
    }}
    className={styles.container}>
      <h4 className={styles.title}>Your go-to experts</h4>
      <p className={styles.text}>Located in Greece - Available everywhere</p>
    </motion.div>
  )
}

export default Location