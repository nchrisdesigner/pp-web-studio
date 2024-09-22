import Paragraph from '@/app/ui/Paragraph/Paragraph'
import styles from './header.module.css'
import { Anton } from 'next/font/google'
import { MdOutlineZoomInMap } from "react-icons/md"

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const Header = () => {
  return (
    <header className={`${styles.headerContainer}`}>
      <div className={`container ${styles.sectionContainer}`}>
        <div className={styles.textContainer}>
          <h2 className={styles.miniTitle}>CAPTURE ATTENTION INSTANTLY WITH STUNNING VIDEOS</h2>
          <h1 className={`${anton.className} ${styles.title}`}>
            <span className={`${anton.className} ${styles.absoluteTitleOne}`}>WE MOVE BRANDS</span>
            <span className={`${anton.className} ${styles.absoluteTitleTwo}`}>WE MOVE BRANDS</span>
            WE MOVE BRANDS</h1>
          <Paragraph color='white'>
            In a fast-paced world, <strong className='green'>videos capture attention instantly</strong> and  communicate complex ideas quickly, engaging viewers far more effectively than text. Videos can evoke emotions through storytelling, music, and visuals, creating a deeper emotional connection with your audience and  making your message memorable, cutting through the noise and connecting with your audience right away.
          </Paragraph>
          <div className={styles.shapeContainer}>
            <svg className={styles.shape} width="391" height="471" viewBox="0 0 391 471" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M387.245 238.988L7.45911 469.062C4.79334 470.677 1.38657 468.757 1.38657 465.641L1.38659 5.4932C1.38659 2.37642 4.79336 0.457106 7.45914 2.07203L387.244 232.146C389.814 233.703 389.814 237.431 387.245 238.988Z" fill="#2C2C99" />
            </svg>
          </div>

          <a href="#video-pricing" className={styles.btn}>
            Zoom Into Plans<MdOutlineZoomInMap className={styles.icon} />
          </a>

        </div>
      </div>
    </header>
  )
}

export default Header