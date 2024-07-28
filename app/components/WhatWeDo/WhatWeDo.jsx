import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './whatwedo.module.css'
import web from './../../assets/services/service1.jpg'
import brand from './../../assets/services/service2.jpg'
import motion from './../../assets/services/service3.jpg'
import Link from 'next/link'
import Card from './components/Card/Card'

const services = [
  {
    id: 1,
    mainTitle: 'Web Design',
    title: 'Take your online presence beyond the Average',
    boldText: 'A poor website equals missed opportunities.',
    desc: 'We blend fresh design ideas with easy-to-navigate pages, ensuring your website not only looks amazing but also works perfectly.',
    image: web
  },
  {
    id: 2,
    mainTitle: 'Brand Identity',
    title: 'Defamiliriase the Ordinary with Uniqueness',
    boldText: 'Bad branding weighing down your company?',
    desc: 'We mix design principles and our original creativity with your story to take your brand to new heights.',
    image: brand
  },
  {
    id: 3,
    mainTitle: 'Video Motion',
    title: 'Tell your story through Motion ',
    boldText: 'Text can often be overlooked.',
    desc: 'Bring your brand to life with video motion, transforming your message into captivating visuals and make your brand stand out.',
    image: motion
  },
]

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