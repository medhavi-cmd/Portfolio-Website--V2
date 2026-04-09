import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-start pt-24">
      <Navbar />
      <LeftSection />
      <RightSection />
    </div>
  )
}

export default Hero
