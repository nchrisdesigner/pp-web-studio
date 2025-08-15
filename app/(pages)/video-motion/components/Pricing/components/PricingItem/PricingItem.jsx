import styles from './pricingitem.module.css'
import { ImCheckmark2 } from 'react-icons/im'

const PricingItem = ({ id, title, desc, miniTitle, price, icon, features }) => {
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
}

export default PricingItem