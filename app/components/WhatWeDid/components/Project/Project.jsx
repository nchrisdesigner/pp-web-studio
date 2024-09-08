import styles from './project.module.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image'
import Link from 'next/link'
import Tag from '../Tag/Tag';

const Project = ({ id, title, subtitle, desc, url, logo, tags }) => {
  return (
    <div key={id} className={styles.project}>
      <figure className={styles.imageContainer}>
        <div className={styles.tagContainer}>
          {tags.map((tag, index) => (<Tag key={index} tag={tag} />))}
        </div>
        <Image className={styles.image} src={logo} alt='Project Logo' />
      </figure>
      <div className={styles.textContainer}>

        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{desc}</p>
        {
          url !== ''
          &&
          <Link href={url}>
            <span className={styles.visitLink} >
              Visit Site <IoIosArrowRoundForward className={styles.icon} />
            </span>
          </Link>

        }

      </div>
    </div>
  )
}

export default Project