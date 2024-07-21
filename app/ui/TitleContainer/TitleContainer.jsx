import styles from './titlecontainer.module.css'
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const TitleContainer = ({miniTitle, title, children}) => {
  return (
    <div className={`${styles.titleContainer}`}>
        <h3>{miniTitle}</h3>
        <h2 className={`${anton.className}`}>
          {title}
        </h2>
        <p>{children}</p>
      </div>
  )
}

export default TitleContainer