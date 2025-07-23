'use client'
import styles from './descrambledtext.module.css'
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)
import { Anton } from 'next/font/google'
import { useRef } from 'react'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})


const DescrambledText = () => {

  const textRef = useRef()

    useGSAP(() => {

    gsap.set("h2 div", {yPercent: -100})
    gsap.set("h2", {autoAlpha:1})

    const tl = gsap.timeline()
    tl
    .to("h2 div", {duration:.75, yPercent:0, stagger: 0.05, ease: "expo.inOut"})
    .to("h2 div:not([data-char='.'])", {duration:.75, yPercent:100, stagger: 0.05, ease: "expo.inOut"})

    ScrollTrigger.create({
      trigger: textRef.current,
      start: "top 50%",
      animation: tl,
    })

  }, {});

  return (
    <div ref={textRef} className={`${styles.descrambleText} ${anton.className}`}>
      <h2>
        <div data-char=".">Y</div>
        <div data-char="O">R</div>
        <div data-char="U">O</div>
        <div data-char=".">R</div>
      </h2>
      <h2>
        <div data-char=".">C</div>
        <div data-char="U">R</div>
        <div data-char="S">E</div>
        <div data-char=".">T</div>
        <div data-char=".">O</div>
        <div data-char="M">W</div>
        <div data-char=".">E</div>
        <div data-char="R">O</div>
        <div data-char=".">S</div>
      </h2>
      <h2>
        <div data-char="A">V</div>
        <div data-char=".">R</div>
        <div data-char="E">P</div>
      </h2>
      <h2>
        <div data-char=".">O</div>
        <div data-char="N">R</div>
        <div data-char="L">E</div>
        <div data-char=".">I</div>
        <div data-char="N">N</div>
        <div data-char="E">P</div>
      </h2>

    </div>
  )
}

export default DescrambledText



{/* 
    <div className={`${styles.descrambleText} ${anton.className}`}>

      <h1>
        <div data-char=".">C</div>
        <div data-char="R">A</div>
        <div data-char="E">F</div>
        <div data-char=".">A</div>
        <div data-char="T">S</div>
        <div data-char=".">I</div>
        <div data-char="V">R</div>
        <div data-char=".">E</div>
      </h1>
    </div> */}