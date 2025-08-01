import styles from './features.module.css'
import { webDesignFeatures } from '@/app/data/data'
import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import Paragraph from '@/app/ui/Paragraph/Paragraph'
import TertiaryTitle from '@/app/ui/TertiaryTitle/TertiaryTitle'

import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})


const Features = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={`container`}>

        <div className={styles.titleContainer}>
          <MiniTitle>YOUR 24/7 BUSINESS AMBASSADOR</MiniTitle>
          <h2 className={`${styles.title} ${anton.className}`}>LET YOUR WEBSITE <span className="purple"> DO THE TALKING</span></h2>
          <Paragraph align='center' color='white' >
           <strong>Your site is your first impression, and it matters.</strong>  It should show who you are, why you matter, and why they should trust you effortlessly. Get it right, and they’ll stick around, reach out, and keep c oming back.</Paragraph>
        </div>

        <div className={styles.features}>
          <div className={styles.featuresContainer}>
            {webDesignFeatures.map(({ id, title, desc }) => {
              return (
                <div key={id} className={styles.feature}>
                  <span>{id}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              )
            })}
          </div>
        </div>

=
        <TertiaryTitle align='center'>Let your website tell your story <span className="bold-text purple">without saying a word.</span></TertiaryTitle>
      </div>


    </section>
  )
}

export default Features