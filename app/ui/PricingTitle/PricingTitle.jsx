import styles from './pricingtitle.module.css'

const PricingTitle = ({children, color}) => {
  return (
    <h2 style={{color: `var(--${color})`}} className={styles.title}>{children}</h2>
  )
}

export default PricingTitle