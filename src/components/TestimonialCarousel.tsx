import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Interior Designer",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "The authentic Endek Bali weaving in each piece tells a story of Indonesian heritage. The ATBM craftsmanship is absolutely exceptional!"
  },
  {
    id: 2,
    name: "David Miller",
    role: "Fashion Collector",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Exceptional quality and attention to traditional weaving techniques. Each piece from Tenunalus MAURA is a masterpiece of Indonesian artistry."
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Fashion Designer",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "The blend of traditional Indonesian weaving with modern fashion accessories is simply breathtaking. A true celebration of cultural heritage."
  },
  {
    id: 4,
    name: "Michael Wong",
    role: "Boutique Owner",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "These handcrafted accessories have become the highlight of my collection. The authenticity of Indonesian traditional weaving is unmatched."
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 3 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, handleNext]);

  return (
    <section id="testimonials" className="py-20 bg-stone-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-2xl font-medium">Words from Those Who Appreciate Authentic Craft</h2>
          <p className="text-gray-600">Discover why fashion enthusiasts and collectors choose Tenunalus MAURA for authentic Indonesian weaving</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full px-4 md:w-1/3"
                >
                  <div className="p-6 transition-shadow duration-300 bg-white shadow-sm rounded-xl hover:shadow-md">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="object-cover w-20 h-20 mb-4 rounded-full"
                      />
                      <p className="mb-4 text-gray-600">{testimonial.text}</p>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 p-2 transition-shadow -translate-x-4 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 p-2 transition-shadow translate-x-4 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(testimonials.length - 2)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentIndex === i ? 'bg-amber-700' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;