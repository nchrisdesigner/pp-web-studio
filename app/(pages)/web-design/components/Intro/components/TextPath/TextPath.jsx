'use client'
import styles from './textpath.module.css'

import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const TextPath = () => {
  const textPathRef = useRef()

  useGSAP(() => {

    const timeline = gsap.timeline({})

    timeline
    .to(textPathRef.current, {
      attr:{
        startOffset: -1000
      },
      duration: 14,
      repeat: Infinity
    })


  }, { scope:textPathRef.current });

  return (
    <svg className={`${styles.svgContainer} ${anton.className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" >
      <text style={{ fill: 'rgb(51, 51, 51)', fontFamily: 'Anton', fontSize: '28px', whiteSpace: 'pre' }}>
        <textPath ref={textPathRef} href="#text-path-0" startOffset="600">INVESTING IN A WEBSITE IS NON-NEGOTIABLE. IF YOU'RE NOT ONLINE, YOU'RE LOSING BUSINESS.</textPath></text>
      <defs>
        <path id="text-path-0" d="M 30.603 58.963 C 509.22 412.871 446.077 -151.336 971.727 75.576"></path>
      </defs>
    </svg>
  )
}

export default TextPath