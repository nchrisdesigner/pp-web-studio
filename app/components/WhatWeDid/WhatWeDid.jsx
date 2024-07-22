import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './whatwedid.module.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import logo from './../../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Smart Consulting',
    subtitle: "A complete digital makeover",
    desc: 'An entire conversion of SmartConsulting was made by us. Right away from designing a modern website ,aligned to industry’s standards, to creating a unique brand identity and making an eye-cathing video, everything has been carefully optimized for their online presence.',
    url: 'https://smartconsulting.gr/',
    logo: logo
  },
  {
    id: 2,
    title: 'Kostaschris Videography',
    subtitle: "Showcasing high-tech storytelling through tradition",
    desc: 'Our primary focus in this project was designing a stunning website to showcase their exceptional videography services using state-of-the-art tools such as drones and high-end cameras, blending tradition with modern innovation in a special way.',
    url: 'https://kostaschris.gr/',
    logo: logo
  },
  {
    id: 3,
    title: 'Wodshop',
    subtitle: "Enhancing brand and e-commerce",
    desc: 'WodShop, specializing in sports nutrition supplements,  entrusted us with redesigning their website and their logo. Not only did this change enable them to better place  themselves as a brand but it also optimized their e-commerce thus  placing them in a position for more success in an increasingly  competitive sports nutrition market.',
    url: 'https://wodshop.eu/',
    logo: logo
  },
  {
    id: 4,
    title: 'Supercharge Your Skills',
    subtitle: "Enhancing brand and e-commerce",
    desc: 'WodShop, specializing in sports nutrition supplements,  entrusted us with redesigning their website and their logo. Not only did this change enable them to better place  themselves as a brand but it also optimized their e-commerce thus  placing them in a position for more success in an increasingly  competitive sports nutrition market.',
    url: 'https://wodshop.eu/',
    logo: logo
  },
]

const WhatWeDid = () => {
  return (
    <section className="container">
      <TitleContainer miniTitle='WHAT WE DID' title='SUCCESS STORIES'>
        <span className='bold-text'>Our portfolio speaks for itself.</span> We create web experiences that converts, brand identities with strong impact and video motions that grip guys on their seats. Whether it's an e-commerce platform that boosts sales by 300%, a rebranding initiative that enhances client acquisition by 40%, or a series of promotional videos that drive a 28% increase in reservations, our projects deliver measurable success.
      </TitleContainer>

      <div className={styles.projects}>
        <div className={styles.projectsContainer}>
          {projects.map(({ id, title, subtitle, desc, url, logo }, index) => {
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