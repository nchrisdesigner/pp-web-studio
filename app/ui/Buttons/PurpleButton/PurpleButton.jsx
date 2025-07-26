'use client'

import styles from './purplebutton.module.css'
import { MdBolt } from "react-icons/md";

const PurpleButton = ({ children }) => {

  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <MdBolt />
      </span>
      <span className={styles.title}>
        {children}
      </span>

    </button>
  )
}

export default PurpleButton