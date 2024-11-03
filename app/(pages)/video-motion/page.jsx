import Header from './components/Header/Header'
import InfoSection from './components/InfoSection/InfoSection'
import Pricing from './components/Pricing/Pricing'

export const metadata = {
  title: 'Engaging Animation Videos | PixelPerfekt Web Design Studio',
  description: 'Bring your brand to life with PixelPerfekt’s animation video services. From explainer videos to social media animations, we create visually compelling stories that capture attention and communicate your message effectively. Transform your brand presence with animations that resonate and engage.',
}

const VideoMotionPage = () => {
  return (
    <>
      <Header />
      <InfoSection />
      <Pricing />
    </>
  )
}

export default VideoMotionPage