import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './whatwedo.module.css'
import Letter from '@/app/ui/Letter/Letter'
import TertiaryTitle from '@/app/ui/TertiaryTitle/TertiaryTitle'
import ServiceList from './components/ServiceList/ServiceList'

const WhatWeDo = () => {

  return (
    <section className={styles.sectionContainer}>
      <div className='container'>
        <TitleContainer align='left' miniTitle='WHAT WE DO' title='WE BUILD BRANDS' color='white'>
          We build websites that refle<Letter>K</Letter>t who you are and what you stand for. <strong> <Letter>K</Letter>lear, bold, and made to mean something.</strong> From branding to motion to the way your site moves and speaks, everything we do is designed to <Letter>K</Letter>onnect with real people.
        </TitleContainer>

        <ServiceList />

        <TertiaryTitle>No <Letter>K</Letter>ookie-<Letter>K</Letter>utter solutions here. &nbsp; <span className="purple"> Every project gets our full attention</span></TertiaryTitle>
      </div>

    </section>
  )
}

export default WhatWeDo
