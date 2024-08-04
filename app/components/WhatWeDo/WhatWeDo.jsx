import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './whatwedo.module.css'
import Link from 'next/link'
import Card from './components/Service/Service'
import { services } from '@/app/data/data'


const WhatWeDo = () => {
  return (
    <section className={`container ${styles.container} `}>
      <TitleContainer align='left' miniTitle='WHAT WE DO' title='WE BUILD BRANDS'>
        Our task is to change pixels into catchy brand stories and online personalities that attract clients. Our catch phrase, <span className="bold-text">‘From Pixels to Digital Mastery’</span> exemplifies our complete attention to detail and unrivaled knowledge in making perfect digital designs.
      </TitleContainer>
      <div className={styles.services}>
        <div className={styles.servicesContainer}>
          {services.map((service, index) => {
            return (
              <Card {...service} />
            )
          })}
        </div>
      </div>

      <h4 style={{ fontSize: '1.6rem' }}>DISCOVER HOW EVERYTHING FALLS INTO PLACE AND SEE YOUR BRAND'S <span className="bold-text purple"> TRUE POTENTIAL</span></h4>
      <Link href="#">Find out more</Link>
    </section>
  )
}

export default WhatWeDo