import styles from './pricing.module.css'
import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import { HiOutlineBolt } from "react-icons/hi2"
import { MdOutlineRocketLaunch } from "react-icons/md"
import { BiShoppingBag } from "react-icons/bi"
import { ImCheckmark2 } from "react-icons/im"

// <HiOutlineBolt /> <MdOutlineRocketLaunch /> <BiShoppingBag /> <ImCheckmark2 />

const pricing = [
  {
    id: 1,
    title: 'ADVANCED',
    secondTitle: 'MOST STATE-OF-THE-ART',
    icon: <HiOutlineBolt />,
    desc: 'Best for Large Business',
    miniText: "(Take your online presence to the next level)",
    price: '3600€+',
    features: [
      "Next.js + Framer Motion",
      "Photoshop, Illustrator, Midjourney",
      "Custom animations and interactive elements",
      "High Speed Performance",
      "Best SEO Optimization",
      "Fully Customized"
    ]
  },
  {
    id: 2,
    title: 'BASIC',
    secondTitle: 'MOST POPULAR',
    icon: <MdOutlineRocketLaunch />,
    desc: 'Best for Small Business',
    miniText: "(Upgrade your online presence)",
    price: '1800€+',
    features: [
      "Wordpress",
      "Photoshop, Illustrator, Midjourney",
      "Basic Animations",
      "High Speed Performance and SEO",
    ]
  },
  {
    id: 3,
    title: 'E-COMMERCE',
    secondTitle: 'MOST PROFITABLE',
    icon: <BiShoppingBag />,
    desc: 'Best for e-shops',
    miniText: "(Increase sales and conversions)",
    price: '2500€+',
    features: [
      "Wordpress + WooCommerce",
      "Photoshop, Illustrator, Midjourney",
      "Custom animations and interactive elements",
      "High Speed Performance",
      "Best SEO Optimization",
      "Client-Centered Approach"
    ]
  },
]

const Pricing = () => {
  return (
    <section className={`container ${styles.pricingSection}`}>
      <div className={styles.titleContainer}>
        <MiniTitle>ADVANCED SOLUTIONS</MiniTitle>
        <h2 className={styles.title}>CHOOSE WHAT YOU NEED</h2>
      </div>

      <div className={styles.pricingsContainer}>
        {pricing.map(({ id, title, secondTitle, icon, desc, miniText, price, features }, index) => {
          return (
            <div className={styles.pricing}>
              <h3>{secondTitle}</h3>
              <div className={styles.pricingContainer}>
                <div className={styles.icon}>{icon}</div>
                <h2>{title}</h2>
                <div className={styles.descriptionContainer}>
                  <p className={styles.description}>{desc}</p>
                  <p className={styles.miniText}>{miniText}</p>
                </div>
                <div className={styles.priceContainer}>
                  <div style={{ fontWeight: '700', fontSize: '1.8rem' }}>{price}</div>
                  <div style={{ fontWeight: '300', fontSize: '1.2rem' }}>Taxes Inc.</div>
                </div>

                <div>
                  <p style={{ fontWeight: '700', fontSize: '1.6rem', borderBottom: '1px solid var(--purple)', paddingBottom: '1rem' }}>What includes</p>
                  <div className={styles.featureContainer}>
                    {features.map((feature, index) => {
                      return (
                        <p className={styles.feature}><ImCheckmark2 style={{ color: 'var(--purple)', fontSize: '2rem' }} /> {feature}</p>
                      )
                    })}
                  </div>
                </div>

              </div>


            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Pricing