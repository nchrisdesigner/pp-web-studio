'use client'
import styles from './altmenu.module.css'
import Link from 'next/link'
import { Anton } from 'next/font/google'
import MenuContext from '@/app/context/context'
import { useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import MenuButton from '@/app/ui/MenuButton/MenuButton'
import PixelPerfektExplain from '@/app/ui/PixelPerfektExplain/PixelPerfektExplain'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const links = [
  {
    id: 1,
    href: '/web-design',
    title: 'Web Design',
    identity: 'webDesign'
  },
  {
    id: 2,
    href: '/brand-identity',
    title: 'Brand Identity',
    identity: 'brandIdentity'
  },
  {
    id: 3,
    href: '/video-motion',
    title: 'Video Motion',
    identity: 'videoMotion'
  },
]


const AltMenu = () => {
  const { openMenu, setOpenMenu } = useContext(MenuContext);

  return (

      <motion.section
        initial={{
          opacity: 0,
          // x: '100%'
        }}
        animate={{
          opacity: 1,
          // x: 0
        }}
        exit={{ opacity: 0 }}
        className={styles.menuContainer}>
        <div className={styles.container}>
          <div className={styles.menuButtonContainer}>
            <MenuButton onClick={() => setOpenMenu(false)}>CLOSE</MenuButton>
          </div>
          <div className={styles.gridContainer}>
            <nav className={styles.linkContainer}>
              {links.map(({ id, href, title, identity }) => (
                <motion.span key={id}>
                  <Link
                    className={`${styles.link} ${anton.className}`}
                    href={href}
                    onClick={() => setOpenMenu(false)}
                  >
                    <motion.span className={` ${styles.outlineText} ${styles[identity]}`}>{title}</motion.span>
                    {/* <motion.div className={styles.absoluteBlurElement}></motion.div> */}
                  </Link>
                </motion.span>
              ))}
            </nav>
            <div className={styles.textContainer}>
              <h2>We don't design boring stuff.</h2>
              <h2>Promise.</h2>
              {/* <Link href="/" className={styles.successStoriesLink}>
              Check some success stories
            </Link> */}
              <PixelPerfektExplain />

            </div>

          </div>

        </div>
      </motion.section>


  );
};

export default AltMenu





