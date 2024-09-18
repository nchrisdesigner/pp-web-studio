'use client'
import { useState } from 'react'
import styles from './contactbutton.module.css'
import { PiCopy } from "react-icons/pi"
import { ImCheckmark2 } from "react-icons/im"

const ContactButton = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('nchrisdesigner@gmail.com')
    setCopied(true)
  }

  return (
    <div className={styles.container}>
      <p className={styles.miniTitle}>You are one step away from being average</p>
      <button onClick={handleCopy} className={styles.btn}>
        {copied ? 'Email copied' : 'Copy email '}
        {copied ? <ImCheckmark2 /> : <PiCopy />}
      </button>
    </div>

  )
}

export default ContactButton