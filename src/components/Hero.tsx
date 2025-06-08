import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      const navHeight = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToArtisans = () => {
    const element = document.querySelector('#artisans');
    if (element) {
      const navHeight = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-[85vh] mt-16">
      <div className="absolute inset-0">
        <img 
          src="/backg (3).png"
          alt="Tenun Alus product collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-medium text-white mb-6 leading-tight">
              Bringing Indonesian Heritage to the Global Stage
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Preserving cultural sustainability through authentic Endek Bali and traditional ATBM weaving in modern, relevant fashion accessories.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={handleScrollToProducts}
                className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg font-medium cursor-pointer"
              >
                Explore Collection
              </button>
              <button 
                onClick={handleScrollToArtisans}
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-lg font-medium cursor-pointer"
              >
                Our Heritage
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;