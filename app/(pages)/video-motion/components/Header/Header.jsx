import Paragraph from '@/app/ui/Paragraph/Paragraph'
import styles from './header.module.css'
import { Anton } from 'next/font/google'
import { Poppins } from "next/font/google"
import SecondaryTitle from '@/app/ui/SecondaryTitle/SecondaryTitle'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})

const Header = () => {
  return (
    <header className={`container ${styles.headerContainer}`}>
      <div className={styles.titleContainer}>
        <SecondaryTitle align='left'>STUNNING ANIMATION VIDEOS</SecondaryTitle>
        <h2 className={`${anton.className} ${styles.title}`}>
          WE MOVE BRANDS
        </h2>
        <Paragraph color='black'><span className="bold-text">Videos can evoke emotions </span>through storytelling, music, and visuals, creating a deeper emotional connection with your audience. This connection can lead to increased loyalty and a stronger brand affinity.</Paragraph>
      </div>

      <h3 className={`${poppins.className} ${styles.miniTitleOne}`}>BOOST YOUR BRAND AND YOUR CREDIBILITY</h3>
      <h3 className={`${poppins.className} ${styles.miniTitleTwo}`}>CAPTURE ATTENTION WITH STUNNING ANIMATION VIDEOS</h3>

      <div className={styles.shapeContainer}>
        <svg className={styles.shape} width="391" height="471" viewBox="0 0 391 471" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M387.245 238.988L7.45911 469.062C4.79334 470.677 1.38657 468.757 1.38657 465.641L1.38659 5.4932C1.38659 2.37642 4.79336 0.457106 7.45914 2.07203L387.244 232.146C389.814 233.703 389.814 237.431 387.245 238.988Z" fill="#2C2C99" />
        </svg>
      </div>

    </header>
  )
}

export default Header