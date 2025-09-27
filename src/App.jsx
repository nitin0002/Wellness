import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import PlatformFeatures from './components/PlatformFeatures'
import SkillCards from './components/SkillCards'
import WhatMakesDifferent from './components/WhatMakesDifferent'
import BrandsMarquee from './components/BrandsMarquee'

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <PlatformFeatures />
      <BrandsMarquee />
      <SkillCards />
      <WhatMakesDifferent />
    </div>
  )
}

export default App
