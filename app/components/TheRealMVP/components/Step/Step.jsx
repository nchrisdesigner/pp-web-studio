import styles from './step.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { MdKeyboardArrowDown } from "react-icons/md"

const Step = ({isSelected, handleSelectStep, desc, id, title, degree}) => {
  return (
      <div
        style={
          isSelected
            ? { borderBottom: '1.5px solid var(--purple)' }
            : { borderBottom: '1px solid var(--purple-2)' }
        }
        key={id}
        className={styles.step}
        onClick={() => handleSelectStep(id)}
      >
        <h5
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '.75rem',
          }}
        >
          {title}
          <MdKeyboardArrowDown
            className={styles.icon}
            style={isSelected ? { transform: `rotate(${degree}deg)` } : {}}
          />
        </h5>

        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
            >
              <motion.p>{desc}</motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  )
}

export default Step