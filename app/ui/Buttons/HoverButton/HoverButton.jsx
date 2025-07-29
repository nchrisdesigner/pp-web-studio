

import styles from './hoverbutton.module.css'
import { PiCopy } from "react-icons/pi"
import { ImCheckmark2 } from "react-icons/im"
import Letter from "../../Letter/Letter"
import Link from 'next/link'

const HoverButton = () => {

  return (
    <>
      <div className={styles.hovermeTextContainer}>
        <h4 className={styles.hovermeText}>(Hover Me)</h4>
      </div>

      <div className={styles.buttonContainer}>
        <Link href='#' className={styles.button}>
          
          <div className={styles.icon}>
            <span className={`${styles.textIcon} ${styles.hide}`}>Visual Trigger</span>
            <span>  
            <span><ImCheckmark2 /></span>
            </span>
          </div>

          <span className={styles.title}>
                  Kopy email
            <span>
            </span>
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
        </Link>
      </div>
    </>
  )
}

export default HoverButton