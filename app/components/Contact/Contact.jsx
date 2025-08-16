import styles from './contact.module.css'
import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import ContactButton from '@/app/ui/Buttons/ContactButton/ContactButton'
import AnimatedParagraph from '@/app/ui/TextComponents/AnimatedParagraph/AnimatedParagraph'

const Contact = () => {

  return (
    <section className={`${styles.sectionContainer}`}>
      <div className="container">

        <TitleContainer align='center' miniTitle='WHY WAIT ?' title='STOP BEING AVERAGE'>
          {/* <AnimatedParagraph> */}
            We believe in simplicity and meaningful dialogues because the best ideas don’t come from checkboxes, they come from honest conversations. <strong> Your unique story deserves a human touch</strong> - it’s not just a project, but a collaborative journey.
          {/* </AnimatedParagraph> */}
        </TitleContainer>
        <ContactButton />
      </div>

    </section>
  )
}

export default Contact