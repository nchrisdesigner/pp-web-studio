'use client'
import { useState } from "react"
import styles from './hoverbutton.module.css'
import { PiCopy } from "react-icons/pi"
import { ImCheckmark2 } from "react-icons/im"
import Letter from "../Letter/Letter"

const HoverButton = () => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('nchrisdeveloper@gmail.com')
    setIsCopied(true)
  }
  return (
    <>
      {/* <div className={`text-center mx-auto`}> */}
      <p className={styles.miniTitle}>You are one step away from being average</p>
      <div className={styles.hovermeTextContainer}>
        <h4 className={styles.hovermeText}>(Hover Me)</h4>
      </div>


      <div className={styles.buttonContainer}>

        <button onClick={handleCopy} className={styles.button}>

          <div className={styles.icon}>
            <span className={`${styles.textIcon} ${styles.hide}`}>Visual Trigger</span>
            <span>

              {isCopied ? <ImCheckmark2 /> : <PiCopy />}
            </span>
          </div>

          <span className={styles.title}>
            {isCopied
              ?
              (<>
                Email <Letter>k</Letter>opied
              </>)
              :
              (<>
                <Letter>k</Letter>opy email
              </>)}

          </span>

          <div className={`${styles.paddingLeft} ${styles.hide}`}>
            <div className={styles.paddingLeftLine}>
              <span className={styles.paddingLeftText}>Breathing Room / Left</span>
            </div>
          </div>

          <div className={`${styles.paddingRight} ${styles.hide}`}>
            <div className={styles.paddingRightLine}>
              <span className={styles.paddingRightText}>Breathing Room / Right</span>
            </div>
          </div>

          <div className={`${styles.background} ${styles.hide}`} >
            <span className={styles.backgroundText}>Color Flow</span>
          </div>

          <div className={`${styles.border} ${styles.hide}`}>
            <span className={styles.borderText} >Smooth Corners</span>
          </div>
        </button>
      </div>
    </>
  )
}

export default HoverButton