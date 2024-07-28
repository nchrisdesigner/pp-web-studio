import { Anton } from 'next/font/google'
import { Poppins } from 'next/font/google'
import styles from './primarytitle.module.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})
const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const PrimaryTitle = () => {
  return (
    <div>
      <h1 className={` ${styles.primaryTitle} ${anton.className} `}>
        <span className='block-element'>WE SOLVE <span className='outline-text'>
          <Smudge />
          PROBLEMS </span></span>
        <span className='block-element'>THROUGH REMARKABLE </span>
        <div className={styles.flexContainer}>
          <span className='block-element'>DESIGN</span>
          <p className={`${styles.text} ${poppins.className}`}>
            We’re a creative web design studio based in Greece, crafting beautiful and distinctive work for brands that <span className='bold-text'>dare to stand out.</span>
          </p>
        </div>
      </h1>
    </div>
  )
}

export default PrimaryTitle


const Smudge = () => {
  return (
    <svg className={styles.smudge} width="406" height="36" viewBox="0 0 406 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.70966 27.2071C120.597 8.91137 233.052 5.17311 345.624 12.2245C361.316 13.2074 377.207 14.8046 392.971 13.9068C394.84 13.8004 395.541 13.3257 396.717 11.893" stroke="#5E5AD6" strokeWidth="17" strokeLinecap="round" />
    </svg>
  )
}