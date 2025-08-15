import styles from './whatwedid.module.css'
import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import TertiaryTitle from '@/app/ui/TertiaryTitle/TertiaryTitle'
import ProjectList from './components/ProjectList/ProjectList'

const WhatWeDid = () => {
  return (
    <section id='projects' className={`${styles.sectionContainer}`}>
      <div className="container">
        <TitleContainer miniTitle='WHAT WE DID' title='SUCCESS STORIES'>
          <strong> Our portfolio speaks for itself.</strong> We don’t just design — we deliver. From websites that drive real growth to branding and videos that make people stop and pay attention, our work gets results you can see. Sales go up. Bookings increase. Brands get noticed. Simple as that.
        </TitleContainer>
        <ProjectList />

        <TertiaryTitle color='#222'><span className="purple">Just True Stories.</span> Designed with authenticity and a fresh perspective. </TertiaryTitle>
      </div>
    </section>
  )
}

export default WhatWeDid