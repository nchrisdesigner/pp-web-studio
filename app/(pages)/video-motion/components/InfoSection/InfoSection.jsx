import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './infosection.module.css'
import { FaCheck } from "react-icons/fa"
import { videoMotionFeatures } from '@/app/data/data'
import Cube from '@/app/ui/Cube/Cube'

const InfoSection = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className='container'>

        <TitleContainer align='center' color='white' miniTitle='VIDEOS EVOKE EMOTIONS' title='STUNNING ANIMATING VIDEOS'>
          By investing in video motion, animation, and videography, you create dynamic and memorable content <span className="bold-text"> that can significantly boost profitability,</span> drive traffic, and foster stronger connections with your audience.
        </TitleContainer>

        <div className={styles.featuresContainer}>
          <div className={styles.videoContainer}>
            <Cube />
          </div>
          <div className={styles.features}>
            {videoMotionFeatures.map(({ id, title, desc }) => {
              return (
                <div className={styles.feature} key={id}>
                  <h3><FaCheck className={styles.icon} /> {title}</h3>
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