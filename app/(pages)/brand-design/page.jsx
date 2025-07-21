import Header from './components/Header/Header'
import Pricing from './components/Pricing/Pricing'
import TellYourStory from './components/TellYourStory/TellYourStory'
import AnimatedText from './components/AnimatedText/AnimatedText'
import TheRealMVP from '@/app/components/TheRealMVP/TheRealMVP'
import AnimatedSection from './components/AnimatedSection/AnimatedSection'
import RotatingSection from './components/RotatingSection/RotatingSection'


export const metadata = {
  title: 'Creative Brand Design Services | PixelPerfekt Web Design Studio',
  description: 'Build a powerful brand identity with PixelPerfekt\'s brand design services. Our team specializes in logo design, brand color palettes, typography, and cohesive brand guidelines that reflect your vision. Stand out in your industry with a unique and memorable brand designed to engage and connect with your audience.',
}

const VideoMotionPage = () => {
  return (
    <>
      <Header />
      <TellYourStory />
      <TheRealMVP />
      <Pricing />
      <AnimatedSection />
      {/* <RotatingSection /> */}
    </>
  )
}

export default VideoMotionPage