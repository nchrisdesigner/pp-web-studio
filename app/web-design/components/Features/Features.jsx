import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './features.module.css'


const data = [
  {
    id:1,
    title: 'Global Accessibility',
    desc: 'Allows your business to be accessible to potential customers worldwide, breaking down geographical barriers and expanding your market reach beyond local boundaries.'
  },
  {
    id:2,
    title: '24/7 Availability',
    desc: 'Additionally, it provides a constant platform where customers can learn about your products or services, make inquiries, and even make purchases day or night.'
  },
  {
    id:3,
    title: 'Enhanced Credibility and Branding',
    desc: 'On top of that, a well-designed website adds credibility and professionalism in its own right.'
  },
  {
    id:4 ,
    title: 'Cost-Effective Marketing',
    desc: 'Furthermore, websites provide ways of advertising businesses at low rates as compared to traditional methods like print ads or direct mails. '
  },
]

const Features = () => {
  return (
    <section className={styles.sectionContainer}>
    <div className={`container`}>
      <TitleContainer color="white" align="center" miniTitle="YOUR 24/7 BUSINESS AMBASSADOR" title="INVESTING IN A WEBSITE IS NON-NEGOTIABLE">
        This will be the first impression created on potential customers as well as a very effective tool for converting new visitors into clients who become loyal through time - <span className="bold-text">and you can’t fail.</span>
      </TitleContainer>

      <div className={styles.features}>
        <div className={styles.featuresContainer}>
          {data.map(({id, title, desc}, index) => {
            return(
              <div key={id} className={styles.feature}>
                <span>{id}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            )
          })}
        </div>
      </div>

    </div>

  </section>
  )
}

export default Features