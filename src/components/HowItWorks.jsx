import howItWorksImage from '../assets/images/howItWorks.png'

const HowItWorks = () => {
  return (
    <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-36 py-8 sm:py-16 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="flex flex-col justify-between h-full space-y-6 sm:space-y-8">
            <div className='space-y-4 sm:space-y-8'>
              <div className="space-y-2 sm:space-y-4">
                <h2 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  HOW IT WORKS
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
            
            <button className="bg-[#FF7A3C] hover:bg-orange-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg transition-colors duration-200 shadow-lg hover:shadow-xl max-w-72 w-full sm:w-auto">
              Find a Therapist
            </button>
          </div>
          
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative">
              <div className="bg-amber-50 rounded-3xl p-4 sm:p-8 lg:p-12">
                <div className="bg-amber-100 rounded-full p-4 sm:p-8 lg:p-12 relative">
                  <img 
                    src={howItWorksImage} 
                    alt="Person with emotional thoughts and feelings" 
                    className="w-full h-auto max-w-xs sm:max-w-md mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
