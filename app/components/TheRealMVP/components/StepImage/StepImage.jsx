import styles from './stepimage.module.css'
import { motion } from "motion/react"
import Image from 'next/image'

const StepImage = ({selectedStep, steps}) => {
  return (
    <motion.figure
      // key={id}
      className={styles.imageContainer}
      initial={{
        opacity: 0,
        x: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 20,
      }}
      transition={{
        duration: 0.2,
        ease: 'easeInOut',
      }}
    >
      <Image
        className={styles.image}
        src={steps[selectedStep - 1].src}
        alt={steps[selectedStep - 1].alt}
      />
    </motion.figure>
  )
}

export default StepImage