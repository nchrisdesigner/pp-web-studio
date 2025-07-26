import styles from './features.module.css'
import { webDesignFeatures } from '@/app/data/data'
import PromiseTitle from '@/app/ui/PromiseTitle/PromiseTitle'
import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import Paragraph from '@/app/ui/Paragraph/Paragraph'

import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

// INVESTING IN A WEBSITE IS NON-NEGOTIABLE

const Features = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={`container`}>

        <div className={styles.titleContainer}>
          <MiniTitle>YOUR 24/7 BUSINESS AMBASSADOR</MiniTitle>
          <h2 className={`${styles.title} ${anton.className}`}>LET YOUR WEBSITE <span className="purple"> DO THE TALKING</span></h2>
          <Paragraph align='center' color='white' >
            This will be the first impression created on potential customers as well as a very effective tool for converting new visitors into clients who become loyal through time - and you can’t fail.</Paragraph>
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

        <h3 className={styles.secondaryTitle}>Let your website tell your story <span className="bold-text purple">without saying a word.</span></h3>
      </div>


    </section>
  )
}

export default Features