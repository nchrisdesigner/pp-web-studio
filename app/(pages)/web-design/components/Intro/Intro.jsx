import PromiseTitle from '@/app/ui/PromiseTitle/PromiseTitle'
import styles from './intro.module.css'

import { Anton } from 'next/font/google'
import SecondaryTitle from '@/app/ui/SecondaryTitle/SecondaryTitle'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const Intro = () => {
  return (
    <section className={`${styles.sectionContainer}`}>
      <div className="container">


        <div className={styles.gridContainer}>
          <div>
            <SecondaryTitle align='center'>NO WEBSITE, NO VISIBILITY</SecondaryTitle>
            {/* <Title>
          YOUR CUSTOMERS ARE ONLINE.
          </Title> */}
            <h2 className={`${styles.mainTitle} ${anton.className}`}>YOUR CUSTOMERS <br /> ARE ONLINE.</h2>
            <h2 style={{ color: 'var(--purple' }} className={`${styles.mainTitle} ${anton.className}`}>IS YOUR BUSINESS?</h2>
          </div>

          <div>
            <p className={styles.text}>If your business isn’t online, you’re missing out. A website means your doors are always open, <span className='purple-highlight bold-text'>ready to answer questions,</span> <span className="green-highlight bold-text">showcase your services,</span> and <span className="yellow-highlight bold-text">solve your customers’ problems</span>  at the click of a button. </p>
            <p className={styles.text}>A well-designed website is your most powerful tool, building trust, providing vital information, and connecting with potential clients before you even speak a word.</p>
          </div>

        </div>

        <div className={styles.animatedTitle}>
          <PromiseTitle color='black'>
            Every moment offline is a missed opportunity. <span className="bold-text purple">Let’s change that.</span>
          </PromiseTitle>
        </div>
      </div>

    </section>
  )
}

export default Intro