import React from 'react'
import mobileImage from '../assets/Images/ChatGPT Image Aug 1, 2026, 02_12_34 PM.png'
import desktopImage from '../assets/Images/ChatGPT Image Aug 1, 2026, 02_12_40 PM.png'

const Hero = () => {
  return (
    <div className="w-full">
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
    </div>
  )
}

export default Hero