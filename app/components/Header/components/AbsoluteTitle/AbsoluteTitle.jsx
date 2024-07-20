'use client'

import styles from './absolutetitle.module.css'
import { Anton } from 'next/font/google'
import { motion } from 'framer-motion'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const titleVariants = {
  hidden:{
    opacity: 0
  },
  visible:{
    opacity: '3%',
    transition: {
      duration: 1,
    }
    
  },
  

}



const AbsoluteTitle = () => {
  return (
    <motion.h3
    variants={titleVariants}
    initial="hidden"
    animate="visible"
    className={` ${anton.className} ${styles.absoluteTitle}`}>PIXEL PERFEKT</motion.h3>
  )
}

export default AbsoluteTitle