import styles from './contact.module.css'
import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import ContactButton from '@/app/ui/Buttons/ContactButton/ContactButton'
import AnimatedParagraph from '@/app/ui/TextComponents/AnimatedParagraph/AnimatedParagraph'
import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import Title from '@/app/ui/Title/Title'
import { Anton } from 'next/font/google'

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
})

const Contact = () => {

  return (
    <section className={`${styles.sectionContainer}`}>
      <div className="container">

        <div className={`${styles.titleContainer}`}>
          <MiniTitle>WHY WAIT ?</MiniTitle>
          <h2 className={`${styles.title} ${anton.className}`} color='#111' align='center' >STOP BEING AVERAGE</h2>
           <AnimatedParagraph>
          We believe in simplicity and meaningful dialogues because the best ideas don’t come from checkboxes, they come from honest conversations. <strong> Your unique story deserves a human touch</strong> - it’s not just a project, but a collaborative journey.
          </AnimatedParagraph>
        </div>



        {/* <TitleContainer align='center' miniTitle='WHY WAIT ?' title='STOP BEING AVERAGE'>

          We believe in simplicity and meaningful dialogues because the best ideas don’t come from checkboxes, they come from honest conversations. <strong> Your unique story deserves a human touch</strong> - it’s not just a project, but a collaborative journey.

        </TitleContainer> */}
        <ContactButton />
      </div>

    </section>
  )
}

export default Contact