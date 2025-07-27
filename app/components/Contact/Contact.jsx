import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './contact.module.css'
import HoverButton from '@/app/ui/Buttons/HoverButton/HoverButton'

const Contact = () => {
  return (
    <section className={`${styles.sectionContainer}`}>
      <div className="container">

        <TitleContainer align='center' miniTitle='WHAT WE WILL DO' title='YOUR JOURNEY STARTS HERE'>
          We believe in simplicity and meaningful dialogues where great ideas emerge from conversations, not checkboxes. Your unique story deserves a human touch - it’s not just a project, but a collaborative journey.
        </TitleContainer>

        <HoverButton />
      </div>

    </section>
  )
}

export default Contact