import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  description: string;
  details?: {
    fullDescription?: string;
    fitFor?: string;
    size?: {
      height: string;
      length: string;
      shortStrap: string;
      longStrap: string;
    };
    features?: string[];
  };
}

const categories: Category[] = [
  {
    id: 1,
    name: "Talina",
    description: "Elegant bag straps showcasing traditional Indonesian weaving for global markets"
  },
  {
    id: 2,
    name: "Hobler Holder",
    description: "Stylish holders crafted with Endek Bali fabric, blending tradition with modern practicality",
    details: {
      fullDescription: "The Hobler Tumbler Holder is more than just an accessory; it is a reflection of our dedication to preserving and promoting the beauty of Bali's cultural heritage. Choose Hobler as the faithful companion for your tumbler, combining traditional elegance with modern practicality.",
      fitFor: "Motivation bottle 2L",
      size: {
        height: "23 cm",
        length: "12 cm (diameter)",
        shortStrap: "23 cm",
        longStrap: "130 cm"
      },
      features: [
        "Water shield lining",
        "Traditional Balinese Endek Woven",
        "Webbing polyester adjustable strap"
      ]
    }
  },
  {
    id: 3,
    name: "Mawra Bag",
    description: "Contemporary bags featuring authentic ATBM weaving for cultural sustainability"
  },
  {
    id: 4,
    name: "Sangrianusa Holder",
    description: "Uniquely designed holders promoting Indonesian traditional motifs globally"
  },
  {
    id: 5,
    name: "Mukuta Hat",
    description: "Traditional-inspired headwear bringing local wisdom to international fashion"
  },
  {
    id: 6,
    name: "Karllet Wallet",
    description: "Handcrafted wallets combining Indonesian textiles with global design aesthetics"
  },
  {
    id: 7,
    name: "Kirana Strap",
    description: "Beautifully woven straps using traditional ATBM tools for modern applications"
  },
  {
    id: 8,
    name: "Carriena Bag",
    description: "Elegant bags featuring authentic Indonesian weaving for global market penetration"
  },
  {
    id: 9,
    name: "Jagadhita Bag",
    description: "Luxurious tote bags showcasing traditional Endek Bali for cultural preservation"
  }
];

const Categories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

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

  const toggleExpanded = (categoryId: number) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section id="collections" className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-medium mb-4">Our Collections</h2>
          <p className="text-gray-600">Discover our carefully curated categories bringing Indonesian traditional weaving to the global stage</p>
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
                      
                      {category.details && (
                        <div className="mb-6">
                          <button
                            onClick={() => toggleExpanded(category.id)}
                            className="inline-flex items-center text-amber-700 hover:text-amber-800 transition-colors text-sm font-medium mb-4"
                          >
                            {expandedCategory === category.id ? 'Hide details' : 'View detailed specs'}
                            <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${expandedCategory === category.id ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {expandedCategory === category.id && (
                            <div className="space-y-4 text-sm bg-amber-50 p-4 rounded-lg">
                              <p className="text-gray-700 leading-relaxed font-medium">
                                {category.details.fullDescription}
                              </p>
                              
                              {category.details.fitFor && (
                                <div className="bg-white p-3 rounded">
                                  <h4 className="font-semibold text-amber-800 mb-1">Perfect For:</h4>
                                  <p className="text-gray-700">{category.details.fitFor}</p>
                                </div>
                              )}
                              
                              {category.details.size && (
                                <div className="bg-white p-3 rounded">
                                  <h4 className="font-semibold text-amber-800 mb-2">Dimensions:</h4>
                                  <div className="grid grid-cols-2 gap-2 text-gray-700">
                                    <div>Height: <span className="font-medium">{category.details.size.height}</span></div>
                                    <div>Diameter: <span className="font-medium">{category.details.size.length}</span></div>
                                    <div>Short strap: <span className="font-medium">{category.details.size.shortStrap}</span></div>
                                    <div>Long strap: <span className="font-medium">{category.details.size.longStrap}</span></div>
                                  </div>
                                </div>
                              )}
                              
                              {category.details.features && (
                                <div className="bg-white p-3 rounded">
                                  <h4 className="font-semibold text-amber-800 mb-2">Key Features:</h4>
                                  <ul className="text-gray-700 space-y-1">
                                    {category.details.features.map((feature, index) => (
                                      <li key={index} className="flex items-start">
                                        <span className="text-amber-600 mr-2">•</span>
                                        <span>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                      
                      <a 
                        href={`/category/${category.id}`}
                        className="inline-flex items-center text-amber-700 hover:text-amber-800 transition-colors mt-auto"
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