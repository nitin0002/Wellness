import howItWorksImage from '../assets/images/howItWorks.png'

const HowItWorks = () => {
  return (
    <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 py-0 sm:py-16 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center justify-items-center lg:justify-items-stretch">
          <div className="flex flex-col justify-center lg:justify-between h-full space-y-6 sm:space-y-8 text-center lg:text-left order-1 lg:order-1">
            <div className='space-y-4 sm:space-y-8'>
              <div className="space-y-2 sm:space-y-4">
                <h2 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                Struggles you're facing
                </h2>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">
                  <span className='text-nowrap'>Your challenges are real - and</span> <br></br>
                  we're here to help.
                </h1>
              </div>
              
              <p className="text-base sm:text-lg lg:text-2xl text-gray-700 font-normal leading-relaxed max-w-2xl">
                In Tier 2 and Tier 3 cities across India, millions face the same struggles: confusion about careers, constant stress from studies or work, and the silent weight of loneliness or burnout. Yet, affordable help is hard to find – especially in your own language.
              </p>
            </div>
            
            <button className="bg-[#FF7A3C] hover:bg-orange-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg transition-colors duration-200 shadow-lg hover:shadow-xl max-w-72 w-full sm:w-auto hidden lg:block">
              Find a Therapist
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center lg:justify-end mt-8 lg:mt-0 order-2 lg:order-2">
            <div className="relative">
              <div className="bg-amber-50 rounded-3xl p-4 sm:p-8 lg:p-12">
                <div className="bg-amber-100 rounded-full p-4 sm:p-8 lg:p-12 relative">
                  <img 
                    src={howItWorksImage} 
                    alt="Person with emotional thoughts and feelings" 
                    className="w-full h-auto max-w-xs sm:max-w-72 mx-auto"
                  />
                </div>
              </div>
            </div>
            
            <button className="bg-[#FF7A3C] hover:bg-orange-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg transition-colors duration-200 shadow-lg hover:shadow-xl max-w-72 w-full sm:w-auto mt-6 lg:hidden">
              Find a Therapist
            </button>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
