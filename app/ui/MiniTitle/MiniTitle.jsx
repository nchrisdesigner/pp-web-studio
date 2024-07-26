import styles from './minititle.module.css'

const MiniTitle = ({children, align}) => {
  return (
    <h3 style={{textAlign: {align}}} className={styles.miniTitle}>{children}</h3>
  )
}

export default MiniTitle