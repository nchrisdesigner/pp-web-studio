import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './whatwedid.module.css'
import { projects } from '@/app/data/data';
import Project from './components/Project/Project';

const WhatWeDid = () => {
  return (
    <section className="container">
      <TitleContainer miniTitle='WHAT WE DID' title='SUCCESS STORIES'>
        <span className='bold-text'>Our portfolio speaks for itself.</span> We create web experiences that converts, brand identities with strong impact and video motions that grip guys on their seats. Whether it's an e-commerce platform that boosts sales by 300%, a rebranding initiative that enhances client acquisition by 40%, or a series of promotional videos that drive a 28% increase in reservations, our projects deliver measurable success.
      </TitleContainer>

      <div className={styles.projects}>
        <div className={styles.projectsContainer}>
          {projects.map((project) => {
            return (
              <Project key={project.id} {...project} />
            )
          })}
        </div>
      </div>
      <h4 className={styles.miniTitle}>For us, <span className='bold-text purple'>your project</span> represents another chapter in our story as we continue pursuing excellence.</h4>
    </section>
  )
}

export default WhatWeDid