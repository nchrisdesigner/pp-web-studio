'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap"
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const CubeText = () => {

  useGSAP(() => {
    gsap.fromTo(".textCube h2",
      {
        x: 400, xPercent: 0
      },
      {
        x: 0, xPercent: -100, duration: 8, ease:"none", stagger:0.87, repeat:-1
      }
    )
  } )

  return (
    <div className="cubeContainer">
      <div className="textCube fancy">
        <div className="face front">
          <h2 className={anton.className}>PEOPLE IGNORE DESIGN THAT IGNORES PEOPLE</h2>
        </div>
        <div className="face side">
          <h2 className={anton.className}>PEOPLE IGNORE DESIGN THAT IGNORES PEOPLE</h2>
        </div>
      </div>
    </div>
  )
}

export default CubeText