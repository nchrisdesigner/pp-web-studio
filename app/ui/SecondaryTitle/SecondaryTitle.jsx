import styles from './secondarytitle.module.css'

const SecondaryTitle = ({children}) => {
  return (
    <h4 className={styles.title}>{children}</h4>
  )
}

export default SecondaryTitle