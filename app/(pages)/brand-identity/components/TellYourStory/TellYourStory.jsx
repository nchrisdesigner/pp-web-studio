import { benefitsOfBranding } from '@/app/data/data'
import styles from './tellyourstory.module.css'
import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import { ImCheckmark2 } from 'react-icons/im'
import PromiseTitle from '@/app/ui/PromiseTitle/PromiseTitle'

const TellYourStory = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className='container'>
        <h3 className={styles.absoluteTitle}>SHARE YOUR JOURNEY TO THE WORLD</h3>
        <TitleContainer align='center' miniTitle='SHARE YOUR JOURNEY TO THE WORLD' title='TELL YOUR STORY'>
          <span className="bold-text">Your story is unique.</span> Share it openly and authentically, not only to inform but also to inspire your audience. Embrace the opportunity to tell your story to the world and leave a lasting impression and a positive impact on those who listen.
        </TitleContainer>

        <div className={styles.benefitsContainer}>
          <h3 className={styles.benefitContainerTitle}>The benefits of a strong Brand Identity</h3>
          <div className={styles.benefits}>
            {benefitsOfBranding.map((benefit, index) => {
              const { id, title, text } = benefit;
              return (
                <div className={styles.benefit} key={id}>
                  <h4><ImCheckmark2 style={{ color: 'var(--green)', fontSize: '2rem' }} />{title}</h4>
                  {/* <p>{text}</p> */}
                </div>
              )
            })}
          </div>

          {/* <div className={styles.relativeContainer}> */}
            <div className={styles.animatePromiseTitle}>
              <PromiseTitle color='purple'>
                Ready to Build Your Brand?
              </PromiseTitle>
            </div>
            {/* <div className={styles.animatePromiseTitleTwo}>
              <PromiseTitle color='purple'>
                Ready to Build Your Brand?
              </PromiseTitle>
            </div> */}
          </div>
        {/* </div> */}


      </div>


    </section>
  )
}

export default TellYourStory