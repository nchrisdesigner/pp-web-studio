import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './infosection.module.css'
import { FaCheck } from "react-icons/fa";
import { videoMotionFeatures } from '@/app/data/data';

const InfoSection = () => {
  return (
    <section className={`container ${styles.sectionContainer}`}>
      <TitleContainer align='center' miniTitle='VIDEOS EVOKE EMOTIONS' title='STUNNING ANIMATING VIDEOS'>
        By investing in video motion, animation, and videography, you create dynamic and memorable content <span className="bold-text"> that can significantly boost profitability,</span> drive traffic, and foster stronger connections with your audience.
      </TitleContainer>

      <div className={styles.featuresContainer}>
        <div className={styles.videoContainer}>
          Video Container
        </div>
        <div className={styles.features}>
          {videoMotionFeatures.map(({ id, title, desc }, index) => {
            return (
              <div className={styles.feature} key={id}>
                <h3><FaCheck className={styles.icon} /> {title}</h3>
                <p>{desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default InfoSection