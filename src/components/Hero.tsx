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

  return (
    <section id="home" className="relative h-[85vh] mt-16">
      <div className="absolute inset-0">
        <img
          src="/backg (3).png"
          alt="Tenun Alus product collection"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      </div>
      <div className="relative flex items-center h-full">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-5xl font-medium leading-tight text-white md:text-6xl">
              Bringing Indonesian Heritage to the Global Stage
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-white/90">
              Preserving cultural sustainability through authentic Endek Bali and traditional ATBM weaving in modern, relevant fashion accessories.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleScrollToProducts}
                className="px-8 py-4 text-lg font-medium text-gray-900 transition-colors bg-white rounded-full cursor-pointer hover:bg-gray-100"
              >
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;