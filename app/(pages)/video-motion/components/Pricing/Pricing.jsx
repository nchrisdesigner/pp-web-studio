import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import styles from './pricing.module.css'
import PricingTitle from '@/app/ui/PricingTitle/PricingTitle'
import { FaCheck } from "react-icons/fa"
import { videoMotionPricing } from '@/app/data/data'

const Pricing = () => {
  return (
    <section id="video-pricing" className={styles.sectionContainer}>
      <div className='container'>
        <div className={styles.titleContainer}>
          <MiniTitle align='center'>CHOOSE WHAT YOU NEED</MiniTitle>
          <PricingTitle color='black'>Video Motion Plans</PricingTitle>
        </div>
        <div className={styles.pricingContainer}>
          {videoMotionPricing.map(({id, title, desc, price, icon, features}) => {
            return (
              <div key={id} className={styles.pricing}>
                <div className={styles.textContainer}>
                  <div className={styles.pricingTitle}>
                    <span>{icon}</span>
                    <h3>{title}</h3>
                  </div>
                  <p className={styles.desc}>{desc}</p>
                  {/* <h4 className={styles.price}>{price}</h4> */}
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