import localFont from 'next/font/local'
import styles from './letter.module.css'

const myFont = localFont({
  src: './Unaessthetic.ttf',
  display: 'swap',
})

const Letter = ({children, textSize, color = '#5e5cd6'}) => {
  return (
    <span 
    style={{color:color}}
    className={`${styles.letter} ${myFont.className} ${styles[textSize]}` }>
      {children}
    </span>
  )
}

export default Letter