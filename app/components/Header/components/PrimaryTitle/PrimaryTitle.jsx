import { Anton } from 'next/font/google'
import { Poppins } from 'next/font/google'
import styles from './primarytitle.module.css'

const poppins = Poppins({ 
  weight: ['300','400','500','600','700'],
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
        <span className='block-element'>WE SOLVE <span className='outline-text'>PROBLEMS </span></span>
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