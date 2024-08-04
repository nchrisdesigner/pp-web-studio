import styles from './tellyourstory.module.css'
import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'

const TellYourStory = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className='container'>
        <TitleContainer align='center' miniTitle='SHARE YOUR JOURNEY  TO THE WORLD' title='TELL YOUR STORY'>
          <span className="bold-text">Your story is unique.</span> Share it openly and authentically, not only to inform but also to inspire your audience. Embrace the opportunity to tell your story to the world and leave a lasting impression and a positive impact on those who listen.
        </TitleContainer>
      </div>

    </section>
  )
}

export default TellYourStory