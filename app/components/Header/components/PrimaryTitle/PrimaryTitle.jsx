'use client'
import { MdBolt } from "react-icons/md"
import DarkButton from '@/app/ui/Buttons/DarkButton/DarkButton'
import styles from './primarytitle.module.css'
import { motion } from 'framer-motion'
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import Letter from '@/app/ui/Letter/Letter'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/all'
import AnimatedParagraph from "@/app/ui/TextComponents/AnimatedParagraph/AnimatedParagraph"
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin)

import { Anton } from 'next/font/google'
const anton = Anton({
  weight: ['400'],
  subsets: ['latin']
})

const textVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      // delay: 1.1,
      ease: 'easeOut',
      type: 'spring'
    }
  }
}

const PrimaryTitle = () => {
  const miniTextRef = useRef()

  useGSAP(() => {
    const tl = gsap.timeline()

    tl
      // .from(
      //   svgRef.current,
      //   {
      //     clipPath: "inset(0 100% 0 0)",
      //     duration: .5,
      //     delay:.5,
      //   }
      // )
      .from(
        miniTextRef.current,
        {
          color: '#fff',
          duration: .5,
        })

  })


  const svgRef = useRef()

  return (
    <div className={styles.container}>
      <h1 className={` ${styles.primaryTitle} ${anton.className} `}>
        <span className='block-element'>
          WE SOLVE&nbsp;
          <span ref={miniTextRef} className='faint-text relative'>

            {/* <svg className={styles.smudge} width="280" height="15" viewBox="0 0 227 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path ref={svgRef} d="M198.049 10.6346L186.847 9.19523C184.981 8.9415 183.109 8.74164 181.236 8.54402L175.615 7.94505C173.627 7.74312 171.637 7.50832 169.641 7.34114C167.645 7.18055 165.649 7.03767 163.654 6.91248C160.994 6.75817 158.335 6.5813 155.675 6.44978L147.688 6.13508C142.366 5.88128 137.038 5.82704 131.712 5.71091L127.718 5.6353L123.722 5.62896L115.733 5.60895L113.735 5.60487L111.738 5.63571L107.743 5.69478L99.7532 5.80011L89.917 6.09457C88.2777 6.14732 86.6375 6.17854 84.9987 6.24758L80.0836 6.48185C76.8073 6.64729 73.5282 6.76779 70.2533 6.96576L60.4314 7.60908C47.3436 8.56836 34.2647 9.75065 21.2437 11.4228C19.2774 11.6558 17.2956 11.8477 15.3166 12.0192C13.3404 12.2144 11.3753 12.4086 9.42135 12.6017C5.68639 12.9593 3.20027 12.754 1.59876 12.2664C-0.733705 11.5592 1.28305 10.1498 6.52851 9.06347C8.1875 8.72153 9.9308 8.40815 11.6925 8.1221C12.5745 7.98599 13.4599 7.84918 14.3409 7.7131C15.2259 7.6052 16.1066 7.4977 16.9746 7.39196C20.9743 6.92207 24.971 6.45251 28.9648 5.9833C32.9652 5.57232 36.9611 5.13951 40.9524 4.68487C42.9465 4.43954 44.9482 4.27415 46.946 4.06628L52.9397 3.4484C56.932 2.99054 60.9352 2.66381 64.9353 2.26156C67.1435 2.0485 69.3951 1.7935 71.6364 1.60833C73.8789 1.44667 76.1091 1.32064 78.2683 1.2901C85.1622 1.13336 92.0732 1.01656 98.9858 0.783899L109.359 0.637878C111.087 0.624005 112.815 0.588878 114.543 0.604492L119.722 0.694964L127.424 0.831139C129.993 0.904788 132.563 0.978518 135.135 1.05232L142.851 1.28375C145.42 1.41525 147.988 1.54674 150.555 1.67822C152.843 1.80966 155.132 1.91184 157.418 2.06965L164.272 2.58155L171.123 3.10364L177.964 3.75406L184.803 4.40617L191.628 5.18745L198.451 5.97152C200.725 6.24109 202.987 6.60358 205.255 6.9143C207.063 7.17213 208.841 7.44824 210.588 7.74263C211.459 7.89689 212.322 8.04971 213.178 8.20112C214.03 8.37374 214.871 8.56145 215.702 8.74841C219.029 9.49879 222.189 10.3376 225.14 11.2512C227.858 12.0703 227.55 12.8146 224.259 12.8154C223.677 12.8118 223.092 12.8083 222.504 12.8047C221.917 12.7919 221.334 12.7397 220.745 12.7065L217.193 12.4597C214.816 12.2696 212.414 12.0776 210.018 11.8863C206.082 11.5624 202.067 11.0306 198.094 10.5538C198.08 10.58 198.066 10.6042 198.049 10.6346Z" fill="#5E5AD6" />
            </svg> */}

            PROBLEMS
          </span>
        </span>
        <div>
          THROUGH <span className={styles.noWrapWord}> <Letter textSize='title'>K</Letter>REATIVITY</span>
        </div>

      </h1>
      {/* 
      <motion.div
        variants={textVariants}
        initial='hidden'
        animate='show'>
        <p className={`${styles.text} `}>
          We’re a <Letter textSize="paragraph">K</Letter>reative web design studio based in Greece, designing beautiful and distinctive work for brands that <span className='bold-text'>dare to stand out.</span>
        </p>

        
      </motion.div> */}
      <AnimatedParagraph color='#ffffff'>
        We’re a <Letter textSize="paragraph">K</Letter>reative web design studio based in Greece, designing beautiful and distinctive work for brands that <span className='bold-text'>dare to stand out.</span>
      </AnimatedParagraph>


      <DarkButton id='#projects' icon={<MdBolt />}>View Our Work</DarkButton>
    </div>
  )
}

