import styles from './whoweare.module.css'
import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io";
import TitleContainer from '@/app/ui/TitleContainer/TitleContainer';


const data = [
  {
    id: 1,
    title: 'Co-Creation Approach',
    text: 'Your dreams are at the core of what we do. We listen intently to your ideas, ensuring that your vision guides every step of our creative process.'
  },
  {
    id: 2,
    title: 'Precision in Every Pixel',
    text: 'Every detail matters. We meticulously design every pixel to achieve your goals with the precision your brand deserves.'
  },
  {
    id: 3,
    title: 'Future-Proof Creativity',
    text: 'We design with an eye on the future. Our designs not only meet today’s standards but also anticipate tomorrow’s trends.'
  },
]

const WhoWeAre = () => {
  return (
    <section className={` container ${styles.gridContainer}`}>

      <TitleContainer align='left' miniTitle='WHO WE ARE' title='CREATIVE THINKERS, PROBLEM SOLVERS, GAME CHANGERS'>
        At PixelPerfekt, each pixel has its story. Therefore we are not just web design agency but rather a creative center where we focus on materializing all those digital concepts you have got. As brand architects, we meticulously construct digital presences <span className="bold-text">that reflect your core values and ambitions.</span>
      </TitleContainer>

      <div className={styles.principlesContainer}>
        <h3>WE ARE GUIDED BY THREE MAJOR PRINCIPLES</h3>
        <div className={styles.principleContainer}>
          {data.map(({ id, title, text }) => {
            return (
              <div className={styles.principle} key={id}>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            )
          })}
        </div>
      </div>

      <Link className={styles.btn} href="#">Learn More <IoIosArrowRoundForward className={styles.icon} /></Link>
    </section>
  )
}

export default WhoWeAre