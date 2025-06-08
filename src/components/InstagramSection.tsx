import React from 'react';

const images = [
  "https://www.tenunalus.com/cdn/shop/files/pallavi-orange-kulit.jpg?v=1712915465&width=1445",
  "https://www.tenunalus.com/cdn/shop/files/pallavi-biru-kulit.jpg?v=1712915464",
  "https://www.tenunalus.com/cdn/shop/files/pallavi-biru-kulit.jpg?v=1712915464",
  "https://www.tenunalus.com/cdn/shop/files/pallavi-orange-kulit.jpg?v=1712915465&width=1445",
  "https://www.tenunalus.com/cdn/shop/files/pallavi-biru-kulit.jpg?v=1712915464"
];

const InstagramSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600">Follow us on</p>
          <a href="https://instagram.com" className="text-lg font-medium hover:text-gray-600">
            Instagram @tenunalus.indonesia
          </a>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {images.map((image, index) => (
            <a 
              key={index}
              href="https://instagram.com"
              className="aspect-square overflow-hidden"
            >
              <img 
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;