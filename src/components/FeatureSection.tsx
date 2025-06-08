import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">Our Story</span>
            <h2 className="text-4xl font-medium leading-tight">Preserving Denpasar's Artistic Legacy</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Each piece in the Tenun Alus Maura collection is meticulously handcrafted by skilled artisans in Denpasar, blending traditional     Balinese weaving techniques with contemporary design aesthetics. We work directly with local artisan communities to ensure fair trade practices and to safeguard the authenticity and legacy of Balinese endek weaving.


            </p>
            <div className="grid grid-cols-3 gap-8 pt-6">
              <div>
                <p className="text-3xl font-medium mb-2">50+</p>
                <p className="text-gray-600">Master Artisans</p>
              </div>
              <div>
                <p className="text-3xl font-medium mb-2">100%</p>
                <p className="text-gray-600">Handcrafted</p>
              </div>
              <div>
                <p className="text-3xl font-medium mb-2">25+</p>
                <p className="text-gray-600">Years Legacy</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://www.tenunalus.com/cdn/shop/files/pallavi-biru-kulit.jpg?v=1712915464"
              alt="Artisan crafting jewelry"
              className="w-full rounded-xl"
            />
            <img 
              src="https://www.tenunalus.com/cdn/shop/files/pallavi-orange-kulit.jpg?v=1712915465&width=1445"
              alt="Traditional Balinese jewelry"
              className="w-full rounded-xl mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;