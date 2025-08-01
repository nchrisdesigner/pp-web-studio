import { benefitsOfBranding } from '@/app/data/data'
import styles from './tellyourstory.module.css'
import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import { ImCheckmark2 } from 'react-icons/im'
import TertiaryTitle from '@/app/ui/TertiaryTitle/TertiaryTitle'

const TellYourStory = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className='container'>
        {/* <h3 className={styles.absoluteTitle}>YOUR STORY IS UNIQUE</h3> */}
        {/* <h3 className={styles.absoluteTitle}>DESIGNED TO LAST</h3> */}
        <TitleContainer align='center' miniTitle='DESIGNED TO LAST' title='YOUR BRAND DESERVES TO BE REMEMBERED'>
          <strong>Your story is unique — your brand should reflect that.</strong> It’s more than just a logo. It starts with the smallest details: the curves of a letter, the spacing between lines, the colors that define your presence. Every detail works together to show who you are and what you do. That’s the power of intentional design.
        </TitleContainer>

        {/* <div className={styles.benefitsContainer}>
          <h3 className={styles.benefitContainerTitle}>The benefits of a strong Brand Identity</h3>
          <div className={styles.benefits}>
            {benefitsOfBranding.map((benefit, index) => {
              const { id, title, text } = benefit;
              return (
                <div className={styles.benefit} key={id}>
                  <h4><ImCheckmark2 style={{ color: 'var(--green)', fontSize: '2rem' }} />{title}</h4>
                  <p>{text}</p>
                </div>
              )
            })}
          </div>

        </div> */}
          <TertiaryTitle color='#111' align='center'>
            We don’t decorate — <span className="purple">we design with purpose.</span>
          </TertiaryTitle>

      </div>
    </section>
  )
}

export default TellYourStory