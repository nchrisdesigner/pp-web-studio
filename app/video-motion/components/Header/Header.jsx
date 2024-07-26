import styles from './header.module.css'
import Image from 'next/image'
import packageImage from '@/app/assets/package.png'
import SecondaryTitle from '@/app/ui/SecondaryTitle/SecondaryTitle'
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <div className={styles.textContainer}>
        <SecondaryTitle>what other people say about you </SecondaryTitle>
        <h2 className={`${anton.className} ${styles.title}`}>YOUR ONLINE SIGNATURE</h2>
        <p className={styles.paragraph}>Having strong branding is essential for businesses as it serves as the foundation upon which trust, recognition, and loyalty are built. A well-crafted brand identity communicates your company's story, values and mission. <span className="bold-text"> It distinguishes you from competitors,</span> helping you to stand out in a crowded marketplace.</p>
      </div>
      <figure className={styles.imageContainer}>
        <Image className={styles.image} src={packageImage} alt='Hero image that shows a package' />
      </figure>
    </header>
  )
}

export default Header