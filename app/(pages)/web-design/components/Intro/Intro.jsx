import styles from './intro.module.css'
import SecondaryTitle from '@/app/ui/SecondaryTitle/SecondaryTitle'
import DescrambledText from './components/DescrambledText/DescrambledText'

import TextPath from './components/TextPath/TextPath'
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const Intro = () => {

  return (
    <section className={`${styles.sectionContainer}`}>
      {/* <TextPath /> */}
      <div className="container">
        <div className={styles.gridContainer}>
          <div>
            <SecondaryTitle align='center'>NO WEBSITE, NO VISIBILITY</SecondaryTitle>
            <DescrambledText />
            <h3 className={`${styles.mainTitle} ${anton.className}`}>IS YOUR BUSINESS?</h3>
          </div>
          <p className={styles.text}>
            <span className="bold-text">If your business isn’t online, you’re missing out.</span> A website means your doors are always open, <span className='purple-highlight semibold-text'>ready to answer questions, </span> <span className='purple-highlight-2 semibold-text'>showcase your services,</span> and <span className='purple-highlight-3 semibold-text'>solve your customers’ problems</span> at the click of a button. A well-designed website is your most powerful tool, building trust, providing vital information, and connecting with potential clients before you even speak a word. </p>
        </div>
        <div className={styles.animatedTitle}>
          <h3 className={styles.secondaryTitle}>Every moment offline is a missed opportunity. <span className="bold-text purple">Let’s change that.</span></h3>
        </div>
      </div>

    </section>
  )
}

export default Intro