import styles from './secondarytitle.module.css'

const SecondaryTitle = ({children, color}) => {
  return (
    <h4 className={styles.title} style={{color : `var(--${color})`}}>{children}</h4>
  )
}

export default SecondaryTitle