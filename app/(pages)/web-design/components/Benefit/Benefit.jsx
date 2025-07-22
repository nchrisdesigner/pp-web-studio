'use client'

import styles from './benefit.module.css'

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'
import { SplitText } from "gsap/SplitText";
import Letter from '@/app/ui/Letter/Letter'

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);


const Benefit = ({ id, title, text }) => {
  const textRef = useRef()
  const lineRef = useRef()
  const numRef = useRef()

  function convertCtoK(str) {
    return str.split('').map((char,i) => (char === 'k' || char === 'K') ? <Letter key={i}>K</Letter> : char)
  }


  useGSAP(() => {

    ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 300",
      end: "bottom 270",
      // markers: true,
      scrub: 1,
      animation: gsap.fromTo(lineRef.current, { y: -200 }, { y: 200, ease: "none" })
    })

    // ScrollTrigger.create({
    //   trigger: textRef.current,
    //   start: "top 300",
    //   end: "bottom 270",
    //   // markers: true,
    //   animation: gsap.to(numRef.current, { duration: 0.25, scale: 1.35, ease: "none" }),
    //   toggleActions: "play reverse restart reverse"
    // })

  }, {});

  return (
    <div ref={textRef} className={styles.lineSection}>
      <div ref={numRef} className={styles.number}>{id}</div>
      <div className={styles.lineHolder}>
        <div ref={lineRef} className={styles.line}></div>
      </div>
      <div className={styles.titleContainer}>
        <h4>{convertCtoK(title)}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Benefit