import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './whatwedid.module.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/app/data/data';

const WhatWeDid = () => {
  return (
    <section className="container">
      <TitleContainer miniTitle='WHAT WE DID' title='SUCCESS STORIES'>
        <span className='bold-text'>Our portfolio speaks for itself.</span> We create web experiences that converts, brand identities with strong impact and video motions that grip guys on their seats. Whether it's an e-commerce platform that boosts sales by 300%, a rebranding initiative that enhances client acquisition by 40%, or a series of promotional videos that drive a 28% increase in reservations, our projects deliver measurable success.
      </TitleContainer>

      <div className={styles.projects}>
        <div className={styles.projectsContainer}>
          {projects.map(({ id, title, subtitle, desc, url, logo }) => {
            return (
              <div key={id} className={styles.project}>
                <figure className={styles.imageContainer}>
                  <Image  className={styles.image} src={logo} alt='Project Logo' />
                </figure>
                <div className={styles.textContainer}>
                  <h2>{title}</h2>
                  <h3>{subtitle}</h3>
                  <p>{desc}</p>
                  <Link href={url}>
                    <span className={styles.visitLink} >
                      Visit Site <IoIosArrowRoundForward className={styles.icon} />
                    </span></Link>
                </div>
              </div>
            )
          })}
        </div>

      </div>



      <h4 className={styles.miniTitle}>For us, <span className='bold-text purple'>your project</span> represents another chapter in our story as we continue pursuing excellence.</h4>
    </section>
  )
}

export default WhatWeDid