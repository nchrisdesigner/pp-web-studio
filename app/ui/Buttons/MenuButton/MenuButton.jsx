import { Anton } from 'next/font/google'
import styles from './menubutton.module.css'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const MenuButton = ({children, onClick}) => {
  return (
    <button onClick={onClick} className={`${anton.className} ${styles.menuButton}`}>{children}</button>
  )
}

export default MenuButton