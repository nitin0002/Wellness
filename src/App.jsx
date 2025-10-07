import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import PlatformFeatures from './components/PlatformFeatures'
import SkillCards from './components/SkillCards'
import WhatMakesDifferent from './components/WhatMakesDifferent'
import BrandsMarquee from './components/BrandsMarquee'
import Testimonials from './components/Testimonials'
import CTAInvite from './components/CTAInvite'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <PlatformFeatures />
      <BrandsMarquee />
      <SkillCards />
      <WhatMakesDifferent />
      <Testimonials />
      <CTAInvite />
      <Footer />
    </div>
  )
}

export default App
