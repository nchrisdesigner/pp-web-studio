import {  motion } from 'framer-motion'

const variants = {
  initial: {opacity:0, x:-15},
  whileInView:{opacity:1, x: 0},
  transition:{ duration: 0.1}
}

const PixelPerfektExplain = () => {
  return (
    <div style={{ margin: '.8rem 0' }}>
      <motion.p 
      variants={variants} 
      initial='initial' 
      whileInView='whileInView' 
      transition={{
        duration:0.1,
        delay:0.3
      }}
      style={{ color: 'var(--white)', fontSize: '1rem' }}>
        <strong><em>/ˈpɪksl/</em></strong> - the smallest unit of a digital image or display
      </motion.p>
      <motion.p 
      variants={variants} 
      initial='initial' 
      whileInView='whileInView' 
      transition={{
        duration:0.1,
        delay:0.6
      }}
      style={{ color: 'var(--white)', fontSize: '1rem' }}>
      <strong><em>/ˈpəːfɪkt/</em></strong> -  as good as it is possible to be
      </motion.p>
    </div>
  )
}

export default PixelPerfektExplain