import styles from './header.module.css'
import PrimaryTitle from './components/PrimaryTitle/PrimaryTitle'
import MiniTextContainer from './components/MiniTextContainer/MiniTextContainer'
import Location from './components/Location/Location'
import SecondaryTitle from '@/app/ui/SecondaryTitle/SecondaryTitle'

const Header = () => {
  return (
    <header className={`${styles.headerContainer} container`}>

      <div>
        <SecondaryTitle>WE DON'T JUST DESIGN WEBSITES</SecondaryTitle>
        <PrimaryTitle />
        <div className={styles.flexContainer}>
          <MiniTextContainer />
          <Location />
        </div>
      </div>

    </header>
  )
}

export default Header