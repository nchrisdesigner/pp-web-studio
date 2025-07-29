'use client'
import { useState } from 'react'
import styles from './contactbutton.module.css'
import { PiCopy } from "react-icons/pi"
import { ImCheckmark2 } from "react-icons/im"
import Letter from '../../Letter/Letter'

const ContactButton = () => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('pixelperfektacademy@gmail.com')
    setIsCopied(true)
  }

  return (
    <div className={styles.container}>
      <button onClick={handleCopy} className={styles.btn}>
        {isCopied ? <ImCheckmark2 className={styles.icon} /> : <PiCopy className={styles.icon} />}
        <span>
          {isCopied
            ?
            (<>
              Email <Letter textSize='title'>K</Letter>opied
            </>)
            :
            (<>
              <Letter textSize='title'>K</Letter>opy email
            </>)}
        </span>
      </button>
    </div>

  )
}

export default ContactButton