import styles from './principle.module.css'
import { ImCheckmark2 } from "react-icons/im"

const Principle = ({ id, title, text}) => {
  return (
    <div className={styles.principle} key={id}>
      <h4><ImCheckmark2 style={{ color: 'var(--green)', fontSize: '2rem' }} />{title}</h4>
      <p>{text}</p>
    </div>
  )
}

export default Principle