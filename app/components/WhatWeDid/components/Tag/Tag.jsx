import styles from './tag.module.css'

const Tag = ({tag}) => {
  if(tag === 'Web Design'){
    return (
      <span className={`${styles.greenTag} ${styles.tag}`}>{tag}</span>
    )
  }
  if(tag === 'Logo Design' || tag === 'Brand Identity'){
    return (
      <span className={`${styles.purpleTag} ${styles.tag}`}>{tag}</span>
    )
  }
  if(tag === 'Animation Video' || tag === 'Presentational Video'){
    return (
      <span className={`${styles.yellowTag} ${styles.tag}`}>{tag}</span>
    )
  }

  return (
    <span className={`${styles.whiteTag} ${styles.tag}`}>{tag}</span>
  )
}

export default Tag