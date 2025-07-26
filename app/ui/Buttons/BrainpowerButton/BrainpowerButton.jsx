import styles from './brainpowerbutton.module.css'
import { MdBolt } from "react-icons/md"

const BrainpowerButton = () => {
  return (
    <div>
      <a href="#contact" className={styles.link}>
        <span className={styles.spinner}></span>
        <span className={styles.content}>
          <MdBolt className={styles.icon} />
          View Our Work
        </span>
      </a>
    </div>
  )
}

export default BrainpowerButton