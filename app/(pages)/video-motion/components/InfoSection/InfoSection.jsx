import styles from './infosection.module.css'
import { videoMotionFeatures } from '@/app/data/data'
import Cube from '@/app/ui/Cube/Cube'
import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import Paragraph from '@/app/ui/Paragraph/Paragraph'
import TertiaryTitle from '@/app/ui/TertiaryTitle/TertiaryTitle'

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
          <MiniTitle align='center'>ANIMATIONS MADE TO GRAB ATTENTION</MiniTitle>
          <h2 className={`${anton.className} ${styles.title}`}>VIDEOS THAT MAKE YOU STOP AND WATCH</h2>
          <Paragraph align='center' color='white' >

            <strong>Put some motion behind your message.</strong>  Video, animation, and storytelling bring your brand to life in a way people connect with and remember. It gets more eyes, more clikks, and builds trust that lasts.
            
            </Paragraph>
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
                  <span>{id}</span>
                </div>
              )
            })}
          </div>
        </div>

        <TertiaryTitle align='center'>Your project deserves more than design. <strong className="purple"> it’s a story that needs to be seen and remembered.</strong></TertiaryTitle>

      </div>
    </section>
  )
}

export default InfoSection