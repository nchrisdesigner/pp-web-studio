import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './whatwedid.module.css'
import { projects } from '@/app/data/data'
import Project from './components/Project/Project'

const WhatWeDid = () => {
  return (
    <section id='projects' className={`${styles.sectionContainer}`}>
      <div className="container">

        <TitleContainer miniTitle='WHAT WE DID' title='SUCCESS STORIES'>
          <span className='bold-text'>Our portfolio speaks for itself.</span> We don’t just design — we deliver. From websites that drive real growth to branding and videos that make people stop and pay attention, our work gets results you can see. Sales go up. Bookings increase. Brands get noticed. Simple as that.
        </TitleContainer>

        <div className={styles.projects}>
          <div className={styles.projectsContainer}>
            {projects.map((project) => {
              return (
                <div key={project.id} className={styles.projectContainer}>
                  <Project  {...project} />
                </div>
              )
            })}
          </div>
        </div>

        <h3 className={styles.secondaryTitle}>
          <span className="purple">Just True Stories.</span> Designed with authenticity and a fresh perspective.
        </h3>


      </div>
    </section>
  )
}

export default WhatWeDid