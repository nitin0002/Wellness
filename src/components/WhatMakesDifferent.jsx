import mentalWellnessImage from '../assets/images/Mental-wellness.png'
import checkIcon from '../assets/icons/check-icon.svg'

const WhatMakesDifferent = () => {
  const features = [
    "Skills and wellness in one platform",
    "Hindi-first + multilingual support", 
    "Certified psychiatrists & guided sessions",
    "Affordable freemium plans (start free, upgrade anytime)",
    "Safe, moderated peer community"
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              What makes us different.
            </h1>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img src={checkIcon} alt="Check" className="w-8 h-8 flex-shrink-0" />
                  <span className="text-xl text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-[#FF7A3C] hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Find a Therapist
            </button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#FFE5D9] to-[#FFD1B3] rounded-3xl p-8 max-w-lg">
                <img 
                  src={mentalWellnessImage} 
                  alt="Mental Wellness and Skills" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatMakesDifferent
