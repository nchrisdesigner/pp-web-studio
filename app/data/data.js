import { SiJordan } from "react-icons/si"
import { MdOutlineBrandingWatermark } from "react-icons/md"
import { BiImage } from "react-icons/bi"
import { HiOutlineBolt } from "react-icons/hi2"
import { LuRocket } from "react-icons/lu"
import { BiShoppingBag } from "react-icons/bi"
import { BsCameraVideo } from "react-icons/bs"
import { PiDroneFill } from "react-icons/pi"
import { MdOutlineAnimation } from "react-icons/md"


import dream from '@/app/assets/mini-icons/dream.png'
import design from '@/app/assets/mini-icons/design.png'
import show from '@/app/assets/mini-icons/show.png'

import step1 from '@/app/assets/steps/step-1.png'
import step2 from '@/app/assets/steps/step-2.png'
import step3 from '@/app/assets/steps/step-3.png'
import step4 from '@/app/assets/steps/step-4.png'


import WebDesign from "../components/WhatWeDo/components/SVG/WebDesign"
import BrandIdentity from "../components/WhatWeDo/components/SVG/BrandIdentity"
import VideoMotion from "../components/WhatWeDo/components/SVG/VideoMotion"


import smartConsulting from '@/app/assets/projects/smart-consulting-logo.png'
import kostaschris from '@/app/assets/projects/kostaschris-logo.png'
import wodshop from '@/app/assets/projects/wodshop-logo.png'
import jtr from '@/app/assets/projects/jtr-logo.png'
import rway from '@/app/assets/projects/rway-logo.png'
import sys from '@/app/assets/projects/sys-logo.png'


// Home Page
export const miniText = [
  {
    id: 1,
    title: 'Dream It',
    desc: 'Think big and imagine what you want.',
    icon: dream
  },
  {
    id: 2,
    title: 'Design It',
    desc: 'Time to turn your idea into a real thing.',
    icon: design
  },
  {
    id: 3,
    title: 'Show It',
    desc: 'Let your idea shine everywhere it matters.',
    icon: show
  },
]

export const steps = [
  {
    id: 1,
    title: 'Turning Your Concepts into Champions',
    desc: 'Your vision is the blueprint for our work. We delve deep into your ideas, shaping them into extraordinary digital experiences that lead to success.',
    src: step1,
    alt: 'turning your concepts into champions'
  },
  {
    id: 2,
    title: 'Game-Changing Designs for You',
    desc: 'We blend innovation and creativity, ensuring that your project stands out with unique, game-changing elements.',
    src: step2,
    alt: 'game-changing designs for you'
  },
  {
    id: 3,
    title: 'Your Success is Our Victory',
    desc: 'Your success is the ultimate measure of our achievement. We are committed to exceeding your expectations, ensuring both our victories are aligned.',
    src: step3,
    alt: 'your success is our victory'
  },
  {
    id: 4,
    title: 'Designing MVPs in Every Industry',
    desc: 'We are always aligned on your industry standards, understanding your specific needs to make your business stand out as a top performer.',
    src: step4,
    alt: 'designing mvps in eveery industry'
  },
]

export const services = [
  {
    id: 1,
    mainTitle: 'Web Design',
    title: 'Take your online presence beyond the average',
    boldText: 'A poor website equals missed opportunities. ',
    desc: 'We blend fresh design ideas with easy-to-navigate pages, ensuring your website not only looks amazing but also works perfectly.',
    link: '/web-design',
    image: <WebDesign />
  },
  {
    id: 2,
    mainTitle: 'Brand Design',
    title: 'Break the Ordinary with Uniqueness',
    boldText: 'Bad branding weighing down your company? ',
    desc: 'We mix design principles and our original creativity with your story to take your brand to new heights.',
    link: '/brand-design',
    image: <BrandIdentity />
  },
  {
    id: 3,
    mainTitle: 'Video Motion',
    title: 'Tell your story through Motion ',
    boldText: 'Text can often be overlooked. ',
    desc: 'Bring your brand to life with video motion, transforming your message into captivating visuals and make your brand stand out.',
    link: '/video-motion',
    image: <VideoMotion />
  },
]

