import styles from './tellyourstory.module.css'
import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'

const TellYourStory = () => {
  return (
    <section className={`container ${styles.sectionContainer}`}>
      <TitleContainer align='center' miniTitle='SHARE YOUR JOURNEY  TO THE WORLD' title='TELL YOUR STORY'>
      <span className="bold-text">Your story is unique.</span> Share it openly and authentically, not only to inform but also to inspire your audience. Embrace the opportunity to tell your story to the world and leave a lasting impression and a positive impact on those who listen.
      </TitleContainer>
    </section>
  )
}

export default TellYourStory