import Header from './components/Header/Header'
import InfoSection from './components/InfoSection/InfoSection'
import Pricing from './components/Pricing/Pricing'

export const metadata = {
  title: 'Professional Animation Videos | PixelPerfekt Studio',
  description: 'Your brand has a story—let’s set it in motion. We design fun, engaging videos that explain, entertain, and connect. From explainer videos to branded motion content, we help you deliver your message with style and purpose.',
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