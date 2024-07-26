import styles from './title.module.css'
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const Title = ({children, color}) => {
  return (
    <h2 style={{color: `var(--${color})`}} className={`${anton.className} ${styles.title}`}>{children}</h2>
  )
}

export default Title