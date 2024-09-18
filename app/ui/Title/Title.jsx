import styles from './title.module.css'
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const Title = ({ children, color, align }) => {
  return (
    <h2
      style={
        align === 'center' 
        ?
        {
          margin: '0 auto',
          color: `var(--${color})`,
          textAlign: `${align}`
        }
        :
        {
          color: `var(--${color})`,
          textAlign: `${align}`
        }
      } className={`${anton.className} ${styles.title}`}>{children}</h2>
  )
}

export default Title
