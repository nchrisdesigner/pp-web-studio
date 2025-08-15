import Card from '../Service/Service'
import styles from './servicelist.module.css'
import { services } from '@/app/data/data'

const ServiceList = () => {
  return (
    <div className={styles.servicesContainer}>
      {services.map((service) => {
        return (
          <Card key={service.id} {...service} />
        )
      })}
    </div>
  )
}

export default ServiceList