export default PrimaryTitle

const Smudge = () => {
  return (
    <svg className={styles.smudge} width="406" height="36" viewBox="0 0 406 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={styles.svgClass} d="M8.70966 27.2071C120.597 8.91137 233.052 5.17311 345.624 12.2245C361.316 13.2074 377.207 14.8046 392.971 13.9068C394.84 13.8004 395.541 13.3257 396.717 11.893" stroke="#5E5AD6" strokeWidth="15" strokeLinecap="round" />
    </svg>
  )
}
const Scribble = () => {
  const svgRef = useRef()

  useGSAP(() => {
    gsap.fromTo(
      svgRef.current,
      { drawSVG: "0%" },
      { drawSVG: "100%", duration: 2, ease: "power1.inOut" }
    );
  }, []);

  return (
    <svg className={styles.scribble} width="549" height="25" viewBox="0 0 549 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path ref={svgRef} d="M9.43292 24.0569C25.8756 24.2117 42.3576 24.2019 58.8556 24.0093C68.8353 23.8909 78.7909 23.7253 88.7873 23.4431C103.165 23.0463 117.511 22.4201 131.881 21.7931C144.274 21.2544 156.669 20.7541 169.063 20.2346C178.987 19.8205 188.934 19.3961 198.858 18.963C210.308 18.4668 221.738 18.0098 233.187 17.4657C259.497 16.2199 285.785 14.9844 312.096 13.777C322.558 13.2962 332.999 12.8737 343.464 12.46C351.076 12.1556 358.665 11.852 366.278 11.5571C369.713 11.4179 373.151 11.3361 376.588 11.2352C384.966 10.9904 393.368 10.7544 401.747 10.5095C405.386 10.4015 409.047 10.2832 412.688 10.2327C424.802 10.0685 436.937 9.85558 449.076 9.74809C462.339 9.63011 475.62 9.41549 488.877 9.12496C500.426 8.87491 511.996 8.58573 523.539 8.14396C532.027 7.81852 540.558 7.4244 548.987 6.67873C543.405 6.51869 537.822 6.32989 532.241 6.2082C532.398 6.2027 532.556 6.21638 532.736 6.21969C520.447 5.90051 508.097 5.73706 495.772 5.6591C486.168 5.59163 476.565 5.56249 466.964 5.57171C470.533 5.37981 474.101 5.18791 477.669 4.98642C482.719 4.70438 487.768 4.40316 492.84 4.12032C499.281 3.77044 505.742 3.35267 512.183 2.9932C523.876 2.33504 535.542 1.57221 547.181 0.685544C535.35 0.590322 523.445 0.958379 511.584 1.27693C499.003 1.61102 486.404 2.04175 473.806 2.52041C461.836 2.96751 449.847 3.4825 437.881 4.04464C427.173 4.55323 416.465 5.05224 405.732 5.51369C397.066 5.89334 388.399 6.26341 379.71 6.64385C375.49 6.82975 371.247 7.03561 367.025 7.19276C352.832 7.71756 338.662 8.24158 324.468 8.7568C320.875 8.88238 317.283 9.03671 313.689 9.15271C307.444 9.34215 301.177 9.53237 294.933 9.72181C286.577 9.97544 278.221 10.2291 269.888 10.4915C266.855 10.5783 263.823 10.6842 260.79 10.7519C245.895 11.1189 230.999 11.4859 216.104 11.8529C204.264 12.1419 192.443 12.3342 180.623 12.5745C158.445 13.0137 136.243 13.4249 114.044 13.9223C102.315 14.1787 90.5659 14.4837 78.8411 14.8551C75.8089 14.9514 72.7991 15.047 69.7672 15.153C64.3995 15.3406 59.055 15.5465 53.6884 15.7629C49.5791 15.9257 45.494 16.1356 41.3837 16.2697C27.5713 16.7428 13.8092 17.3677 0.020533 17.8784C3.64541 18.0109 7.26996 18.1337 10.9153 18.2079C14.6059 18.2901 18.3182 18.3523 22.0085 18.4249C28.8486 18.5506 35.6874 18.6379 42.5259 18.7156C43.7856 18.7292 45.0668 18.7132 46.3261 18.7172C49.9688 18.7147 53.6111 18.7026 57.2531 18.6809C65.2792 18.6403 73.3043 18.571 81.3505 18.4626C85.8681 18.4007 90.4071 18.3092 94.9229 18.1994C72.7679 19.3096 50.6474 20.7641 28.6264 22.4935C22.213 22.996 15.7995 23.4984 9.4098 24.0385L9.43292 24.0569Z" stroke="#5e5cd6"
        strokeWidth={4}
        fill="none" />
    </svg>

  )
}

