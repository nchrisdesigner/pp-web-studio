import styles from './mvp.module.css'
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const TheRealMVP = () => {
  return (
    <section className={`${styles.container}`}>
      <div className='container'>
        <div className={styles.titleContainer}>
          <h3>YOU ARE THE REAL <span className='yellow'>MVP</span></h3>
          <h2 className={anton.className}>YOUR DREAMS MATTER</h2>
          <h4>We hear what our people say</h4>
        </div>
      </div>
    </section>
  )
}

export default TheRealMVP