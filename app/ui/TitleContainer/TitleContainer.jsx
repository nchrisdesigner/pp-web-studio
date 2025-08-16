import MiniTitle from '../MiniTitle/MiniTitle'
import Paragraph from '../TextComponents/Paragraph/Paragraph'
import Title from '../Title/Title'
import styles from './titlecontainer.module.css'

const TitleContainer = ({ miniTitle, color, title, align, children }) => {
  return (
    <div style={{ textAlign: align }} className={`${styles.titleContainer}`}>
      <MiniTitle>{miniTitle}</MiniTitle>
      <Title color={color} align={align} style={{ color: `var(--${color})` }}>{title}</Title>
      <Paragraph align={align} color={color} >
        {children}</Paragraph>
    </div>
  )
}

export default TitleContainer