export const projects = [
  {
    id: 1,
    title: 'Smart Consulting',
    subtitle: "A fresh startup with almost no online presence",
    // desc: 'SmartConsulting, a startup specializing in tax and accounting services, faced challenges due to its minimal online presence. We stepped in to provide a full digital overhaul: designing a sleek, industry-standard website, creating a distinctive brand identity, and producing an engaging video. This transformation has set SmartConsulting on a path to growth.',
    desc: 'We gave them the full works — a clean, professional website, a bold new brand, and a sharp intro video that actually holds attention. Now? They\'re looking like the experts they are — and growing fast.',
    url: 'https://smartconsulting.gr/',
    logo: smartConsulting,
    tags: [
      'Logo Design',
      'Web Design',
      'Animation Video'
    ]
  },
  {
    id: 2,
    title: 'Kostaschris Videography',
    // subtitle: "Showcasing high-tech storytelling through tradition",
    subtitle: "No time for a shoot? No problem.",
    // desc: 'Our primary focus in this project was designing a stunning website to showcase their exceptional videography services using state-of-the-art tools such as drones and high-end cameras, blending tradition with modern innovation in a special way.',
    desc: 'We used AI and MidJourney to craft striking visuals for his new site — bringing his blend of tradition and tech to life without missing a beat. The result? A standout portfolio that looks as sharp as his storytelling.',
    // desc: 'With no time for a photoshoot, we used AI and MidJourney to create high-quality images for wedding videographer Kostas Chris website. The result was a stunning site that seamlessly showcased his blend of traditional storytelling and cutting-edge technology, proving that innovation can overcome any obstacle, even under tight deadlines.',
    url: 'https://kostaschris.gr/',
    logo: kostaschris,
    tags: [
      'Logo Design',
      'Web Design',
    ]
  },
  // {
  //   id: 2,
  //   title: 'Kostaschris Videography',
  //   subtitle: "Showcasing high-tech storytelling through tradition",
  //   desc: 'Kostas Chris needed a website upgrade to reflect the blend of tradition and cutting-edge technology in his wedding videography services. We crafted a visually striking website that highlights his exceptional use of drones and high-end cameras, seamlessly merging classic storytelling with modern innovation. ',
  //   url: 'https://kostaschris.gr/',
  //   logo: kostaschris,
  //   tags: [
  //     'Logo Design',
  //     'Web Design',
  //   ]
  // },
  {
    id: 3,
    title: 'Wodshop',
    subtitle: "Enhancing brand and e-commerce",
    // desc: 'WodShop, specializing in sports nutrition supplements,  entrusted us with redesigning their website and their logo. Not only did this change enable them to better place  themselves as a brand but it also optimized their e-commerce thus  placing them in a position for more success in an increasingly  competitive sports nutrition market. This transformation has set WodShop up for greater success in the competitive world of sports nutrition. This transformation has set WodShop up for greater success in the competitive world of sports nutrition.',
    desc: 'A bold brand in sports nutrition — but their online game needed a lift. We gave their logo a fresh edge and rebuilt their site to sell smarter and look sharper. Stronger brand. Smoother shop. Bigger results.',
    url: 'https://wodshop.eu/',
    logo: wodshop,
    tags: [
      'Logo Design',
      'Web Design',

    ]
  },
  {
    id: 4,
    title: 'Supercharge Your Skills',
    subtitle: "Launching with a Bold New Logo",
    desc: 'A new e-learning platform ready to make waves. We created a bold logo that sets them apart and gives their brand a strong start — the perfect launchpad for growth in online education.',
    url: '',
    logo: sys,
    tags: [
      'Logo Design',
    ]
  },
  {
    id: 5,
    title: 'Join the Revolution',
    subtitle: "Building a Professional Identity for JTR",
    desc: 'JTR, A gym killing it on social media but missing a key piece — a solid website. We built them a strong online home that completes their professional identity and brings everything together.',
    // desc: 'JTR, a well-known gym, was thriving on social media but lacked a dedicated website. We stepped in to complete their professional identity by creating a robust online presence. This new website was the missing piece in order to create a fully profesional business identity.',
    url: 'https://www.jointherevolution.gr/',
    logo: jtr,
    tags: [
      'Web Design',
      'Presentational Video'
    ]
  },
  {
    id: 6,
    title: 'Rebel\'s Way',
    subtitle: "Elevating Rebel’s Way with a Dual-Purpose Website",
    // desc: 'Rebel’s Way, an online coaching team, needed a platform to showcase and sell their programming. We built a versatile website that functions both as a presentation tool and an e-commerce store, streamlining their online sales and enhancing their digital presence.',
    desc: 'Rebel’s Way, an online coaching team, needed a platform to showcase and sell their programming. We created a flexible website that shows off their work and makes selling easy. Simple, effective, and built to grow.',
    url: 'https://www.rebelsway.gr/',
    logo: rway,
    tags: [
      'Web Design',
      'Animation Video'
    ]
  },
]



