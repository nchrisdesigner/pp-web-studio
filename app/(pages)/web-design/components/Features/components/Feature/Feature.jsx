import styles from './feature.module.css'

const Feature = ({ id, title, desc }) => {
  return (
    <div key={id} className={styles.feature}>
      <span>{id}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default Feature