'use client'
import styles from './intro.module.css'
import SecondaryTitle from '@/app/ui/SecondaryTitle/SecondaryTitle'
import DescrambledText from './components/DescrambledText/DescrambledText'
import TextPath from './components/TextPath/TextPath'
import TertiaryTitle from '@/app/ui/TertiaryTitle/TertiaryTitle'
import { Anton } from 'next/font/google'
import { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Paragraph from '@/app/ui/Paragraph/Paragraph'
gsap.registerPlugin(ScrollTrigger)

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const Intro = () => {
  const tertiaryTitleRef = useRef()

  useGSAP(() => {

    gsap.set(tertiaryTitleRef.current, {opacity:0})

    const timeline = gsap.timeline()

    timeline
    .fromTo(tertiaryTitleRef.current,
      {opacity:0, y:25},
      {opacity:1, y:0},
    )

    ScrollTrigger.create({
      trigger: tertiaryTitleRef.current,
      start: "top 50%",
      animation: timeline,
    })

  }, {})

  return (
    <section className={`${styles.sectionContainer}`}>
      <TextPath />
      <div className="container">
        <div className={styles.gridContainer}>
          <div>
            <SecondaryTitle align='center'>NO WEBSITE, NO VISIBILITY</SecondaryTitle>
            <DescrambledText />
            <h3 className={`${styles.mainTitle} ${anton.className}`}>IS YOUR BUSINESS?</h3>
          </div>

          <Paragraph align='center' >
            <span className="bold-text purple-highlight">If your business isn’t online, you’re missing out.</span> A website means your doors are always open, <span className='semibold-text'>ready to answer questions, </span> <span className='semibold-text'>showcase your services,</span> and <span className='semibold-text'>solve your customers’ problems</span> at the click of a button. A well-designed website is your most powerful tool, building trust, providing vital information, and connecting with potential clients before you even speak a word. </Paragraph>
        </div>
        <div ref={tertiaryTitleRef}>
          <TertiaryTitle color="#222" align="center">Every moment offline is a missed opportunity. <span className="bold-text purple">Let’s change that.</span></TertiaryTitle>
        </div>

      </div>

    </section>
  )
}

export default Intro