import styles from './pricing.module.css'
import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import { ImCheckmark2 } from "react-icons/im"
import PricingTitle from '@/app/ui/PricingTitle/PricingTitle'
import { webDesignPricing } from '@/app/data/data'



const Pricing = () => {
  return (
    <section className={`container ${styles.pricingSection}`}>
      <div className={styles.titleContainer}>
        <MiniTitle>CHOOSE WHAT YOU NEED</MiniTitle>
        <PricingTitle color='black'>Web Design Plans</PricingTitle>
      </div>

      <div className={styles.pricingsContainer}>
        {webDesignPricing.map(({ id, title, secondTitle, icon, desc, miniText, price, features }) => {
          return (
            <div key={id} className={styles.pricing}>
              <h3>{secondTitle}</h3>
              <div className={styles.pricingContainer}>
                <div className={styles.icon}>{icon}</div>
                <h2>{title}</h2>
                <div className={styles.descriptionContainer}>
                  <p className={styles.description}>{desc}</p>
                  <p className={styles.miniText}>{miniText}</p>
                </div>
                <div className={styles.priceContainer}>
                  <div style={{ fontWeight: '700', fontSize: '1.8rem' }}>{price}</div>
                  <div style={{ fontWeight: '300', fontSize: '1.2rem' }}>Taxes Inc.</div>
                </div>

                <div>
                  <p style={{ fontWeight: '700', fontSize: '1.6rem', borderBottom: '1px solid var(--purple)', paddingBottom: '1rem' }}>What includes</p>
                  <div className={styles.featureContainer}>
                    {features.map((feature, index) => {
                      return (
                        <p key={index} className={styles.feature}><ImCheckmark2 style={{ color: 'var(--purple)', fontSize: '2rem' }} /> {feature}</p>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Pricing