// Brand Identity
export const brandIdentityPricing = [
  {
    id: 1,
    title: 'LOGO DESIGN',
    icon: <SiJordan />,
    desc: 'Creation of a Visual Identity.',
    price: '500€+',
    features: [
      "3 initial logo concepts",
      "1 round of revisions",
      "High Resolution Files(JPEG,PNG,PDF)",
    ]
  },
  {
    id: 2,
    title: 'GRAPHICS DESIGN',
    icon: <BiImage />,
    desc: 'Visual assets aligned with brand aesthetics.',
    price: '800€+',
    features: [
      "10 Custom graphics and images",
      "1 round of revisions",
      "High Resolution Files(JPEG,PNG,PDF)",
    ]
  },
  {
    id: 3,
    title: 'BRAND DESIGN',
    icon: <MdOutlineBrandingWatermark />,
    desc: 'Comprehensive brand identity design.',
    price: '1500€+',
    features: [
      "Logo Design",
      "10 Custom graphics and images",
      "Business card",
      "Social media branding kit (x6 IG Post)",
      "2 rounds of revisions",
      "High Resolution Files(JPEG,PNG,PDF)",
    ]
  },
]

// Web Design

export const webDesignFeatures = [
  {
    id: 1,
    title: 'Global Accessibility',
    desc: 'Allows your business to be accessible to potential customers worldwide, breaking down geographical barriers and local boundaries.'
  },
  {
    id: 2,
    title: '24/7 Availability',
    desc: 'Additionally, it provides a constant platform where customers can learn about your products or services, make inquiries and make purchases day or night.'
  },
  {
    id: 3,
    title: 'Enhanced Credibility and Branding',
    desc: 'On top of that, a well-designed website adds credibility and professionalism in its own right.'
  },
  {
    id: 4,
    title: 'Cost-Effective Marketing',
    desc: 'Furthermore, websites provide ways of advertising businesses at low rates as compared to traditional methods like print ads or direct mails. '
  },
]

export const webDesignPricing = [
  {
    id: 1,
    title: 'ADVANCED',
    secondTitle: 'MOST STATE-OF-THE-ART',
    icon: <HiOutlineBolt />,
    desc: 'Best for Large Business',
    miniText: "(Take your online presence to the next level)",
    price: '3600€+',
    features: [
      "Built on Next.js + GSAP",
      "Photoshop, Illustrator, Midjourney",
      "Custom animations and interactive elements",
      "Fully Customized",
      "High Speed Performance",
      "Best SEO Optimization",
    ]
  },
  {
    id: 2,
    title: 'BASIC',
    secondTitle: 'MOST POPULAR',
    icon: <LuRocket />,
    desc: 'Best for Small Business',
    miniText: "(Upgrade your online presence)",
    price: '1800€+',
    features: [
      "Built on Wordpress",
      "Photoshop, Illustrator, Midjourney",
      "Basic Animations",
      "High Speed Performance and SEO",
    ],
    idealFor: 'Ideal for attracting new clients'
  },
  {
    id: 3,
    title: 'E-COMMERCE',
    secondTitle: 'MOST PROFITABLE',
    icon: <BiShoppingBag />,
    desc: 'Best for e-shops',
    miniText: "(Increase sales and conversions)",
    price: '2800€+',
    features: [
      "Built on Wordpress + WooCommerce",
      "Photoshop, Illustrator, Midjourney",
      "High Speed Performance",
      "Best SEO Optimization",
      "Client-Centered Approach"
    ]
  },
]

