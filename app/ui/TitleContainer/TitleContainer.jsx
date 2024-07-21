import styles from './titlecontainer.module.css'
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const TitleContainer = ({miniTitle, title, align, children}) => {
  return (
    <div style={{ textAlign:align}} className={`${styles.titleContainer}`}>
        <h3>{miniTitle}</h3>
        <h2 className={`${anton.className}`}>
          {title}
        </h2>
        <p style={align === 'center' ? {margin: '0 auto'} : {}}>{children}</p>
      </div>
  )
}

export default TitleContainer