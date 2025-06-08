import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  description: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Talina",
    description: "Elegant handwoven textiles for modern sophistication"
  },
  {
    id: 2,
    name: "Hobler Holder",
    description: "Stylish and practical accessories for everyday use"
  },
  {
    id: 3,
    name: "Mawra Bag",
    description: "Contemporary bags with traditional craftsmanship"
  },
  {
    id: 4,
    name: "Sangrianusa Holder",
    description: "Uniquely designed holders with cultural elements"
  },
  {
    id: 5,
    name: "Mukuta Hat",
    description: "Traditional-inspired headwear with modern appeal"
  },
  {
    id: 6,
    name: "Karllet Wallet",
    description: "Handcrafted wallets combining style and functionality"
  },
  {
    id: 7,
    name: "Kirana Strap",
    description: "Beautifully woven straps for versatile use"
  },
  {
    id: 8,
    name: "Carriena Bag",
    description: "Elegant bags featuring traditional weaving patterns"
  },
  {
    id: 9,
    name: "Jagadhita Bag",
    description: "Luxurious bags with authentic cultural details"
  }
];

const Categories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 3 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === categories.length - 3 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-medium mb-4">Our Collections</h2>
          <p className="text-gray-600">Discover our carefully curated categories of handcrafted treasures</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {categories.map((category) => (
                <div 
                  key={category.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                    <div className="flex flex-col h-full">
                      <h3 className="text-2xl font-medium text-amber-700 mb-4">{category.name}</h3>
                      <p className="text-gray-600 mb-6 flex-grow">{category.description}</p>
                      <a 
                        href={`/category/${category.id}`}
                        className="inline-flex items-center text-amber-700 hover:text-amber-800 transition-colors"
                      >
                        Explore Collection
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Previous category"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Next category"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(categories.length - 2)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  currentIndex === i ? 'bg-amber-700' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;