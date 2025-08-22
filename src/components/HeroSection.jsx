import { Button } from "./ui/Button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Full-stretched background images - HeroBG1 - Hidden on mobile */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-30 hidden md:block"
        style={{
          backgroundImage: `url('/bgs/HeroBG1.webp')`,
          backgroundPosition: "center 20%",
        }}
      />

      {/* 3 Containers */}
      <div className="absolute inset-0 hero-pattern z-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-conf-green-700/20 to-conf-green-600/10 z-10"></div>

      <div className="w-full px-2 relative z-30 min-h-[calc(100vh-5rem)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-start h-full">
          {/* Left Sidebar - Publication Partners */}
          <section className="hidden md:flex md:flex-col md:justify-start md:items-center md:col-span-2 relative z-40 pt-8 pl-2">
            <h2 className="font-bold text-lg text-center mb-4 underline">
              Publication Partners
            </h2>
            <img
              className="rounded-lg mb-2"
              width={200}
              src="/landing/springer_hori.jpg"
              alt="Springer Logo"
            />
            <img
              className="rounded-lg mb-2"
              width={200}
              src="/landing/journal.jpg"
              alt="Journal Logo"
            />
            <img
              className="rounded-lg mb-2"
              width={200}
              src="/landing/sigma.jpg"
              alt="Sigma Logo"
            />
            <p className="text-sm text-center font-semibold">
              More publication proposals awaiting confirmation
            </p>
          </section>

          {/* Main Content - Centered */}
          <div className="md:col-span-8 relative z-40 flex items-center justify-center min-h-[calc(100vh-5rem)]">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <img
                className=""
                width={200}
                src="/topSpringerLogo.png"
                alt="springer"
              />
              <h1 className="heading font-heading leading-tight">
                <span className="block highlighter1 mb-2">
                  1<sup>st</sup> International Conference
                  <br />
                  on
                </span>
                <span className="text-gray-900 block">
                  Thermo Fluids and
                  <span className="highlighter2"> Green Energy</span> Technology
                </span>
              </h1>
              <div className="py-8 inline-block">
                <span
                  className="bg-conf-green-100 text-conf-green-800 px-6 py-2 rounded-full normal-text font-bold shadow-sm 
                               hover:scale-105 hover:shadow-lg hover:bg-conf-green-200 pillbox-animate"
                >
                  January 16-18, 2026 (Hybrid Mode)
                </span>
              </div>
              <p className="normal-text pb-4 max-w-3xl leading-relaxed">
                A platform for academicians, designers, researchers and
                consumers to exchange and share ideas, experiences and research
                results.
              </p>
              <p className="normal-text font-semibold italic pb-8 ">
                "From Present to Future Engineering Solutions"
              </p>
              <div className="flex flex-wrap gap-4 justify-center pb-8">
                <Button className="bg-conf-green-600 hover:bg-conf-green-700 text-white px-8 py-4 h-auto normal-text font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <a href="https://cmt3.research.microsoft.com/TFGET2026">
                    Submit Abstract
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-conf-green-600 text-conf-green-600 hover:bg-conf-green-50 px-8 py-4 h-auto normal-text font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="https://cmt3.research.microsoft.com/TFGET2026">
                    Submit Paper
                  </a>
                </Button>
              </div>

              <div className="flex items-center">
                <div className="flex flex-col items-center">
                  <p className="normal-text font-semibold mb-2">Organized by</p>
                  <p className="normal-text md:text-xl font-semibold">
                    Department of Mechanical Engineering
                  </p>
                  <p className="normal-text md:text-xl font-semibold">
                    Dr. B.R Ambedkar National Institute of Technology Jalandhar
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Sponsors */}
          <section className="hidden md:flex md:flex-col md:justify-start md:items-center md:col-span-2 relative z-40 pt-8 pr-2">
            <img
              className="rounded-lg mb-4"
              width={200}
              src="/landing/GoldenTemple.webp"
              alt="Golden Temple"
            />
            <h2 className="font-bold text-lg text-center mb-2 underline">
              Our Sponsors
            </h2>
            <img
              className="rounded-lg"
              width={200}
              src="/sponsors/manik_sponsor.jpg"
              alt="Manik Sponsor"
            />
            <p className="text-sm text-center font-semibold">
              More sponsors are awaiting confirmation
            </p>
          </section>
        </div>

        {/* Scroll down arrow */}
        <div className="absolute bottom-1 left-0 right-0 flex justify-center animate-bounce z-40">
          <a
            href="#about"
            className="text-gray-500 hover:text-conf-green-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>

        {/* Mobile sections */}
        <section className="pt-8 gap-4 flex flex-col justify-between items-center md:hidden relative z-40">
          <h2 className="font-bold text-center">Publication Partners</h2>
          <img
            className="rounded-lg"
            width={250}
            src="/landing/journal.jpg"
            alt="Journal Logo"
          />
          <img
            className="rounded-lg"
            width={250}
            src="/landing/sigma.jpg"
            alt="Sigma Logo"
          />
          <img
            className="rounded-lg"
            width={250}
            src="/landing/springer_hori.jpg"
            alt="Springer Logo"
          />
          <p className="text-sm text-center font-semibold">
            More publication proposals awaiting confirmation
          </p>
        </section>

        <section className="flex flex-row gap-2 justify-center items-start md:hidden relative z-40 pt-8">
          <section className="flex flex-col gap-2 justify-start items-center">
            <h2 className="font-bold text-lg text-center mb-2 underline">
              Our Sponsors
            </h2>
            <img
              className="rounded-lg"
              width={250}
              src="/sponsors/manik_sponsor.jpg"
              alt="Manik Sponsor"
            />
            <p className="text-sm text-center font-semibold">
              More sponsors are awaiting confirmation
            </p>
          </section>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;