const drawVariants = {
  hidden: {
    pathLength: 0
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 5
    }
  }
}

const SvgLine = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={379}
    height={40}
    className={styles.smudge}
    viewBox="0 0 379 40"
    fill="none"
    initial="hidden"
    animate="visible"
  >
    <motion.path
      variants={drawVariants}
      custom={3}
      initial="hidden"
      animate="visible"
      // className={styles.svgClass}
      fill="#5E5AD6"
      d="M376.518 10.671c-1.255-2.642-2.803-5.04-4.914-7.04-.971-.921-3.137-2.885-4.792-2.443C354.971.19 343.061.362 331.177.355c-12.023-.004-24.049.04-36.064.321a1961 1961 0 0 0-71.936 3.01c-47.927 2.87-95.666 7.639-143.262 14.168-13.3 1.829-26.605 3.806-39.938 5.308-6.464.73-12.942 1.35-19.435 1.802-3.322.227-6.648.414-9.97.641-2.538.17-8.004-.558-9.776 1.391.019.022.03.05.048.071-.95.602-.836 2.624-.514 3.861.739 2.82 2.515 5.738 5.014 7.216 2.732 1.608 6.087 1.274 9.178 1.384 3.038.112 6.074.15 9.116.101a435.717 435.717 0 0 0 18.1-.704c12.074-.71 24.08-1.77 36.105-3.05 24.045-2.563 48.094-4.977 72.199-6.84 48.198-3.718 96.423-6.218 144.752-6.738 13.567-.142 27.133-.25 40.695-.195 13.476.048 26.987.694 40.445.025 5.148-.253 1.666-9.17.578-11.463l.006.007Z"
    />
  </motion.svg>
)


