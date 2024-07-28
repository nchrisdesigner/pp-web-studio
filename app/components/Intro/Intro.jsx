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
        <h3 className={`${anton.className} ${styles.title}`}><span style={{position: 'relative'}}>
          <SmudgeOne />
          <SmudgeTwo />
          CLIENT</span>-INSPIRED</h3>
        <SecondaryTitle>WE PREFER</SecondaryTitle>
      </div>

      <h3 className={`${anton.className} ${styles.title}`}>PARTNER-IN-CREATION</h3>
      <h3 className={`${anton.className} ${styles.title}`}>STORYTELLERS</h3>

    </section>
  )
}

export default Intro

const SmudgeOne = () => {
  return (
    <svg className={styles.smudgeOne} width="206" height="104" viewBox="0 0 206 104" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.0293 10.97C67.1527 47.7891 129.692 75.269 195.029 93.97" stroke="#5D5AD6" strokeWidth="20" strokeLinecap="round" />
    </svg>
  )
}
const SmudgeTwo = () => {
  return (
    <svg className={styles.smudgeTwo} width="289" height="96" viewBox="0 0 289 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.1992 85.97C19.7147 84.3299 29.2014 80.4448 38.4395 77.5735C74.0656 66.5006 109.947 56.5673 146.016 47.5861C181.628 38.7187 217.61 31.5196 252.989 21.4498C262.034 18.8751 270.426 16.4717 278.207 10.97" stroke="#5D5AD6" strokeWidth="20" strokeLinecap="round" />
    </svg>

  )
}