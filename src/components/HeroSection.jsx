import { Button } from './ui/Button';

const HeroSection = () => {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Full-stretched background images - HeroBG1 and HeroBG2 - Hidden on mobile */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat opacity-30 hidden md:block"
          style={{
            backgroundImage: `url('/bgs/HeroBG1.webp')`,
            backgroundPosition: 'center 20%'
          }}
        />
        {/* <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-3 hidden md:block"
          style={{
            backgroundImage: `url('/bgs/HeroBG2.webp')`
          }}
        /> */}
        
        {/* Multiple Landing Background Images - Perfectly positioned at corners */}
        {/* Top Left Corner - Jalandhar */}
        <div 
          className="absolute top-24 left-4 w-72 h-48 bg-cover bg-center bg-no-repeat opacity-80 rounded-lg hidden md:block"
          style={{
            backgroundImage: `url('/landing/Jalandhar.webp')`
          }}
        />
        {/* Top Right Corner - Golden Temple */}
        <div 
          className="absolute top-24 right-4 w-72 h-48 bg-cover bg-center bg-no-repeat opacity-80 rounded-lg hidden md:block"
          style={{
            backgroundImage: `url('/landing/GoldenTemple.webp')`
          }}
        />
        {/* Bottom Right Corner - Pillar */}
        <div 
          className="absolute bottom-24 right-4 w-72 h-48 bg-cover bg-center bg-no-repeat opacity-80 rounded-lg hidden md:block"
          style={{
            backgroundImage: `url('/landing/Pillar.webp')`
          }}
        />
        {/* Bottom Left Corner - Jallianwala Bagh */}
        <div 
          // className="absolute bottom-24 left-4 w-72 h-48 bg-cover bg-center bg-no-repeat opacity-80 rounded-lg hidden md:block"
          className="absolute top-43 left-4 bg-cover bg-center bg-no-repeat opacity-80 rounded-lg"
          style={{
            backgroundImage: `url('/landing/logo.jpg')`,
            width: '330px',       // custom width
            height: '170px'       // custom height
          }}
        />
        {/* Bottom Left Corner - logo1*/}
        
        <div 
          // className="absolute bottom-24 left-4 w-72 h-48 bg-cover bg-center bg-no-repeat opacity-80 rounded-lg hidden md:block"
          className="absolute bottom-20 left-4 bg-cover bg-center bg-no-repeat opacity-80 rounded-lg hidden md:block"
          style={{
            backgroundImage: `url('/landing/logo2.jpg')`,
            width: '330px',       // custom width
            height: '170px'       // custom height
          }}
        />
        
        {/* Hero Pattern Overlay */}
        <div className="absolute inset-0 hero-pattern z-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-conf-green-700/20 to-conf-green-600/10 z-10"></div>
        
        <div className="container mx-auto px-4 z-20 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="heading font-heading leading-tight">
              <span className="block highlighter1 mb-2">
                1<sup>st</sup> International Conference<br />
                on
              </span>
              <span className="text-gray-900 block">
                Thermo Fluids and
                <span className="highlighter2"> Green Energy</span> Technology
              </span>
            </h1>
            <div className="py-8 inline-block">
              <span className="bg-conf-green-100 text-conf-green-800 px-6 py-2 rounded-full normal-text font-semibold shadow-sm 
                             hover:scale-105 hover:shadow-lg hover:bg-conf-green-200 pillbox-animate">
                January 16-18, 2026 (Hybrid Mode)
              </span>
            </div>
            <p className="normal-text pb-4 max-w-3xl leading-relaxed">
              A platform for academicians, designers, researchers and consumers to exchange and share ideas, experiences and research results.
            </p>
            <p className="normal-text font-semibold italic pb-8 ">
              "From Present to Future Engineering Solutions"
            </p>
            <div className="flex flex-wrap gap-4 justify-center pb-8">
              <Button className="bg-conf-green-600 hover:bg-conf-green-700 text-white px-8 py-4 h-auto normal-text font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
               <a href="https://cmt3.research.microsoft.com/TFGET2026">Submit Abstract</a>
              </Button>
              <Button variant="outline" className="border-2 border-conf-green-600 text-conf-green-600 hover:bg-conf-green-50 px-8 py-4 h-auto normal-text font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="https://cmt3.research.microsoft.com/TFGET2026">Submit Paper</a>
              </Button>
            </div>

            
            
            <div className="flex items-center">
              <div className="flex flex-col items-center">
                <p className="normal-text font-semibold mb-2">Organized by</p>
                <p className="normal-text md:text-xl font-semibold">Department of Mechanical Engineering</p>
                <p className="normal-text md:text-xl font-semibold">Dr. B.R Ambedkar National Institute of Technology Jalandhar</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-20">
          <a href="#about" className="text-gray-500 hover:text-conf-green-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>
    );
  };
  
  export default HeroSection;