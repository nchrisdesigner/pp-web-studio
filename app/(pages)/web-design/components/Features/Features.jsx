import TitleContainer from '@/app/ui/TitleContainer/TitleContainer'
import styles from './features.module.css'
import { webDesignFeatures } from '@/app/data/data'
import PromiseTitle from '@/app/ui/PromiseTitle/PromiseTitle'

const Features = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={`container`}>
        <TitleContainer color="white" align="center" miniTitle="YOUR 24/7 BUSINESS AMBASSADOR" title="INVESTING IN A WEBSITE IS NON-NEGOTIABLE" >
          This will be the first impression created on potential customers as well as a very effective tool for converting new visitors into clients who become loyal through time - <span className="bold-text">and you can’t fail.</span>
        </TitleContainer>

        <div className={styles.features}>
          <div className={styles.featuresContainer}>
            {webDesignFeatures.map(({ id, title, desc }) => {
              return (
                <div key={id} className={styles.feature}>
                  <span>{id}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className={styles.animatedTitle}>
          <PromiseTitle color='white'>
            Let your website tell your story — <span className="yellow underline-text bold-text">without saying a word.</span>
          </PromiseTitle>
        </div>
      </div>


    </section>
  )
}

export default Features