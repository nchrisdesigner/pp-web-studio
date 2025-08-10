
import styles from './tellyourstory.module.css'
import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import TertiaryTitle from '@/app/ui/TertiaryTitle/TertiaryTitle'
import Pantone from '@/app/ui/Pantone/Pantone'
import MiniTitle from '@/app/ui/MiniTitle/MiniTitle'
import Title from '@/app/ui/Title/Title'
import Paragraph from '@/app/ui/Paragraph/Paragraph'


const pantones = [
  {
    id: 1,
    color: '#fd5021',
    title: 'Coquelicot',
    top: '-6%',
    left: '32%',
    rotation: '-17deg'
  },
  {
    id: 2,
    color: '#034c3c',
    title: 'Brunswick',
    top: '-12%',
    left: '40%',
    rotation: '-8deg'
  },
  {
    id: 3,
    color: '#6432ae',
    title: 'Tekhelet',
    top: '-16%',
    left: '48%',
    rotation: '1deg'
  },
  {
    id: 4,
    color: '#fcc222',
    title: 'Sunglow',
    top: '-12%',
    left: '56%',
    rotation: '10deg'
  },
  {
    id: 5,
    color: '#ce2d4f',
    title: 'Raspberry',
    top: '-7%',
    left: '64%',
    rotation: '8deg'
  },
]

const TellYourStory = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className='container'>
        {/* {pantones.map((pantone) => {
          return (
            <Pantone key={pantone.id} {...pantone} />
          )
        })} */}

        {/* <TitleContainer align='center' miniTitle='DESIGNED TO LAST' title='YOUR BRAND DESERVES TO BE REMEMBERED'>
          <strong>Your story is unique — your brand should reflect that.</strong> It’s more than just a logo. It starts with the smallest details: the curves of a letter, the spacing between lines, the colors that define your presence. Every detail works together to show who you are and what you do. That’s the power of intentional design.
        </TitleContainer> */}

        <div>
          <MiniTitle align='center'>DESIGNED TO LAST</MiniTitle>
          <Title color='#111111' align='center' >
            YOUR BRAND DESERVES TO BE&nbsp;
            <span className='relative'>REMEMBERED
              <span className={styles.xHeight}>X-HEIGHT</span>
            </span>

          </Title>
          <Paragraph align='center' color='#222222' >
            <strong>Your story is unique — your brand should reflect that.</strong> It’s more than just a logo. It starts with the smallest details: the curves of a letter, the spacing between lines, the colors that define your presence. Every detail works together to show who you are and what you do. That’s the power of intentional design.
          </Paragraph>
        </div>


        <TertiaryTitle color='#111' align='center'>
          We don’t decorate — <span className="purple">we design with purpose.</span>
        </TertiaryTitle>

      </div>
    </section>
  )
}

export default TellYourStory