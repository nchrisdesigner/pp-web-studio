import styles from './infosection.module.css'
import { videoMotionFeatures } from '@/app/data/data'
import Cube from '@/app/ui/Cube/Cube'
import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import Paragraph from '@/app/ui/Paragraph/Paragraph'

import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const InfoSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className='container'>
        <div className={`${styles.titleContainer}`}>
          <MiniTitle align='center'>VIDEOS EVOKE EMOTIONS</MiniTitle>
          <h2 className={`${anton.className} ${styles.title}`}>STUNNING ANIMATING VIDEOS</h2>
          <Paragraph align='center' color='white' >
            By investing in video motion, animation, and videography, you create dynamic and memorable content <span className="bold-text"> that can significantly boost profitability,</span> drive traffic, and foster stronger connections with your audience.</Paragraph>
        </div>

        <div className={styles.featuresContainer}>
          <div className={styles.videoContainer}>
            <Cube />
          </div>
          <div className={styles.features}>
            {videoMotionFeatures.map(({ id, title, desc }) => {
              return (
                <div className={styles.feature} key={id}>
                  <h3>
                    {title}
                  </h3>
                  <p>{desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        <p
          className={styles.promiseTitle}>Your project deserves more than design — <span className="green bold-text">it’s a story waiting to be told.</span></p>
      </div>
    </section>
  )
}

export default InfoSection