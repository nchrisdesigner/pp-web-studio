import styles from './cube.module.css'
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const Cube = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.cube} ${anton.className}`}>
        <div className={`${styles.face} ${styles.front}`}>Tell Your Story with Moving Images</div>
        <div className={`${styles.face} ${styles.back}`}>Turn Complex Concepts into Visuals</div>
        <div className={`${styles.face} ${styles.left}`}>Animation That Grabs Attention Fast</div>
        <div className={`${styles.face} ${styles.right}`}>Give Your Brand Movement</div>
        <div className={`${styles.face} ${styles.top}`}>Powerful Brand Presence</div>
        <div className={`${styles.face} ${styles.bottom}`}>Stand Out with Motion</div>
      </div>
        <div className={styles.shadow}></div>
    </div>
  )
}

export default Cube