import Marquee from "react-fast-marquee";
import { 
  FaGoogle, 
  FaMicrosoft, 
  FaApple, 
  FaAmazon, 
  FaFacebook, 
  FaSpotify, 
  FaTwitter, 
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

const BrandsMarquee = () => {
  const brands = [
    { name: "Google", icon: FaGoogle },
    { name: "Microsoft", icon: FaMicrosoft },
    { name: "Apple", icon: FaApple },
    { name: "Amazon", icon: FaAmazon },
    { name: "Meta", icon: FaFacebook },
    { name: "Spotify", icon: FaSpotify },
    { name: "Twitter", icon: FaTwitter },
    { name: "LinkedIn", icon: FaLinkedin },
    { name: "GitHub", icon: FaGithub },
    { name: "YouTube", icon: FaYoutube },
    { name: "Instagram", icon: FaInstagram },
    { name: "WhatsApp", icon: FaWhatsapp }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-full sm:max-w-[90vw] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            Trusted by leading companies
          </h2>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          <Marquee speed={50} gradient={false} className="overflow-hidden">
            <div className="flex items-center space-x-16 mx-8">
              {brands.map((brand, index) => {
                const IconComponent = brand.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 text-black hover:text-gray-600 transition-colors duration-200">
                    <IconComponent className="w-8 h-8" />
                    <span className="text-xl font-medium">{brand.name}</span>
                  </div>
                );
              })}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
