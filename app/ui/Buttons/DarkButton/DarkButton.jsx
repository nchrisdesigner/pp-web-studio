import Link from 'next/link'
import styles from './darkbutton.module.css'

const DarkButton = ({ children, icon, id }) => {

    return (
      <div>
        <Link href={id} className={styles.link}>
          <span className={styles.spinner}></span>
          <span className={styles.content}>
            <span className={styles.icon} >{icon}</span>
            {children}
          </span>
        </Link>
      </div>
    )

}

export default DarkButton