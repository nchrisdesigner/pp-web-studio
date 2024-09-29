import styles from './icon.module.css'
import { LiaLongArrowAltDownSolid } from "react-icons/lia"

const Icon = () => {
  return (
    <div className={styles.iconContainer}>
      <LiaLongArrowAltDownSolid className={styles.scrollIcon} />
    </div>
  )
}

export default Icon