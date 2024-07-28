import styles from './paragraph.module.css'

const Paragraph = ({children, align, color}) => {
  return (
    <p style={align === 'center' ? {margin: '0 auto', color: `var(--${color})`} : {color: `var(--${color})`}} className={styles.paragraph}>
      {children}
    </p>
  )
}

export default Paragraph