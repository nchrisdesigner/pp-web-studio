import styles from './secondarytitle.module.css'

const SecondaryTitle = ({children, color, align}) => {
  return (
    <h4 className={styles.title} style={{color : `var(--${color})`, textAlign: `${align}`}}>{children}</h4>
  )
}

export default SecondaryTitle