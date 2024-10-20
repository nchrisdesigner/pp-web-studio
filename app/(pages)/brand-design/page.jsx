import Header from './components/Header/Header'
import Pricing from './components/Pricing/Pricing'
import TellYourStory from './components/TellYourStory/TellYourStory'
import AnimatedText from './components/AnimatedText/AnimatedText'
import TheRealMVP from '@/app/components/TheRealMVP/TheRealMVP'

const VideoMotionPage = () => {
  return (
    <>
      <Header />
      <TellYourStory />
      <TheRealMVP />
      <Pricing />
      <AnimatedText />
    </>
  )
}

export default VideoMotionPage