import styles from './pricinglist.module.css'
import { webDesignPricing } from '@/app/data/data'
import PricingItem from '../PricingItem/PricingItem'

const PricingList = () => {
  return (
    <div className={styles.pricingsContainer}>
      {webDesignPricing.map((item) => {
        return (
          <PricingItem key={item.id} {...item} />
        )
      })}
    </div>
  )
}

export default PricingList