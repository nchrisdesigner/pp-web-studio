'use client'
import styles from './altmenu.module.css'
import MenuContext from '@/app/context/context'
import { useContext } from 'react'
import { motion } from "motion/react"
import MenuButton from '@/app/ui/Buttons/MenuButton/MenuButton'
import PixelPerfektExplain from '@/app/ui/PixelPerfektExplain/PixelPerfektExplain'
import TransitionLink from './components/TransitionLink/TransitionLink'
import { navigationLinks } from '@/app/data/data'

const AltMenu = () => {
  const { setOpenMenu } = useContext(MenuContext);

  return (

    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{ opacity: 0 }}
      className={styles.menuContainer}>
      <div className={styles.container}>
        <div className={styles.menuButtonContainer}>
          <MenuButton onClick={() => setOpenMenu(false)}>CLOSE</MenuButton>
        </div>
        <div className={styles.gridContainer}>
          <nav className={styles.linkContainer}>
            {navigationLinks.map(({ id, href, title, identity }) => (
              <motion.span key={id}>
                <TransitionLink
                  href={href}
                >
                  <motion.span className={` ${styles.outlineText} ${styles[identity]}`}>{title}</motion.span>
                </TransitionLink>
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





{/* <nav className={styles.linkContainer}>
{links.map(({ id, href, title, identity }) => (
  <motion.span key={id}>
    <Link
      className={`${styles.link} ${anton.className}`}
      href={href}
      onClick={() => setOpenMenu(false)}
    >
      <motion.span className={` ${styles.outlineText} ${styles[identity]}`}>{title}</motion.span>
    </Link>
  </motion.span>
))}
</nav> */}