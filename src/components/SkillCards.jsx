import skill1Image from '../assets/images/sk2.png'
import skill2Image from '../assets/images/sk3.png'
import skill3Image from '../assets/images/sk1.png'

const skillCardsData = [
  {
    id: 1,
    title: "Book a Session",
    description: "One-on-one therapy with certified psychiatrists – virtual, simple, and affordable.",
    image: skill2Image,
    imageAlt: "Friendly Psychiatrist",
    gradientFrom: "from-[#FFE5D9]",
    gradientTo: "to-[#FFD1B3]"
  },
  {
    id: 2,
    title: "Guided Wellness Audios",
    description: "Quick audio sessions for stress relief, confidence, and emotional balance.",
    image: skill3Image,
    imageAlt: "Guided Wellness",
    gradientFrom: "from-[#E8F5E8]",
    gradientTo: "to-[#D4F4D4]"
  },
  {
    id: 3,
    title: "Practical Skill Courses",
    description: "Short, regional-language courses in communication, freelancing, and digital tools.",
    image: skill1Image,
    imageAlt: "Learning Hub",
    gradientFrom: "from-[#F0E6FF]",
    gradientTo: "to-[#E0CCFF]"
  }
]

const SkillCards = () => {
  return (
    <section className="py-2 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90vw] mx-auto">
        <div className="text-center mb-16">
          <div className="py-2 sm:py-16 px-8 mb-8">
            <h1 className="text-xl sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-6 text-gray-900">
              All you need, in one app.
            </h1>
            <p className="text-md sm:text-2xl text-gray-600 max-w-4xl mx-auto">
              Discover simple tools to support your mind and grow your career — anytime, anywhere.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {skillCardsData.slice(0, 2).map((card) => (
            <div key={card.id} className={`bg-gradient-to-br ${card.gradientFrom} ${card.gradientTo} rounded-[24px] lg:rounded-[60px] p-8 flex flex-col lg:flex-row items-center justify-between min-h-[450px]`}>
              <div className="flex-1 lg:pr-8 text-center lg:text-left mb-6 lg:mb-0">
                <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4">{card.title}</h2>
                <p className="text-sm lg:text-lg text-gray-700 mb-6 lg:mb-6">
                  {card.description}
                </p>
                <button className="hidden lg:block border-2 border-gray-800 bg-transparent text-gray-800 font-semibold py-3 px-6 rounded-[100px] hover:bg-gray-800 hover:text-white transition-colors duration-200">
                  Learn More
                </button>
              </div>
              <div className="flex-shrink-0 mb-2 sm:mb-6 lg:mb-0">
                <img 
                  src={card.image} 
                  alt={card.imageAlt} 
                  className="w-72 h-72 lg:w-96 lg:h-96 object-contain"
                />
              </div>
              <button className="lg:hidden border-2 border-gray-800 bg-transparent text-gray-800 font-semibold py-3 px-6 rounded-[100px] hover:bg-gray-800 hover:text-white transition-colors duration-200">
                Learn More
              </button>
            </div>
          ))}
        </div>
        
        {skillCardsData.slice(2).map((card) => (
          <div key={card.id} className={`bg-gradient-to-br ${card.gradientFrom} ${card.gradientTo} rounded-[24px] lg:rounded-[60px] p-8 flex flex-col lg:flex-row items-center justify-between min-h-[450px]`}>
            <div className="flex-1 lg:pr-8 text-center lg:text-left mb-6 lg:mb-0">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{card.title}</h2>
              <p className="text-base lg:text-lg text-gray-700 mb-6 lg:mb-6">
                {card.description}
              </p>
              <button className="hidden lg:block border-2 border-gray-800 bg-transparent text-gray-800 font-semibold py-3 px-6 rounded-[100px] hover:bg-gray-800 hover:text-white transition-colors duration-200">
                Learn More
              </button>
            </div>
            <div className="flex-shrink-0 mb-6 lg:mb-0">
              <img 
                src={card.image} 
                alt={card.imageAlt} 
                className="w-72 h-72 lg:w-96 lg:h-96 object-contain"
              />
            </div>
            <button className="lg:hidden border-2 border-gray-800 bg-transparent text-gray-800 font-semibold py-3 px-6 rounded-[100px] hover:bg-gray-800 hover:text-white transition-colors duration-200">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillCards
