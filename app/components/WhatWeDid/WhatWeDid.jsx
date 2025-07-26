import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './whatwedid.module.css'
import { projects } from '@/app/data/data'
import Project from './components/Project/Project'
import SecondaryTitle from '@/app/ui/SecondaryTitle/SecondaryTitle'

const WhatWeDid = () => {
  return (
    <section className={`${styles.sectionContainer}`}>
      <div className="container">

        <TitleContainer miniTitle='WHAT WE DID' title='SUCCESS STORIES'>
          <span className='bold-text'>Our portfolio speaks for itself.</span> We don’t just design — we deliver. From websites that drive real growth to branding and videos that make people stop and pay attention, our work gets results you can see. Sales go up. Bookings increase. Brands get noticed. Simple as that.
        </TitleContainer>

        <div className={styles.projects}>
          <div className={styles.projectsContainer}>
            {projects.map((project) => {
              return (
                <div className={styles.projectContainer}>
                  <Project key={project.id} {...project} />
                </div>
              )
            })}
          </div>
        </div>

        <SecondaryTitle align='left' >
          No cookie-cutter solutions here. <span className="purple"> Every project gets our full attention</span> - designed with authenticity and a fresh perspective.
        </SecondaryTitle>

      </div>
    </section>
  )
}

export default WhatWeDid