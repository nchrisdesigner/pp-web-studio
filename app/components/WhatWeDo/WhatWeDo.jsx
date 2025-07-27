import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './whatwedo.module.css'
import Card from './components/Service/Service'
import { services } from '@/app/data/data'
import Letter from '@/app/ui/Letter/Letter'


const WhatWeDo = () => {

  return (
    <section className={styles.container}>
      <div className='container'>
        <TitleContainer align='left' miniTitle='WHAT WE DO' title='WE BUILD BRANDS' color='white'>
          We build websites that refle<Letter>K</Letter>t who you are and what you stand for. <span className="bold-text purple"> <Letter>K</Letter>lear, bold, and made to mean something.</span> From branding to motion to the way your site moves and speaks, everything we do is designed to <Letter>K</Letter>onnect with real people.
        </TitleContainer>
        <div className={styles.services}>
          <div className={styles.servicesContainer}>
            {services.map((service) => {
              return (
                <Card key={service.id} {...service} />
              )
            })}
          </div>
        </div>
        
        <h3 className={styles.secondaryTitle}>No <Letter>K</Letter>ookie-<Letter>K</Letter>utter solutions here. &nbsp; <span className="purple"> Every project gets our full attention</span></h3>
      </div>

    </section>
  )
}

export default WhatWeDo
