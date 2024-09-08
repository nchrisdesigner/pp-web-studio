import styles from './promisetitle.module.css'

const PromiseTitle = ({children, color}) => {
  return (
    <p className={styles.promiseTitle} style={{color:`var(--${color})`}}>{children}</p>
  )
}

export default PromiseTitle