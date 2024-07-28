import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import styles from './pricing.module.css'
import PricingTitle from '@/app/ui/PricingTitle/PricingTitle'
import { BsCameraVideo } from "react-icons/bs"
import { PiDroneFill } from "react-icons/pi"
import { MdOutlineAnimation } from "react-icons/md"
import { FaCheck } from "react-icons/fa"

const plans = [
  {
    id: 1,
    title: 'ANIMATED PROMO VIDEO',
    desc: 'Dynamic promotional video with logo, illustrations and text animations.',
    price: '400€+',
    icon: <MdOutlineAnimation/>,
    features: [
      'Animation video to attract audience’s attention',
      'Increase brand awareness and customer engagement',
      'Suitable for online marketing campaigns',
      'Up to 30 seconds',
    ]
  },
  {
    id: 2,
    title: 'PRESENTATIONAL VIDEO',
    desc: 'Detailed explainer video to present your brand, your services and your products in a professional way.',
    price: '600€+',
    icon: <BsCameraVideo/>,
    features: [
      'Ideal for showcasing facilities, products or services',
      'Boost credibility and trust',
      'Professional cameras, lighting and script',
      'Up to 60-90 seconds',
    ]
  },
  {
    id: 3,
    title: 'DRONE VIDEO',
    desc: 'Video production including aerial footage with drone cameras.',
    price: '800€+',
    icon: <PiDroneFill/>,
    features: [
      'Stunning visuals and unique perspectives',
      'Highlight expansive landscapes, facilities or events',
      'Cinematic viewing experience',
      'Up to 45 seconds',
    ]
  },
]

const Pricing = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className='container'>
        <div className={styles.titleContainer}>
          <MiniTitle align='center'>CHOOSE WHAT YOU NEED</MiniTitle>
          <PricingTitle color='black'>Video Motion Plans</PricingTitle>
        </div>
        <div className={styles.pricingContainer}>
          {plans.map(({id, title, desc, price, icon, features}) => {
            return (
              <div key={id} className={styles.pricing}>
                <div className={styles.textContainer}>
                  <div className={styles.pricingTitle}>
                    <span>{icon}</span>
                    <h3>{title}</h3>
                  </div>
                  <p className={styles.desc}>{desc}</p>
                  <h4 className={styles.price}>{price}</h4>
                </div>
                <div className={styles.features}>
                  <h4 className={styles.whatIncludes}>What includes</h4>
                  {features.map((feature, index) => {
                    return (
                      <p key={index} className={styles.feature}><FaCheck className={styles.icon} /> {feature}</p>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Pricing