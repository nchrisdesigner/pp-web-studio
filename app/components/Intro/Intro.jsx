'use client'

import { Anton } from 'next/font/google'
import styles from './intro.module.css'

import { useRef } from 'react'
import localFont from 'next/font/local'
import Letter from '@/app/ui/Letter/Letter'

import { gsap } from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import SecondaryTitle from '@/app/ui/SecondaryTitle/SecondaryTitle'
import Paragraph from '@/app/ui/Paragraph/Paragraph'
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

const myFont = localFont({
  src: './Unaessthetic.ttf',
  display: 'swap',
})

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})


const Intro = () => {

  const containerRef = useRef()
  const textRef = useRef()
  const scrollElementRef = useRef()

  const secondaryTitleOneRef = useRef()
  const secondaryTitleRefOneContainer = useRef()
  const secondaryTitleTwoRef = useRef()
  const secondaryTitleRefTwoContainer = useRef()


  useGSAP(() => {
    const timeline = gsap.timeline()
    timeline
      .to(scrollElementRef.current, { y: 14, duration: 2, repeat: -1, ease: "power1.inOut" })
  }, {})


  useGSAP(() => {

    gsap.set("h2 div", { yPercent: -100 })
    gsap.set("h2", { autoAlpha: 1 })
    gsap.set(secondaryTitleRefOneContainer.current, {yPercent:100})
    gsap.set(secondaryTitleRefTwoContainer.current, {yPercent:100})

    const tl = gsap.timeline()
    tl
      .to("h2 div", { duration: .75, yPercent: 0, stagger: 0.05, ease: "expo.inOut" })
      .to("h2 div:not([data-char='.'])", { duration: .75, yPercent: 100, stagger: 0.05, ease: "expo.inOut" })
      .to(secondaryTitleOneRef.current,
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" })
      .to(secondaryTitleRefOneContainer.current, { yPercent: 0 }, "<")
      .to(secondaryTitleTwoRef.current,
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" })
      .to(secondaryTitleRefTwoContainer.current, { yPercent: 0 }, "<")

    ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 50%",
      animation: tl,
    })

  }, {})



  return (
    <section ref={containerRef} className={`${styles.sectionContainer}`}>
      <div className="container">
        <h4 className={styles.secondary}>We <Letter textSize='title'>K</Letter>o-strategize. We <Letter textSize='title'>K</Letter>o-Design. We <Letter textSize='title'>K</Letter>o-win.</h4>

        <div ref={textRef} className={`${styles.descrambleText} ${anton.className}`}>
          <h2>
            <div data-char="C">Y</div>
            <div data-char="L">E</div>
            <div data-char=".">I</div>
            <div data-char=".">E</div>
            <div data-char="N">R</div>
            <div data-char="T">R</div>
          </h2>
          <h2>
            <div data-char=".">I</div>
            <div data-char="S">R</div>
          </h2>
          <h2>
            <div data-char="A">V</div>
          </h2>
          <h2>
            <div data-char="B">R</div>
            <div data-char="A">V</div>
            <div data-char="D">Y</div>
            <div data-char=".">,</div>
          </h2>
          <h2>
            <div data-char=".">B</div>
            <div data-char="A">Y</div>
            <div data-char="D">K</div>
          </h2>
          <h2>
            <div data-char="W">M</div>
            <div data-char=".">O</div>
            <div data-char="R">Y</div>
            <div data-char="D">V</div>
          </h2>
          <h2>
            <div data-char="W">M</div>
            <div data-char=".">E</div>
          </h2>
          <h2>
            <div data-char="P">Y</div>
            <div data-char="R">P</div>
            <div data-char=".">E</div>
            <div data-char="F">E</div>
            <div data-char="E">F</div>
            <div data-char=".">R</div>
          </h2>
        </div>

        <div className={styles.animationTitleContainer}>


          <h2 ref={secondaryTitleOneRef} className={`${anton.className} ${styles.extraTitle} ${styles.animationTitle}`}>
            <span ref={secondaryTitleRefOneContainer}>
              PARTNER IN <Letter textSize='title'>K</Letter>REATION
            </span>
          </h2>
          <h2 ref={secondaryTitleTwoRef} className={`${anton.className} ${styles.extraTitle} ${styles.animationTitle}`}>
            <span ref={secondaryTitleRefTwoContainer}>
              STORYTELLERS
            </span>
          </h2>

        </div>
        {/* <h2
          className={`${anton.className} ${styles.extraTitle}`}>
          <span>PARTNER</span>
          <span>IN</span>
          <span><Letter textSize='title'>K</Letter>REATION</span>
        </h2>

        <h2 ref={textRef} className={` ${styles.extraTitle} ${styles.extraTitleAlt} ${anton.className}`}>
          STORYTELLERS
        </h2> */}

        <div className={styles.miniTitleContainer}>


          {/* <h4 className={styles.secondary}>Great ideas deserve more than simple design.</h4> */}

          <Paragraph align='center'>
            Scroll on to see how every pixel, every idea, and every move clicks into place—revealing the brand you were meant to be
          </Paragraph >
          <h4 className={styles.secondary}>DIS<Letter textSize='title'>K</Letter>OVER HOW EVERYTHING FALLS INTO PLACE AND SEE YOUR BRAND'S <span className="bold-text purple"> TRUE POTENTIAL</span></h4>


          <div className={styles.scrollElementContainer}>
            <div className={styles.scrollElement}>
              <span ref={scrollElementRef} className={styles.cursor}>

              </span>
              <span className={styles.line}></span>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Intro

