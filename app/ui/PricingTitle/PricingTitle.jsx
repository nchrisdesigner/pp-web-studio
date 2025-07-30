import styles from './pricingtitle.module.css'

import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const PricingTitle = ({children, color}) => {
  return (
    <h2 style={{color: `var(--${color})`}} className={`${styles.title} ${anton.className}`}>{children}</h2>
  )
}

export default PricingTitle