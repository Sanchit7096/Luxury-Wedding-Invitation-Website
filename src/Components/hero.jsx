import React from 'react'
import { motion } from 'framer-motion'
import mobileImage from '../assets/Images/ChatGPT Image Aug 1, 2026, 02_12_34 PM.png'
import desktopImage from '../assets/Images/ChatGPT Image Aug 1, 2026, 02_12_40 PM.png'

const Hero = () => {
  return (
    <div className="w-full relative">
      <picture>
        <source media="(max-width: 768px)" srcSet={mobileImage} />
        <source media="(min-width: 769px)" srcSet={desktopImage} />
        <img 
          src={desktopImage} 
          alt="Hero" 
          className="w-full h-auto object-cover block"
          style={{ minHeight: '300px' }}
        />
      </picture>
      
      {/* Animated Scroll Down Text */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-black text-sm md:text-base lg:text-lg tracking-[0.3em] uppercase font-heading mt-120 font-bold" 
             style={{ 
               textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)',
               padding: '8px 16px',
               borderRadius: '4px'
             }}>
          Scroll Down
        </div>
        <motion.div
          className="w-6 h-10 mx-auto border-2 border-white/50 rounded-full flex justify-center pt-2"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero