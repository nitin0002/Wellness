import skill1Image from '../assets/images/sk2.png'
import skill2Image from '../assets/images/sk3.png'
import skill3Image from '../assets/images/sk1.png'

const SkillCards = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90vw] mx-auto">
        <div className="text-center mb-16">
          <div className="py-16 px-8 mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              All you need, in one app.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto">
              Discover simple tools to support your mind and grow your career — anytime, anywhere.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-[#FFE5D9] to-[#FFD1B3] rounded-[60px] p-8 flex items-center justify-between min-h-[450px]">
            <div className="flex-1 pr-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Book a Session</h2>
              <p className="text-lg text-gray-700 mb-6">
                One-on-one therapy with certified psychiatrists – virtual, simple, and affordable.
              </p>
              <button className="border-2 border-gray-800 bg-transparent text-gray-800 font-semibold py-3 px-6 rounded-xl hover:bg-gray-800 hover:text-white transition-colors duration-200">
                Learn More
              </button>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={skill2Image} 
                alt="Friendly Psychiatrist" 
                className="w-96 h-96 object-contain"
              />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#E8F5E8] to-[#D4F4D4] rounded-[60px] p-8 flex items-center justify-between min-h-[450px]">
            <div className="flex-1 pr-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Guided Wellness Audios</h2>
              <p className="text-lg text-gray-700 mb-6">
                Quick audio sessions for stress relief, confidence, and emotional balance.
              </p>
              <button className="border-2 border-gray-800 bg-transparent text-gray-800 font-semibold py-3 px-6 rounded-xl hover:bg-gray-800 hover:text-white transition-colors duration-200">
                Learn More
              </button>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={skill3Image} 
                alt="Guided Wellness" 
                className="w-96 h-96 object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-[#F0E6FF] to-[#E0CCFF] rounded-[60px] p-8 flex items-center justify-between min-h-[450px]">
          <div className="flex-1 pr-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Practical Skill Courses</h2>
            <p className="text-lg text-gray-700 mb-6">
              Short, regional-language courses in communication, freelancing, and digital tools.
            </p>
            <button className="border-2 border-gray-800 bg-transparent text-gray-800 font-semibold py-3 px-6 rounded-xl hover:bg-gray-800 hover:text-white transition-colors duration-200">
              Learn More
            </button>
          </div>
          <div className="flex-shrink-0">
            <img 
              src={skill1Image} 
              alt="Learning Hub" 
              className="w-96 h-96 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillCards
