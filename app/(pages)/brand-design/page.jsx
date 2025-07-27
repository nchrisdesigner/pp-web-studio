import Header from './components/Header/Header'
import Pricing from './components/Pricing/Pricing'
import TellYourStory from './components/TellYourStory/TellYourStory'
import TheRealMVP from '@/app/components/TheRealMVP/TheRealMVP'
import AnimatedSection from './components/AnimatedSection/AnimatedSection'


export const metadata = {
  title: 'Brand Identity & Logo Design | PixelPerfekt Studio',
  description: 'Your brand is more than visuals—it’s how people feel when they see you. We design thoughtful logos, type, and color systems that reflect your story with clarity and emotion. Identity, with authenticity and personality.',
}

const VideoMotionPage = () => {
  return (
    <>
      <Header />
      <TellYourStory />
      <TheRealMVP />
      <Pricing />
      <AnimatedSection />
    </>
  )
}

export default VideoMotionPage