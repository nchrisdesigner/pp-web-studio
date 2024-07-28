import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import styles from './pricing.module.css'
import { SiJordan } from "react-icons/si"
import { MdOutlineBrandingWatermark } from "react-icons/md"
import { BiImage } from "react-icons/bi"
import { ImCheckmark2 } from "react-icons/im"
import { FaCheck } from "react-icons/fa";
import PricingTitle from '@/app/ui/PricingTitle/PricingTitle'

const pricing = [
  {
    id: 1,
    title: 'LOGO DESIGN',
    icon: <SiJordan />,
    desc: 'Creation of a Visual Identity.',
    price: '500€+',
    features: [
      "3 initial logo concepts",
      "1 round of revisions",
      "High Resolution Files(JPEG,PNG,PDF)",
    ]
  },
  {
    id: 2,
    title: 'GRAPHICS DESIGN',
    icon: <BiImage />,
    desc: 'Visual assets aligned with brand aesthetics.',
    price: '800€+',
    features: [
      "10 Custom graphics and images",
      "1 round of revisions",
      "High Resolution Files(JPEG,PNG,PDF)",
    ]
  },
  {
    id: 3,
    title: 'BRAND DESIGN',
    icon: <MdOutlineBrandingWatermark />,
    desc: 'Comprehensive brand identity design.',
    price: '1500€+',
    features: [
      "Logo Design",
      "10 Custom graphics and images",
      "Business card",
      "Social media branding kit (x6 IG Post)",
      "2 rounds of revisions",
      "High Resolution Files(JPEG,PNG,PDF)",
    ]
  },
]

const Pricing = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className='container'>
        <div className={styles.titleContainer}>
          <MiniTitle align='center'>CHOOSE WHAT YOU NEED</MiniTitle>
          <PricingTitle color='white'>Brand Identity Plans</PricingTitle>
        </div>

        <div className={styles.pricingContainer}>
            {pricing.map(({id, title, icon, desc, price, features}) => {
              return (
                <div key={id} className={styles.pricing}>
                  <div className={styles.absoluteElement}>
                    {icon}
                  </div>
                  <div className={styles.pricingTitleContainer}>
                    <h3 className={styles.pricingTitle}>
                      <span className={styles.pricingTitleIcon}>{icon}</span>
                      <span className={styles.pricingTitleText}>{title}</span>
                    </h3>
                  </div>
                  <p className={styles.desc}>{desc}</p>
                  <p className={styles.price}>{price}</p>
                  <p style={{ fontWeight: '700', color: 'var(--white)', fontSize: '1.6rem', borderBottom: '1px solid #ffffff5d', paddingBottom: '1rem' }}>What includes</p>
                  <div className={styles.featuresContainer}>
                    {features.map((feature, index) => {
                      return (
                        <p key={index} className={styles.feature}><FaCheck style={{ color: 'var(--green)', fontSize: '2rem' }} /> {feature}</p>
                      )
                    })}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default Pricing