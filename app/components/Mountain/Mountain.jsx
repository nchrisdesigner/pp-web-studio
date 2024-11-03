import styles from './mountain.module.css'
import traces from '@/app/assets/mountain/traces.svg'
import Image from 'next/image'
import { ImCheckmark2 } from 'react-icons/im'

import { Anton } from 'next/font/google'
import PromiseTitle from '@/app/ui/PromiseTitle/PromiseTitle'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})


const Mountain = () => {
  return (
    <section className={styles.sectionContainer}>

      <div className={styles.mountainSection}>
        <div className={styles.container}>

          <div className={styles.textContainer}>
            <figure className={styles.tracesContainer}>
              <Image src={traces} className={styles.traces} alt="traces" />
            </figure>

            <div className={styles.titleContainer}>
              <div className={styles.miniTitleContainer}>
                <div className={styles.spanContainer}>
                  <span>You've</span>
                  <span>got the</span>
                </div>
                <h2 className={`${anton.className} ${styles.title}`}>IDEA</h2>
              </div>

              <div className={styles.miniTitleContainer}>
                <div className={styles.spanContainer}>
                  <span>We've</span>
                  <span>got the</span>
                </div>
                <h2 className={`${anton.className} ${styles.title}`}>PLAN</h2>
              </div>
            </div>
          </div>

          <div className={styles.descContainer}>
            <h3>Your Ideas Deserve to Be Seen — <span className='purple'>and Remembered</span></h3>
            <p>In today’s digital world, having a great idea is just the beginning. The real question is: <em><strong className='white'>Can your audience find you? </strong></em> &nbsp; And when they do, <em><strong className='white'> will they remember you?</strong></em> </p>
            <p>
            Without a strong digital presence, your brand risks fading into the background of where your audience lives, works, and plays. <em><strong className='underline-text white'>Think of the missed conversations, the lost connections, and the brand loyalty slipping away before it even has a chance to form.</strong></em> 
            </p>

            <p>Your digital presence isn’t just a website or a logo—it’s an open door to new opportunities, fresh audiences, and lasting connections.</p>
           
          </div>
        </div>
      </div>

    </section>
  )
}

export default Mountain