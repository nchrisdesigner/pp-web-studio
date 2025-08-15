import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import styles from './pricing.module.css'
import PricingTitle from '@/app/ui/PricingTitle/PricingTitle'
import PricingList from './components/PricingList/PricingList'

const Pricing = () => {
  return (
    <section id="video-pricing" className={styles.sectionContainer}>

      <div className='container'>

        <div className={styles.titleContainer}>
          <MiniTitle align='center'>CHOOSE WHAT YOU NEED</MiniTitle>
          <PricingTitle color='black'>Video Motion Plans</PricingTitle>
        </div>

        <PricingList />

      </div>
      
    </section>
  )
}

export default Pricing