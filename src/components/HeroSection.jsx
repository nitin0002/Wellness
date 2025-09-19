import mainImage from '../assets/images/Main.png'
import heroCenterImage from '../assets/images/hero-center.png'

function HeroSection() {
  return (
    <section 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${mainImage})`
      }}
    >
      <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto pt-6">
        <div 
          className="mb-8"
          style={{
            width: '175px',
            height: '38px',
            fontFamily: 'Syne',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '32px',
            lineHeight: '38px'
          }}
        >
          <span style={{ color: '#FF7A3C' }}>Grow</span>
          <span style={{ color: '#000000' }}>Well</span>
        </div>
        <h1 
          className="text-4xl md:text-6xl font-bold mb-8 "
          style={{
            fontFamily: 'Syne',
            color: '#333333'
          }}
        >
          Growth begins when mind and skills move together.
        </h1>
        <p 
          className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto"
          style={{
            fontFamily: 'Syne',
            color: '#555555'
          }}
        >
          Find calm with guided therapy, and unlock new opportunities with practical skills – all in one place, built for you.
        </p>
        <button 
          className="font-semibold py-4 px-12 rounded-lg transition-colors duration-200 text-xl cursor-pointer"
          style={{
            fontFamily: 'Syne',
            backgroundColor: '#FF7A3C',
            color: 'white'
          }}
        >
          Start Free Today
        </button>
        <div>
          <img 
            src={heroCenterImage} 
            alt="Hero Center" 
            className="max-w-full h-auto mobile-bounce"
            style={{
              animation: 'subtleBounce 1.5s ease-in-out infinite'
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
