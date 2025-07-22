import Benefits from './components/Benefits/Benefits'
import Features from './components/Features/Features'
import Hero from './components/Hero/Hero'
import Intro from './components/Intro/Intro'
import Pricing from './components/Pricing/Pricing'

export const metadata = {
  title: 'Professional Web Design Services | PixelPerfekt Web Design Studio',
  description: 'Discover top-tier web design services at PixelPerfekt, where we create stunning, responsive websites tailored to your brand. From UX/UI design and custom development to SEO optimization, our web design team crafts sites that captivate audiences and drive conversions. Elevate your online presence with our expert design solutions.',
}

const WebDesignPage = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Features />
      <Benefits />
      <Pricing />
    </>
  )
}

export default WebDesignPage