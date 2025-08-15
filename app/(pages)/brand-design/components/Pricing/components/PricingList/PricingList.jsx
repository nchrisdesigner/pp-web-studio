import PricingItem from '../PricingItem/PricingItem'
import styles from './pricinglist.module.css'

import { brandIdentityPricing } from '@/app/data/data'

const PricingList = () => {
  return (
    <div className={styles.pricingContainer}>
      {brandIdentityPricing.map((item) => {
        return (
          <PricingItem key={item.id} {...item} />
        )
      })}
    </div>
  )
}

export default PricingList