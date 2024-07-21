'use client'
import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './contact.module.css'
import { PiCopy } from "react-icons/pi"
import { useState } from 'react'
import { ImCheckmark2 } from "react-icons/im"


const Contact = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('hey@pixelperfekt.gr')
    setCopied(true)
  }

  return (
    <section className={`container ${styles.sectionContainer}`}>
      <TitleContainer align='center' miniTitle='WHAT WE WILL DO' title='YOUR JOURNEY STARTS HERE'>
        We believe in simplicity and meaningful dialogues where great ideas emerge from conversations, not checkboxes. <span className="bold-text">Your unique story deserves a human touch</span> - it’s not just a project, but a collaborative journey.
      </TitleContainer>

      <p className={styles.miniTitle}>You are one step away from being average</p>
      <button onClick={handleCopy} className={styles.btn}>
        {copied ? 'Email copied' : 'Copy email '}
        {copied ? <ImCheckmark2 /> : <PiCopy />}
        </button>
    </section>
  )
}

export default Contact