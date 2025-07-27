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
  const clientsRef = useRef()
  const partnerRef = useRef()

  useGSAP(() => {
    const timeline = gsap.timeline()

    const split = SplitText.create(textRef.current)
    
    

    // timeline
    // .fromTo(clientsRef.current, {y:0,autoAlpha:1}, {y:100,autoAlpha:0})
    // .fromTo(partnerRef.current, {y:-100, autoAlpha:0}, {y:0,autoAlpha:1})

    // gsap.set("h2 div", { yPercent: -100 })
    // gsap.set("h2", { autoAlpha: 1 })

    // const tl = gsap.timeline()
    // tl
    //   .to("h2 div", { duration: .75, yPercent: 0, stagger: 0.05, ease: "expo.inOut" })
    //   .to("h2 div:not([data-char='.'])", { duration: .75, yPercent: 100, stagger: 0.05, ease: "expo.inOut" })

    ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 30%",
      animation: gsap.fromTo(split.chars, {opacity:0, yPercent:-100}, {opacity:1, yPercent:0, stagger: 0.02}),
    })

  }, {});


  return (
    <section ref={containerRef} className={`${styles.sectionContainer}`}>
      <div className="container">

        <div>
          <h3 className={styles.secondaryTitle}>
            CLIENT IS A BAD, BAD WORD. WE PREFER
          </h3>
        </div>

        {/* <div className={styles.miniContainer}>

          <h2 className={`${anton.className} ${styles.title}`}>
            <span style={{ position: 'relative' }}>
              <svg
                className={styles.smudgeOne} width="206" height="104" viewBox="0 0 206 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  className={styles.path}
                  d="M10.0293 10.97C67.1527 47.7891 129.692 75.269 195.029 93.97" stroke="#5D5AD6" strokeWidth="20" strokeLinecap="round" />
              </svg>
              <svg className={styles.smudgeTwo} width="289" height="96" viewBox="0 0 289 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  className={styles.path}
 
                  d="M10.1992 85.97C19.7147 84.3299 29.2014 80.4448 38.4395 77.5735C74.0656 66.5006 109.947 56.5673 146.016 47.5861C181.628 38.7187 217.61 31.5196 252.989 21.4498C262.034 18.8751 270.426 16.4717 278.207 10.97" stroke="#5D5AD6" strokeWidth="20" strokeLinecap="round" />
              </svg>
              CLIENT</span>-INSPIRED
          </h2>
        </div> */}





        <h2
          className={`${anton.className} ${styles.extraTitle}`}>
          {/* <div ref={clientsRef}>CLIENTS</div>  */}
          <div ref={partnerRef}>PARTNER</div> 
          <div>IN</div> 
          <div><Letter textSize='title'>K</Letter>REATIONS</div> 
        </h2>




        <h2 ref={textRef} className={` ${styles.extraTitle} ${anton.className}`}>
          STORYTELLERS
        </h2>

        <div className={styles.miniTitleContainer}>

          <h4 className={styles.secondary}>We <Letter textSize='title'>K</Letter>o-<Letter textSize='title'>K</Letter>reate. We <Letter textSize='title'>K</Letter>o-strategize. We <Letter textSize='title'>K</Letter>o-win.</h4>
          {/* <h4 className={styles.secondary}>Great ideas deserve more than simple design.</h4> */}
          {/* <h4 className={styles.secondary}>DIS<Letter textSize='title'>K</Letter>OVER HOW EVERYTHING FALLS INTO PLACE AND SEE YOUR BRAND'S <span className="bold-text purple"> TRUE POTENTIAL</span></h4> */}
        </div>
      </div>
    </section >
  )
}

export default Intro

