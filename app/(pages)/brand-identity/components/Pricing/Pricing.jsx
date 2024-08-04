import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import styles from './pricing.module.css'
import { FaCheck } from "react-icons/fa";
import PricingTitle from '@/app/ui/PricingTitle/PricingTitle'
import { brandIdentityPricing } from '@/app/data/data'

const Pricing = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className='container'>
        <div className={styles.titleContainer}>
          <MiniTitle align='center'>CHOOSE WHAT YOU NEED</MiniTitle>
          <PricingTitle color='white'>Brand Identity Plans</PricingTitle>
        </div>

        <div className={styles.pricingContainer}>
            {brandIdentityPricing.map(({id, title, icon, desc, price, features}) => {
              return (
                <div key={id} className={styles.pricing}>
                  <div className={styles.absoluteElement}>
                    {icon}
                  </div>
                  <div className={styles.pricingTitleContainer}>
                    <h3 className={styles.pricingTitle}>
                      <span className={styles.pricingTitleIcon}>{icon}</span>
                      <span className={styles.pricingTitleText}>{title}</span>
                    </h3>
                  </div>
                  <p className={styles.desc}>{desc}</p>
                  <p className={styles.price}>{price}</p>
                  <p style={{ fontWeight: '700', color: 'var(--white)', fontSize: '1.6rem', borderBottom: '1px solid #ffffff5d', paddingBottom: '1rem' }}>What includes</p>
                  <div className={styles.featuresContainer}>
                    {features.map((feature, index) => {
                      return (
                        <p key={index} className={styles.feature}><FaCheck style={{ color: 'var(--green)', fontSize: '2rem' }} /> {feature}</p>
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