// Video Motion
export const videoMotionFeatures = [
  {
    id: 1,
    title: 'Show What You’re Made Of',
    desc: 'Show, don’t tell. Videos put your products in action — clear, simple, and real. People see exactly what you offer and why it matters, making them way more likely to buy.'
  },
  {
    id: 2,
    title: 'Make Them Feel It',
    desc: 'Good video pulls at the heartstrings. Through story, sound, and sight, it makes your audience feel something — turning viewers into loyal fans.'
  },
  {
    id: 3,
    title: 'Show You Mean Business',
    desc: 'High-quality video says you mean business. It shows you care about the details, stand out from the crowd, and builds trust before you even say a word.'
  },
]

export const videoMotionPricing = [
  {
    id: 1,
    title: 'ANIMATED VIDEO',
    miniTitle: 'Make your brand move',
    // desc: 'Dynamic promotional video with logo, illustrations and text animations.',
    desc: 'A short animated video that brings your logo and message to life.',
    price: '400€+',
    icon: <MdOutlineAnimation />,
    features: [
      'Helps you stand out on social media or websites',
      'Increase brand awareness and visibility ',
      'Includes your logo, graphics, and bold text animations',
      'Up to 30 seconds',
    ]
  },
  {
    id: 2,
    title: 'PRESENTATIONAL VIDEO',
    miniTitle: 'Let people see who you are',
    desc: 'A clean, professional video that shows what your business is all about.',
    price: '600€+',
    icon: <BsCameraVideo />,
    features: [
      'Ideal for showcasing facilities, products or services',
      'Strengthens credibility with a professional look and tone',
      'Professional cameras, lighting and script',
      'Up to 60-90 seconds',
    ]
  },
  {
    id: 3,
    title: 'DRONE VIDEO',
    miniTitle: 'Show the bigger picture',
    desc: 'Aerial footage that adds cinematic scale and visual interest.',
    price: '800€+',
    icon: <PiDroneFill />,
    features: [
      'Professional drone footage and unique perspectives',
      'Highlight expansive landscapes, facilities or events',
      'Cinematic viewing experience',
      'Up to 45 seconds',
    ]
  },
]

export const principles = [
  {
    id: 1,
    title: 'Ko-Kreation Approach',
    text: 'Your dreams are at the core of what we do. We listen intently to your ideas, ensuring that your vision guides every step of our creative process.'
  },
  {
    id: 2,
    // title: 'Precision in Every Pixel',
    title: 'Klear and Konsistent',
    text: 'Every detail matters. We meticulously design every pixel to achieve your goals with the precision your brand deserves.'
  },
  {
    id: 3,
    title: 'Future-Proof Kreativity',
    text: 'We design with an eye on the future. Our designs not only meet today’s standards but also anticipate tomorrow’s trends.'
  },
]

export const benefitsOfBranding = [
  {
    id: 1,
    title: 'Professionalism',
    text: 'A cohesive brand signals quality and reliability.'
  },
  {
    id: 2,
    title: 'Recognition and Memorability',
    text: 'A well-designed logo and consistent brand elements help customers remember you.'
  },
  {
    id: 3,
    title: 'Differentiates You from Competitors',
    text: 'Stand out in a crowded market.'
  },
]



// Navigation - Menu Links

export const navigationLinks = [
  {
    id: 1,
    href: '/web-design',
    title: 'Web Design',
    identity: 'webDesign'
  },
  {
    id: 2,
    href: '/brand-design',
    title: 'Brand Design',
    identity: 'brandIdentity'
  },
  {
    id: 3,
    href: '/video-motion',
    title: 'Video Motion',
    identity: 'videoMotion'
  },
]