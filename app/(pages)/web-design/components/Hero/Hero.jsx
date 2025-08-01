'use client'
import SecondaryTitle from '@/app/ui/SecondaryTitle/SecondaryTitle'
import styles from './hero.module.css'
import Paragraph from '@/app/ui/Paragraph/Paragraph'

import { useRef } from 'react'

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'
import { SplitText } from "gsap/SplitText"
gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

import { ImRocket } from "react-icons/im"
import Letter from '@/app/ui/Letter/Letter'
import TertiaryTitle from '@/app/ui/TertiaryTitle/TertiaryTitle'
import DarkButton from '@/app/ui/Buttons/DarkButton/DarkButton'

import { Anton } from 'next/font/google'
import CubeText from './components/3DCube/CubeText'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const Hero = () => {
  const containerRef = useRef()
  const titleRef = useRef()
  const iconRef = useRef()
  const textRef = useRef()



  useGSAP(() => {
    gsap.set("h1 div", { yPercent: -100 })
    gsap.set("h1", { autoAlpha: 1 })
    const splittedText = SplitText.create(textRef.current, { type: "chars" })

    const tl = gsap.timeline()
    tl
      .to("h1 div", { duration: .75, yPercent: 0, stagger: 0.05, ease: "expo.inOut" })
      .to("h1 div:not([data-char='.'])", { duration: .75, yPercent: 100, stagger: 0.05, ease: "expo.inOut" })
      .fromTo(splittedText, { opacity: 0, y: -2 }, { opacity: 1, y: 0, stagger: 0.05 }, 0)
      .to(iconRef.current, {
        keyframes: [
          { rotation: 10, duration: 0.04 },
          { rotation: -10, duration: 0.04 },
          { rotation: 10, duration: 0.04 },
          { rotation: -10, duration: 0.04 },
          { rotation: 8, duration: 0.04 },
          { rotation: -8, duration: 0.04 },
          { rotation: 8, duration: 0.04 },
          { rotation: -8, duration: 0.04 },
          { rotation: 6, duration: 0.04 },
          { rotation: -6, duration: 0.04 },
          { rotation: 6, duration: 0.04 },
          { rotation: -6, duration: 0.04 },
          { rotation: 0, duration: 0.04 }
        ],
        ease: "power1.inOut"
      })
      .to(iconRef.current, {
        y: -150,
        x: 50,
        rotate: 5,
        duration: 1.5,
        ease: "power3.in"
      })

    ScrollTrigger.create({
      trigger: titleRef.current,
      start: "top 50%",
      animation: tl,
    })

  }, {})

  return (
    <header ref={containerRef} className={styles.header}>
      <div className={styles.sectionContainer}>
        <div className={styles.textContainer}>
          <div className={styles.secondaryTitleContainer}>
            <SecondaryTitle align='left' color='white'>Your Online Handshake</SecondaryTitle>
            <div ref={iconRef} >
              <ImRocket className={styles.rocketIcon} />
            </div>
          </div>

          <div ref={titleRef} className={` ${styles.descrambleText} ${anton.className}`}>

            <h1>
              <div data-char=".">S</div>
              <div data-char=".">K</div>
              <div data-char="Y">A</div>
              <div data-char="R">P</div>
              <div data-char="O">D</div>
              <div data-char=".">C</div>
              <div data-char="K">D</div>
              <div data-char=".">E</div>
              <div data-char="T">R</div>
            </h1>
            <h1>
              <div data-char=".">Y</div>
              <div data-char="O">R</div>
              <div data-char="U">O</div>
              <div data-char=".">R</div>
            </h1>
            <h1>
              <div data-char="B">D</div>
              <div data-char="U">R</div>
              <div data-char="S">P</div>
              <div data-char=".">I</div>
              <div data-char="N">R</div>
              <div data-char=".">E</div>
              <div data-char="S">P</div>
              <div data-char="S">P</div>
            </h1>
            <h1>
              <div className='purple' data-char="S">O</div>
              <div className='purple' data-char="U">R</div>
              <div className='purple' data-char=".">C</div>
              <div className='purple' data-char=".">C</div>
              <div className='purple' data-char=".">E</div>
              <div className='purple' data-char=".">S</div>
              <div className='purple' data-char=".">S</div>
            </h1>

          </div>

          <div className={styles.textContentContainer}>
            <Paragraph color='white' align='left'>
              Your business needs more than just a logo and a social feed. Your website is where your brand shows up — open 24/7, ready to grab attention anytime. If you’re not online, you’re invisible to the people looking for you.
            </Paragraph>

            <TertiaryTitle>Why make it easier for your competitors? <span className='bold-text purple'> Stand out or stay behind.</span></TertiaryTitle>

            <DarkButton id="#pricing-web">
              <span>Unlock Your <Letter textSize='title' >K</Letter>oncept</span>
            </DarkButton>
          </div>

        </div>

        <CubeText />


      </div>
    </header>
  )
}

export default Hero