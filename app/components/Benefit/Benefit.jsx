'use client'

import styles from './benefit.module.css'
import Letter from '@/app/ui/Letter/Letter'

import {  useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'
import { SplitText } from "gsap/SplitText";

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
      scrub: 1,
      animation: gsap.fromTo(lineRef.current, { y: -200 }, { y: 200, ease: "none" })
    })

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