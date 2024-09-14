import styles from './footer.module.css'
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.titleContainer}>
          <h4>ONE PIXEL AT A TIME</h4>
        </div>

        <div className={styles.textContainer}>
          <p>
            Every pixel we place is a step towards <span className="bold-text"> your success</span>. Let's create a masterpiece together.
          </p>
        </div>

        {/* <div className={styles.emailContainer}>
          <div >
            <p className={styles.query}>Project Queries</p>
            <p className={styles.email}>hey@pixelperfekt.gr</p>
          </div>
          <div>
            <p className={styles.query}>Partnership and Collaborations</p>
            <p className={styles.email}>business@pixelperfekt.gr</p>
          </div>
        </div> */}

        <div className={styles.footerLogoContainer}>
          <h2 className={`${anton.className} ${styles.footerLogo}`}>PixelPerfekt</h2>
          <p>We solve problems through remarkable design</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer