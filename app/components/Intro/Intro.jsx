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


  useGSAP(() => {
    const timeline = gsap.timeline()

    timeline
    .to(scrollElementRef.current, {y:14 ,duration: 2, repeat:-1, ease: "power1.inOut" })

    // const split = SplitText.create(textRef.current)



    // timeline
    // .fromTo(clientsRef.current, {y:0,autoAlpha:1}, {y:100,autoAlpha:0})
    // .fromTo(partnerRef.current, {y:-100, autoAlpha:0}, {y:0,autoAlpha:1})

    // gsap.set("h2 div", { yPercent: -100 })
    // gsap.set("h2", { autoAlpha: 1 })

    // const tl = gsap.timeline()
    // tl
    //   .to("h2 div", { duration: .75, yPercent: 0, stagger: 0.05, ease: "expo.inOut" })
    //   .to("h2 div:not([data-char='.'])", { duration: .75, yPercent: 100, stagger: 0.05, ease: "expo.inOut" })

    // ScrollTrigger.create({
    //   trigger: textRef.current,
    //   start: "top 30%",
    //   animation: gsap.fromTo(split.chars, { opacity: 0, yPercent: -100 }, { opacity: 1, yPercent: 0, stagger: 0.02 }),
    // })

  }, {});


  return (
    <section ref={containerRef} className={`${styles.sectionContainer}`}>
      <div className="container">
        <div>
          <SecondaryTitle>
          CLIENT  IS A BAD, BAD WORD. WE PREFER
          </SecondaryTitle>
          {/* <h3 className={styles.secondaryTitle}>
              CLIENT  IS A BAD, BAD WORD. WE PREFER
          </h3> */}
        </div>

        <h2
          className={`${anton.className} ${styles.extraTitle}`}>
          <div>PARTNER</div>
          <div>IN</div>
          <div><Letter textSize='title'>K</Letter>REATION</div>
        </h2>

        <h2 ref={textRef} className={` ${styles.extraTitle} ${styles.extraTitleAlt} ${anton.className}`}>
          STORYTELLERS
        </h2>

        <div className={styles.miniTitleContainer}>

          <h4 className={styles.secondary}>We <Letter textSize='title'>K</Letter>o-strategize. We <Letter textSize='title'>K</Letter>o-Design. We <Letter textSize='title'>K</Letter>o-win.</h4>
          {/* <h4 className={styles.secondary}>Great ideas deserve more than simple design.</h4> */}
          {/* <h4 className={styles.secondary}>DIS<Letter textSize='title'>K</Letter>OVER HOW EVERYTHING FALLS INTO PLACE AND SEE YOUR BRAND'S <span className="bold-text purple"> TRUE POTENTIAL</span></h4> */}


          <div className={styles.scrollElementContainer}>
            <div  className={styles.scrollElement}>
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

