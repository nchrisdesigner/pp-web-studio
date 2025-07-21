'use client'
import AnimatedText from "../AnimatedText/AnimatedText"
import styles from './animatedsection.module.css'

const animatedTitles = [
  'PEOPLE IGNORE',
  'DESIGN THAT',
  'IGNORES PEOPLE',
]

const AnimatedSection = () => {
  return (
    <section className={`${styles.container}`}>
      <div className="container">
        <AnimatedText>PEOPLE IGNORE</AnimatedText>
        <AnimatedText>DESIGN THAT</AnimatedText>
        <AnimatedText>IGNORES PEOPLE</AnimatedText>
      </div>
    </section>
  )
}

export default AnimatedSection