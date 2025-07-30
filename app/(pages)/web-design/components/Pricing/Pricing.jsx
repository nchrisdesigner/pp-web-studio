import styles from './pricing.module.css'
import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import { ImCheckmark2 } from "react-icons/im"
import PricingTitle from '@/app/ui/PricingTitle/PricingTitle'
import { webDesignPricing } from '@/app/data/data'
import ContactButton from '@/app/ui/Buttons/ContactButton/ContactButton'
import Paragraph from '@/app/ui/Paragraph/Paragraph'
import Letter from '@/app/ui/Letter/Letter'


const Pricing = () => {
  return (
    <section id="pricing-web" className={`${styles.pricingSection}`}>
      <div className="container">

        <div className={styles.titleContainer}>
          <MiniTitle>CHOOSE WHAT YOU NEED</MiniTitle>
          <PricingTitle color='white'>Web Design Plans</PricingTitle>
          <Paragraph color='white' align='center'>Let’s <Letter textSize='title'>K</Letter> reate a bold website that does the talking for you and makes it easy for people to say, <em> ‘yep, that’s who I need.’</em></Paragraph>
        </div>

        <div className={styles.pricingsContainer}>
          {webDesignPricing.map(({ id, title, secondTitle, icon, desc, miniText, price, features, idealFor }) => {
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


                {/* {
                  idealFor &&
                  <div className={styles.idealForContainer}>
                    <p className={styles.idealFor}>{idealFor}</p>
                  </div>
                } */}
              </div>
            )
          })}
        </div>
        {/* <HoverButton /> */}
        <ContactButton />

        {/* <PurpleButton>Copy Email</PurpleButton> */}

      </div>
    </section>
  )
}

export default Pricing