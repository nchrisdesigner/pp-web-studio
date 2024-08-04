import styles from './header.module.css'
import PrimaryTitle from './components/PrimaryTitle/PrimaryTitle'
import MiniTextContainer from './components/MiniTextContainer/MiniTextContainer'
import Location from './components/Location/Location'
import SecondaryTitle from '@/app/ui/SecondaryTitle/SecondaryTitle'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      
    <section className={`${styles.sectionContainer} container`}>
      <div>
        <SecondaryTitle color='white' >WE DON'T JUST DESIGN WEBSITES</SecondaryTitle>
        <PrimaryTitle />
        <div className={styles.flexContainer}>
          <MiniTextContainer />
          <Location />
        </div>
      </div>

    </section>
    </header>
  )
}

export default Header