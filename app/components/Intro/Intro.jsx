'use client'

import { Anton } from 'next/font/google'
import styles from './intro.module.css'

import { useRef } from 'react'
import Letter from '@/app/ui/Letter/Letter'
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import Paragraph from '@/app/ui/Paragraph/Paragraph'
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)


const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const Intro = () => {

  const containerRef = useRef()
  const textRef = useRef()
  const scrollElementRef = useRef()
  const secondaryTitleOneRef = useRef()
  const miniTitleRef = useRef()
  const paragraphRef = useRef()
 


  useGSAP(() => {
    const timeline = gsap.timeline()
    timeline
      .to(scrollElementRef.current, { y: 14, duration: 2, repeat: -1, ease: "power1.inOut" })
  }, {})


  useGSAP(() => {

    gsap.set("h2 div", { yPercent: -100 })
    gsap.set("h2", { autoAlpha: 1 })
    gsap.set(secondaryTitleOneRef.current, { opacity: 0 })
    gsap.set(miniTitleRef.current, { opacity: 0 })
    gsap.set(paragraphRef.current, { opacity: 0 })


    const tl = gsap.timeline()

    tl
      .to("h2 div", { duration: .75, yPercent: 0, stagger: 0.05, ease: "expo.inOut" })
      .to("h2 div:not([data-char='.'])", { duration: .75, yPercent: 100, stagger: 0.05, ease: "expo.inOut" })
      .to(secondaryTitleOneRef.current, { opacity: 1 })
      .to(miniTitleRef.current, { opacity: 1 })
      .to(paragraphRef.current, { opacity: 1 })


    ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 50%",
      animation: tl,
    })

  }, {})



  return (
    <section ref={containerRef} className={`${styles.sectionContainer}`}>
      <div className="container">
        <h4 ref={miniTitleRef} className={styles.secondary}>We <Letter textSize='title'>K</Letter>o-strategize. We <Letter textSize='title'>K</Letter>o-Design. We <Letter textSize='title'>K</Letter>o-win.</h4>

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
            <div data-char=",">.</div>
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


          <h2 ref={secondaryTitleOneRef} className={`${anton.className} ${styles.extraTitle}`}>
            PARTNER IN
            <span className='inline-element'> <Letter textSize='title'>K</Letter>REATION</span>
            STORYTELLERS
          </h2>

        </div>


        <div ref={paragraphRef} className={styles.miniTitleContainer}>
          <Paragraph align='center'>
            Through creative thinking, sharp strategy, and bold design, the ordinary becomes impossible to ignore. Keep scrolling to watch everything fall into place and see how your brand’s true potential can come to life.
          </Paragraph >

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

