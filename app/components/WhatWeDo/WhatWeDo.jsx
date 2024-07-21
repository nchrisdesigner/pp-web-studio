import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './whatwedo.module.css'

import web from './../../assets/services/service1.jpg'
import brand from './../../assets/services/service2.jpg'
import motion from './../../assets/services/service3.jpg'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: 1,
    mainTitleOne: 'Web',
    mainTitleTwo: 'Design',
    title: 'Take your online presence beyond the Average',
    boldText: 'A poor website equals missed opportunities.',
    desc: 'We blend fresh design ideas with easy-to-navigate pages, ensuring your website not only looks amazing but also works perfectly.',
    image: web
  },
  {
    id: 2,
    mainTitleOne: 'Brand',
    mainTitleTwo: 'Identity',
    title: 'Defamiliriase the Ordinary',
    boldText: 'Bad branding weighing down your company?',
    desc: 'We mix design principles and our original creativity with your story to take your brand to new heights.',
    image: brand
  },
  {
    id: 3,
    mainTitleOne: 'Video',
    mainTitleTwo: 'Motion',
    title: 'Storytelling in Motion',
    boldText: 'Text can often be overlooked.',
    desc: 'Bring your brand to life with video motion, transforming your message into captivating visuals and make your brand stand out.',
    image: motion
  },
]

const WhatWeDo = () => {
  return (
    <section className={`container ${styles.container} `}>
      <TitleContainer miniTitle='WHAT WE DO' title='WE BUILD BRANDS'>
        Our task is to change pixels into catchy brand stories and online personalities that attract clients. Our catch phrase, <span className="bold-text">‘From Pixels to Digital Mastery’</span> exemplifies our complete attention to detail and unrivaled knowledge in making perfect digital designs.
      </TitleContainer>

      <div className={styles.services}>
        <div className={styles.servicesContainer}>
          {services.map(({ id, mainTitleOne, mainTitleTwo, title, boldText, desc, image }, index) => {
            return (
              <div key={id} className={styles.service}>
                <Image src={image} alt={title} className={styles.image} />
                <div className={styles.miniGrid}>
                  <h3>{title}</h3>
                  <p><span className='bold-text'>{boldText}</span> {desc}</p>
                  <h2><span className="outline-text-white">{mainTitleOne}</span></h2>
                  <h2><span className="outline-text-white">{mainTitleTwo}</span></h2>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <h4 style={{fontSize: '1.6rem'}}>DISCOVER HOW EVERYTHING FALLS INTO PLACE AND SEE YOUR BRAND'S <span className="bold-text purple"> TRUE POTENTIAL</span></h4>
      <Link href="#">Find out more</Link>
    </section>
  )
}

export default WhatWeDo