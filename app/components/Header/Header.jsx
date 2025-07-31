import styles from './header.module.css'
import PrimaryTitle from './components/PrimaryTitle/PrimaryTitle'
import SecondaryTitle from '@/app/ui/SecondaryTitle/SecondaryTitle'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      {/* <section> */}
        <div>
          <SecondaryTitle color='white' align='center' >WE DON'T JUST DESIGN WEBSITES</SecondaryTitle>
          <PrimaryTitle />
        </div>
      {/* </section> */}

    </header>
  )
}

export default Header