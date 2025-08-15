import styles from './pricingitem.module.css'
import { ImCheckmark2 } from "react-icons/im"

const PricingItem = ({ id, title, secondTitle, icon, desc, miniText, price, features, idealFor }) => {
  return (
    <div key={id} className={styles.pricing}>
      <div className={styles.pricingContainer}>
        <span className={styles.pricingTag}>{secondTitle}</span>
        <h2 className={styles.titleAbsolute}>
          <span className={styles.icon}>{icon}</span> {title}
        </h2>
        <div className={styles.miniTitleContainer}>
          <h3 className={styles.miniTitle}>{desc}</h3>
          <p className={styles.description}>{miniText}</p>
        </div>
        {/* <div className={styles.priceContainer}>
          <div style={{ fontWeight: '700', fontSize: '1.8rem' }}>{price}</div>
          <div style={{ fontWeight: '300', fontSize: '1.2rem' }}>Taxes Inc.</div>
        </div> */}
        <div>
          <p className={styles.whatIncludes}>What includes</p>
          <div className={styles.featureContainer}>
            {features.map((feature, index) => {
              return (
                <p key={index} className={styles.feature}><ImCheckmark2 className={styles.checkIcon} /> {feature}</p>
              )
            })}
          </div>
        </div>

      </div>

      <div className={styles.idealForContainer}>
        <h4>Ideal For</h4>
        <p>{idealFor}</p>
      </div>

    </div>
  )
}

export default PricingItem