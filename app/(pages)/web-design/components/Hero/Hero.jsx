import SecondaryTitle from '@/app/ui/SecondaryTitle/SecondaryTitle'
import styles from './hero.module.css'
import Title from '@/app/ui/Title/Title'
import Paragraph from '@/app/ui/Paragraph/Paragraph'
import Image from 'next/image'

import hero from '@/app/assets/hero.jpg'

const Hero = () => {
  return (
    <header className={`container ${styles.container}`}>
        <div className={styles.textContainer}>
          <SecondaryTitle>YOUR 24/7 BUSINESS AMBASSADOR</SecondaryTitle>
          <Title>SKYROCKET YOUR BUSINESS  SUCCESS</Title>
          <Paragraph>
            Nowadays, possessing a website is not just a benefit but rather an important aspect that any business looking forward to succeeding must prioritize. An online presence is like a 24/7 storefront accessible to anyone. As more customers turn to the internet for information on goods and services, those businesses without websites will miss out on significant  oppportunities.
          </Paragraph>
          <div className={styles.btnContainer}>
            <button className={styles.btn}>See Pricing</button>
          </div>
        </div>
        <figure className={styles.heroContainer}>
          <Image className={styles.hero} src={hero} alt='web design hero image' />
        </figure>
      </header>
  )
}

export default Hero