import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './infosection.module.css'
import { FaCheck } from "react-icons/fa";

const features = [
  {
    id:1,
    title:'Visual Demonstration',
    desc:'Videos allow you to demonstrate your products or services in action, showcasing their features and benefits more effectively than text descriptions. This can help potential customers understand and appreciate your offerings, leading to higher purchase rates.'
  },
  {
    id:2,
    title:'Emotional Connection',
    desc:'Videos can evoke emotions through storytelling, music, and visuals, creating a deeper emotional connection with your audience. This connection can lead to increased loyalty and a stronger brand affinity.'
  },
  {
    id:3,
    title:'Showcases Professionalism',
    desc:'Brands that invest in high-quality video production demonstrate a commitment to professionalism and excellence. This attention to detail reflects a strong brand identity and reassures customers of the brand\'s reliability and dedication to delivering superior products or services.'
  },
]

const InfoSection = () => {
  return (
    <section className={`container ${styles.sectionContainer}`}>
      <TitleContainer align='center' miniTitle='VIDEOS EVOKE EMOTIONS'  title='
STUNNING ANIMATING VIDEOS'>
      By investing in video motion, animation, and videography, you create dynamic and memorable content <span className="bold-text"> that can significantly boost profitability,</span> drive traffic, and foster stronger connections with your audience.
      </TitleContainer>

      <div className={styles.featuresContainer}>
          <div className={styles.videoContainer}>
            Video Container
          </div>
          <div className={styles.features}>
            {features.map(({id, title, desc}, index) => {
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