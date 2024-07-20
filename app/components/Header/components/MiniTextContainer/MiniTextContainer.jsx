import Image from 'next/image'
import dream from './../../../../assets/mini-icons/dream.png'
import design from './../../../../assets/mini-icons/design.png'
import show from './../../../../assets/mini-icons/show.png'

import styles from './minitextcontainer.module.css'

const data = [
  {
      title: 'Dream It',
      desc: 'Think big and imagine what you want.',
      icon: dream
  },
  {
      title: 'Design It',
      desc: 'Time to turn your idea into a real thing.',
      icon: design
  },
  {
      title: 'Show It',
      desc: 'Let your idea shine everywhere it matters.',
      icon: show
  },
]

const MiniTextContainer = () => {
  return (
    <div className={styles.container}>
    {data.map(({title, desc, icon}, index) => {
      return (
        <div className={styles.item}>
          <h3 className={styles.title}>
          <Image src={icon} alt='icon' />
            {title}
            </h3>
          <p className={styles.text}>{desc}</p>
        </div>
      )
    })}
  </div>
  )
}

export default MiniTextContainer