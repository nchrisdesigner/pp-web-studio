'use client'
import styles from './animatedparagraph.module.css'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText)

const AnimatedParagraph = ({ children, color = '#222222' }) => {
  const paragraphRef = useRef()

  useGSAP(() => {
    const splittedText = SplitText.create(
      paragraphRef.current,
      {
        type: "lines, words",
        linesClass: "paragraph-line"
      })

    const tl = gsap.timeline()
    tl.from(splittedText.words, {
      yPercent: 300,
      rotate: 3,
      ease: "circ.inOut",
      stagger: 0.01,

    })

    ScrollTrigger.create({
      trigger: paragraphRef.current,
      start: "top 80%",
      animation: tl
    })

  })

  return (
    <p style={{color:color}} ref={paragraphRef} className={styles.paragraph}>{children}</p>
  )
}

export default AnimatedParagraph