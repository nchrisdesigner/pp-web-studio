import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './contact.module.css'
import ContactButton from '@/app/ui/ContactButton/ContactButton'
import HoverButton from '@/app/ui/HoverButton/HoverButton'

const Contact = () => {
  return (
    <section className={`container ${styles.sectionContainer}`}>


      <TitleContainer align='center' miniTitle='WHAT WE WILL DO' title='YOUR JOURNEY STARTS HERE'>
        We believe in simplicity and meaningful dialogues where great ideas emerge from conversations, not checkboxes. <span className="bold-text purple-highlight">Your unique story deserves a human touch</span> - it’s not just a project, but a collaborative journey.
      </TitleContainer>

      {/* <ContactButton /> */}
      <HoverButton />

    </section>
  )
}

export default Contact