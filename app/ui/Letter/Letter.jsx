import localFont from 'next/font/local'
import styles from './letter.module.css'

const myFont = localFont({
  src: './Unaessthetic.ttf',
  display: 'swap',
})

const Letter = ({children, textSize}) => {
  return (
    <span 
    className={`${styles.letter} 
    ${myFont.className} ${styles[textSize]}` }>{children}</span>
  )
}

export default Letter