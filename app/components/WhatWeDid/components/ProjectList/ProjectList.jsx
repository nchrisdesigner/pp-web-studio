import styles from './projectlist.module.css'
import Project from '../Project/Project'
import { projects } from '@/app/data/data'

const ProjectList = () => {
  return (
    <div className={styles.projectsContainer}>
      {projects.map((project) => {
        return (
          <div key={project.id} className={styles.projectContainer}>
            <Project  {...project} />
          </div>
        )
      })}
    </div>
  )
}

export default ProjectList