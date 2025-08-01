import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import styles from './pricing.module.css'
import PricingTitle from '@/app/ui/PricingTitle/PricingTitle'
import { ImCheckmark2 } from 'react-icons/im'
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
          {videoMotionPricing.map(({ id, title, desc, miniTitle, price, icon, features }) => {
            return (
              <div key={id} className={styles.pricing}>
                <div className={styles.textContainer}>
                  <div className={styles.pricingTitle}>
                    <span>{icon}</span>
                    <h3>{title}</h3>
                  </div>
                  <div className={styles.pricingDesc}>
                    <h4>{miniTitle}</h4>
                    <p className={styles.desc}>{desc}</p>
                    {/* <h4 className={styles.price}>{price}</h4> */}
                  </div>
                </div>
                <div className={styles.features}>
                  <h4 className={styles.whatYouGet}>What You Get</h4>
                  {features.map((feature, index) => {
                    return (
                      <p key={index} className={styles.feature}><ImCheckmark2 className={styles.icon} /> {feature}</p>
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