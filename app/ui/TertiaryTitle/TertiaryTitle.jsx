import styles from './tertiarytitle.module.css'

const TertiaryTitle = ({ children, color = '#fff', align = 'left' }) => {
  return (
    <h4 
    style={{color:color, textAlign:align}}
    className={styles.tertiaryTitle}>{children}</h4>
  )
}

export default TertiaryTitle