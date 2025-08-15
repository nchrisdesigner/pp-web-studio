import styles from './pricing.module.css'
import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import PricingTitle from '@/app/ui/PricingTitle/PricingTitle'
import ContactButton from '@/app/ui/Buttons/ContactButton/ContactButton'
import Paragraph from '@/app/ui/Paragraph/Paragraph'
import Letter from '@/app/ui/Letter/Letter'
import PricingList from './components/PricingList/PricingList'


const Pricing = () => {
  return (
    <section id="pricing-web" className={`${styles.pricingSection}`}>
      <div className="container">

        <div className={styles.titleContainer}>
          <MiniTitle>CHOOSE WHAT YOU NEED</MiniTitle>
          <PricingTitle color='white'>Web Design Plans</PricingTitle>
          <Paragraph color='white' align='center'>Let’s <Letter textSize='title'>K</Letter> reate a bold website that does the talking for you and makes it easy for people to say, <em> ‘yep, that’s who I need.’</em></Paragraph>
        </div>

        <PricingList />

        <ContactButton />

      </div>
    </section>
  )
}

export default Pricing