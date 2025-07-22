'use client'
import styles from './animatedtext.module.css'
import { useRef } from 'react'

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);


import { Anton } from 'next/font/google'
const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const AnimatedText = ({children}) => {

  const containerRef = useRef()
  const headlineRef = useRef()
  const cloneHeadlineRef = useRef()


  function createAnimation(){
    const duration = 0.4
    const stagger = { each: 0.02, from: "start", ease: "power2" }
    
    const headlineSplit = SplitText.create(headlineRef.current, { type: "chars" })
    const cloneSplit = SplitText.create(cloneHeadlineRef.current, { type: "chars" })
    
    gsap.set(cloneHeadlineRef.current, {yPercent: -100})
    gsap.set(cloneSplit.chars, 
      { rotationX: -90, 
        opacity:0, 
        // transformOrigin:"50% 50% -50",
        transformOrigin: () => {
          let height = containerRef.current.offsetHeight
          return `50% 50% -${height/2}`
        },
       })
    
    const tl = gsap.timeline()
    tl
    .to(headlineSplit.chars, 
      {rotationX:90, 
      // transformOrigin:"50% 50% -70", 
      transformOrigin:() => {
          let height = containerRef.current.offsetHeight
          return `50% 50% -${height/2}`
        }, 
      duration:duration, 
      stagger: stagger})
    .to(headlineSplit.chars, {duration:duration, opacity:0, stagger:stagger, ease:"power2.in"}, 0)
    .to(cloneSplit.chars, {opacity:1, duration: 0.1, stagger:stagger}, 0)
    .to(cloneSplit.chars, {rotationX:0, duration:duration,  stagger: stagger}, 0)

    return tl
  }


  useGSAP(() => {

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 50%",
      end: "bottom 30%",
      // markers: true,
      // scrub:1,
      toggleActions: "play none none reverse",
      animation: createAnimation(),
      invalidateOnRefresh: true
    })


  }, { scope: containerRef });

  return (

    <div ref={containerRef} className={`${anton.className} ${styles.rotatingHeader}`}>
      <h1 ref={headlineRef} className={styles.headline}>{children}</h1>
      <h1 ref={cloneHeadlineRef} className={styles.cloneHeadline}>{children}</h1>
    </div>

  )
}

export default AnimatedText