'use client'
import styles from './benefits.module.css'
import { Anton } from 'next/font/google'
import { useRef } from 'react'

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'
import { SplitText } from "gsap/SplitText";
import Benefit from '../Benefit/Benefit'
import Letter from '@/app/ui/Letter/Letter'
import { principles } from '@/app/data/data'

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)



const anton = Anton({
  weight: ['400'],
  subsets: ['latin']
})


const Benefits = () => {

  const containerRef = useRef()

  return (
    <section ref={containerRef} className={styles.sectionContainer}>
      <div className="container">

        <div className={styles.benefitsContainer}>

          <div className={styles.textContainer}>
            <div className={styles.stickyTitle}>
              <h3>OUR GUIDING LIGHTS</h3>
              <h2 className={anton.className}>OUR 3 <Letter textSize='title'>K</Letter>ORE PRINCIPLES</h2>
              <p>The values that shape every pixel, every idea, every decision.</p>
            </div>
          </div>

          <div className={styles.lineSections}>
            {principles.map((step, index) => {
              return (
                <Benefit key={step.number} {...step} />
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits