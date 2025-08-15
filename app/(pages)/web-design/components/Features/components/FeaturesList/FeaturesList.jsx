import Feature from '../Feature/Feature'
import styles from './featureslist.module.css'
import { webDesignFeatures } from '@/app/data/data'

const FeaturesList = () => {
  return (
    <div className={styles.featuresContainer}>
          {webDesignFeatures.map((feature) => {
            return (
              <Feature key={feature.id} {...feature} />
            )
          })}
        </div>
  )
}

export default FeaturesList