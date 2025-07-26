import Features from './components/Features/Features'
import Hero from './components/Hero/Hero'
import Intro from './components/Intro/Intro'
import Pricing from './components/Pricing/Pricing'

export const metadata = {
  title: 'Websites with Personality | PixelPerfekt Studio',
  description: 'PixelPerfekt delivers custom web design services that blend bold creativity with smart UX/UI. Our websites adapt to any screen—and every brand personality. They are designed to stand out, perform fast, and convert visitors into clients.',
}

const WebDesignPage = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Features />
      <Pricing />
    </>
  )
}

export default WebDesignPage