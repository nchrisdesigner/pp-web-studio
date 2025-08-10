'use client'
import styles from './pantone.module.css'

import { useRef } from 'react'

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const Pantone = ({ title, color, top, left, rotation = 0 }) => {

  const pantoneRef = useRef()

  useGSAP(() => {
    gsap.set(pantoneRef.current, { autoAlpha: 0 })
    const timeline = gsap.timeline()

    timeline
      .set(pantoneRef.current, { autoAlpha: 1 })
      .fromTo(pantoneRef.current,
        {
          top: '50%',
          left: '50%',
          opacity: 0,
        },
        {
          top: top,
          left: left,
          opacity: 1,
          rotate: rotation,
          duration: 1.5,
          // ease: "elastic.out(1.75,0.75)",
          ease: "elastic.inOut(1.75,0.75)",
        })


    ScrollTrigger.create({
      trigger: pantoneRef.current,
      start: "top 50%",
      animation: timeline
    })
  })

  return (
    <div
      ref={pantoneRef}
      className={styles.pantone}>
      <div style={{ background: color }} className={styles.pantoneColor}></div>
      <div className={styles.pantoneText}>
        <h5>{title}</h5>
        <p>{color}</p>
      </div>
    </div>
  )
}

export default Pantone