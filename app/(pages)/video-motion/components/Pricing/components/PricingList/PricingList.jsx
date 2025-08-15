import PricingItem from '../PricingItem/PricingItem'
import styles from './pricinglist.module.css'

import { videoMotionPricing } from '@/app/data/data'

const PricingList = () => {
  return (
    <div className={styles.pricingContainer}>
      {videoMotionPricing.map((item) => {
        return (
          <PricingItem key={item.id} {...item} />
        )
      })}
    </div>
  )
}

export default PricingList