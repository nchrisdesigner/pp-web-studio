import styles from './pricingitem.module.css'
import { FaCheck } from "react-icons/fa"

const PricingItem = ({ id, title, icon, desc, price, features }) => {
  return (
    <div key={id} className={styles.pricing}>
      <div className={styles.pricingTitleContainer}>
        <h3 className={styles.pricingTitle}>
          <span className={styles.pricingTitleIcon}>{icon}</span>
          <span className={styles.pricingTitleText}>{title}</span>
        </h3>
      </div>
      <p className={styles.desc}>{desc}</p>
      {/* <p className={styles.price}>{price}</p> */}
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
}

export default PricingItem