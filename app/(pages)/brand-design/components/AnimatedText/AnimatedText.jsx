import styles from './animatedtext.module.css'
import { Anton } from 'next/font/google'


const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const AnimatedText = () => {
  return (
    <section className={`${styles.sectionContainer}`}>
      <div className={styles.stickyContainer}>
        <div className={` container ${styles.perspectiveContainer}`}>
          <h2 className={`${styles.title} ${anton.className} ${styles.titleOne}`}>PEOPLE IGNORE</h2>
          <h2 className={`${styles.title} ${anton.className} ${styles.titleTwo}`}><span className='purple'>DESIGN</span> THAT</h2>
          <h2 className={`${styles.title} ${anton.className} ${styles.titleThree}`}>IGNORES PEOPLE</h2>
          <p className={styles.text}>Your brand is a story that deserves to be told.</p>
        </div>
      </div>
    </section>
  )
}

export default AnimatedText