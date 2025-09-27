import platformFeaturesImage from '../assets/images/Platformfeatures.png'
import checkIcon from '../assets/icons/check-icon.svg'

const PlatformFeatures = () => {
  const features = [
    "Book psychiatrist sessions easily",
    "Guided wellness audios & support",
    "Learn practical, real-world skills",
    "Multilingual & affordable"
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-[85vh] border border-[#FBD4C9] m-10 rounded-[60px] bg-gradient-to-r from-[#FFEDE6] via-[#F8F8FC] to-[#E6FFE6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-gray-900 mb-6">
            One platform for your mind and your future.
          </h1>
          <p className="text-2xl text-[#495057] max-w-4xl mx-auto font-normal">
            One simple app for your mind and your career. Book a psychiatrist, listen to wellness audios, and learn real-world skills - in Hindi, English, and more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={platformFeaturesImage} 
                alt="People learning and collaborating" 
                className="w-full h-auto max-w-lg"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img src={checkIcon} alt="Check" className="w-8 h-8 flex-shrink-0" />
                  <span className="text-2xl text-black font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-[#FF7A3C] hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Start Free Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformFeatures
