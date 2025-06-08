import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York",
    text: "The quality of the Tenun Alus Maura pieces is extraordinary. The craftsmanship tells a story of tradition and care that you simply don't find in mass-produced textiles."
  },
  {
    id: 2,
    name: "David Chen",
    location: "Singapore",
    text: "I purchased a Songket runner for my dining table and it has transformed the entire room. The colors are vibrant and the pattern is exquisite. Worth every penny."
  },
  {
    id: 3,
    name: "Amira Hassan",
    location: "Jakarta",
    text: "As someone who appreciates traditional crafts, I'm impressed by how Tenun Alus Maura balances heritage techniques with contemporary design. Simply beautiful."
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-stone-50">
      <div className="container px-4 mx-auto md:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-3 font-serif text-2xl font-medium md:text-3xl">What Our Customers Say</h2>
          <p className="text-gray-600">Hear from those who have brought our textiles into their homes and lives</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#B45309" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#B45309" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#B45309" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#B45309" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#B45309" />
                </svg>
              </div>
              <p className="mb-4 italic text-gray-700">{testimonial.text}</p>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;