'use client'
import styles from './menu.module.css'
import Link from 'next/link'
import { Anton } from 'next/font/google'
import MenuContext from '@/app/context/context'
import { useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import MenuButton from '@/app/ui/MenuButton/MenuButton'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const links = [
  {
    id: 1,
    href: '/web-design',
    titleOne: 'Web ',
    titleTwo: 'Design',
  },
  {
    id: 2,
    href: '/brand-identity',
    titleOne: 'Brand ',
    titleTwo: 'Identity',
  },
  {
    id: 3,
    href: '/video-motion',
    titleOne: 'Video ',
    titleTwo: 'Motion',
  },
]


const Menu = () => {
  const { openMenu, setOpenMenu } = useContext(MenuContext);

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [openMenu]);

  return (
    <section className={styles.menuContainer}>
      <div className={styles.container}>
        <div className={styles.menuButtonContainer}>
          <MenuButton onClick={() => setOpenMenu(false)}>CLOSE</MenuButton>
        </div>
        <div className={styles.gridContainer}>
          <nav className={styles.linkContainer}>
            {links.map(({ id, href, titleOne, titleTwo }) => (
              <motion.div key={id}>
                <Link
                  className={`${styles.link} ${anton.className}`}
                  href={href}
                  onClick={() => setOpenMenu(false)}
                >
                  <span className={styles.titleElement}>{titleOne}</span>
                  <span className={styles.titleElement}>{titleTwo}</span>
                  <motion.div className={styles.absoluteBlurElement}></motion.div>
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className={styles.textContainer}>
            <h2>We don't design boring stuff.</h2>
            <h2>Promise</h2>
            <Link href="/" className={styles.successStoriesLink}>
              Check some success stories
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Menu;





