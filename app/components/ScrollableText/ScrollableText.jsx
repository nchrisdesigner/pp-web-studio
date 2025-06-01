import styles from './scrollabletext.module.css'
import { Anton } from "next/font/google"

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const ScrollableText = () => {
  return (
    <section className={`${styles.sectionContainer} section padding`}>

      <div className={styles.containerLeft}>
        <div className={styles.overflowContainer}>
          <h2 className={anton.className}>IF IT'S</h2>
        </div>
        <div className={styles.overflowContainer}>
          <h2 className={anton.className}>SCROLLABLE</h2>
        </div>
        <div className={styles.overflowContainer}>
          <p>Built to be seen and remembered.</p>
        </div>
      </div>
      <div className={styles.containerRight}>
      <div className={styles.overflowContainer}>
          <h2 className={anton.className}>IT SHOULD BE</h2>
        </div>
        <div className={styles.overflowContainer}>
          <h2 className={anton.className}>MEMORABLE</h2>
        </div>
        <div className={styles.overflowContainer}>
          <p>Because motion tells a better story.</p>
        </div>
      </div>
    </section>
  )
}

export default ScrollableText