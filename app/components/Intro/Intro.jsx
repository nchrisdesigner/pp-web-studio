import { Anton } from 'next/font/google'
import { Poppins } from 'next/font/google'
import styles from './intro.module.css'
import SecondaryTitle from '@/app/ui/SecondaryTitle/SecondaryTitle'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})
const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const Intro = () => {
  return (
    <section className={`${styles.container} container`}>
      <SecondaryTitle>CLIENT IS A BAD, BAD WORD</SecondaryTitle>

      <div className={styles.miniContainer}>
        <h3 className={`${anton.className} ${styles.title}`}>CLIENT-INSPIRED</h3>
        <SecondaryTitle>WE PREFER</SecondaryTitle>
      </div>

      <h3 className={`${anton.className} ${styles.title}`}>PARTNER-IN-CREATION</h3>
      <h3 className={`${anton.className} ${styles.title}`}>STORYTELLERS</h3>

    </section>
  )
}

export default Intro