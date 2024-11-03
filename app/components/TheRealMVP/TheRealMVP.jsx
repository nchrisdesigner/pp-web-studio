'use client'

import styles from './mvp.module.css'
import { Anton } from 'next/font/google'
import { AnimatePresence} from 'framer-motion'
import { useState } from 'react'
import Step from './components/Step/Step'
import StepImage from './components/StepImage/StepImage'
import { steps } from '@/app/data/data'
import PromiseTitle from '@/app/ui/PromiseTitle/PromiseTitle'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const TheRealMVP = () => {
  const [selectedStep, setSelectedStep] = useState(1)
  const [degree, setDegree] = useState(0)

  const handleSelectStep = (id) => {
    setSelectedStep(id)
    setDegree(-90)
  }

  return (
    <section className={`${styles.container}`}>
      <div className='container'>

        <div className={styles.titleContainer}>
          <h3>YOU ARE THE REAL <span className='yellow'>MVP</span></h3>
          <h2 className={anton.className}>YOUR DREAMS MATTER</h2>
          <p className={styles.containerMiniTitle}>We hear what our people say</p>
        </div>

        <div className={styles.gridContainer}>

          <div className={styles.steps}>
            <h4 className={styles.stepsTitle}>Your Goals, <span className='yellow'>Our Game Plan</span></h4>

            <div className={styles.stepsContainer}>
              <AnimatePresence mode="wait">
                {steps.map((step, index) => {
                  const isSelected = selectedStep === step.id;
                  return (
                    <Step key={step.id} {...step} isSelected={isSelected} handleSelectStep={handleSelectStep} degree={degree} />
                  )
                })}
              </AnimatePresence>
            </div>
          </div>

          <div className={styles.images}>
            <div className={styles.imagesContainer}>
              <AnimatePresence mode="wait">
                {steps.map(({ id }) => {
                  if (selectedStep === id) {
                    return (
                      <StepImage key={id} selectedStep={selectedStep} steps={steps} />
                    )
                  }
                  return null;
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>


      </div>

    </section >
  )
}

export default TheRealMVP