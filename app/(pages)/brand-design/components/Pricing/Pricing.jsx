import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import styles from './pricing.module.css'
import PricingTitle from '@/app/ui/PricingTitle/PricingTitle'
import Paragraph from '@/app/ui/Paragraph/Paragraph'
import TertiaryTitle from '@/app/ui/TertiaryTitle/TertiaryTitle'
import PricingList from './components/PricingList/PricingList'

const Pricing = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className='container'>
        <div className={styles.titleContainer}>
          <MiniTitle align='center'>CHOOSE WHAT YOU NEED</MiniTitle>
          <PricingTitle color='white'>Brand Identity Plans</PricingTitle>
          <Paragraph color='white' align='center'>
            Tell your story through thoughtful and purposeful design  where every element speaks to who you are and what you stand for.
          </Paragraph>
        </div>

        <PricingList />

        <TertiaryTitle align='center'>
          You’ve got something worth showing off. <strong className="purple">Let’s give people a reason to choose you.</strong>
        </TertiaryTitle>

      </div>
    </section>
  )
}

export default Pricing