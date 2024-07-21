'use client'

import Image from 'next/image'
import styles from './mvp.module.css'
import { Anton } from 'next/font/google'

import step1 from './../../assets/steps/step-1.png'
import step2 from './../../assets/steps/step-2.png'
import step3 from './../../assets/steps/step-3.png'
import step4 from './../../assets/steps/step-4.png'
import { PiCheckFat } from "react-icons/pi";

import { useState } from 'react'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const images = [
  {
    id:1,
    src: step1,
    alt: 'turning your concepts into champions'
  },
  {
    id:2,
    src: step2,
    alt: 'game-changing designs for you'
  },
  {
    id:3,
    src: step3,
    alt: 'your success is our victory'
  },
  {
    id:4,
    src: step4,
    alt: 'designing mvps in eveery industry'
  },
]

const steps = [
  {
    id: 1,
    title: 'Turning Your Concepts into Champions',
    desc: 'Your vision is the blueprint for our work. We delve deep into your ideas, shaping them into extraordinary digital experiences that lead to success.'
  },
  {
    id: 2,
    title: 'Game-Changing Designs for You',
    desc: 'We blend innovation and creativity, ensuring that your project stands out with unique, game-changing elements.'
  },
  {
    id: 3,
    title: 'Your Success is Our Victory',
    desc: 'Your success is the ultimate measure of our achievement. We are committed to exceeding your expectations, ensuring both our victories are aligned.'
  },
  {
    id: 4,
    title: 'Designing MVPs in Every Industry',
    desc: 'We are always aligned on your industry standards, understanding your specific needs to make your business stand out as a top performer.  '
  },
]

const TheRealMVP = () => {
  const [selectedStep, setSelectedStep] = useState(1)
  // const [selectedImage, setSelectedImage] = useState(step1)


  const handleSelectStep = (id) => {
    setSelectedStep(id)
  }

  return (
    <section className={`${styles.container}`}>
      <div className='container'>

        <div className={styles.titleContainer}>
          <h3>YOU ARE THE REAL <span className='yellow'>MVP</span></h3>
          <h2 className={anton.className}>YOUR DREAMS MATTER</h2>
          <p>We hear what our people say</p>
        </div>

        <div className={styles.gridContainer}>

          <div className={styles.steps}>
            <h4>Your Goals, <span className='yellow'>Our Game Plan</span></h4>
            <div className={styles.stepsContainer}>
              {steps.map(({ id, title, desc }, index) => {
                return (
                  <div key={id} className={styles.step} onClick={() => handleSelectStep(id)}>
                    <h5 style={{display: 'flex', alignItems:'center', gap: '.75rem'}}>
                    <PiCheckFat style={{color: 'var(--purple)', fontSize: '2.2rem'}} />
                      {title}</h5>
                    {
                      selectedStep === id && <p>{desc}</p>
                    }
                    
                  </div>
                )
              })}
            </div>
          </div>

          <div className={styles.images}>
            <div className={styles.imagesContainer}>
              <figure className={styles.imageContainer}>
                {images.map(({id, src, alt}, index) => {
                  return (
                    <>
                        {
                      selectedStep === id && 
                      <Image className={styles.image} src={src} alt={alt} />
                    }
                    </>
                  )
                })}
              </figure>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default TheRealMVP