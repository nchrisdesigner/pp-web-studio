import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './contact.module.css'
import ContactButton from '@/app/ui/Buttons/ContactButton/ContactButton'

const Contact = () => {
  return (
    <section className={`${styles.sectionContainer}`}>
      <div className="container">

        <TitleContainer align='center' miniTitle='WHAT WE WILL DO' title='ONE STEP AWAY FROM AVERAGE'>
          We believe in simplicity and meaningful dialogues because the best ideas don’t come from checkboxes, they come from honest conversations. <span className="bold-text"> Your unique story deserves a human touch</span> - it’s not just a project, but a collaborative journey.
        </TitleContainer>

        <ContactButton />

      </div>

    </section>
  )
}

export default Contact