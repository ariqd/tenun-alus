import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <span className="text-sm font-medium tracking-wider text-gray-500 uppercase">Our Mission</span>
            <h2 className="text-4xl font-medium leading-tight">Cultural Sustainability Through Traditional Weaving</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              We preserve, respect, and promote cultural sustainability through the use of traditional weaving in every product that adds value for customers. Each piece showcases authentic Endek Bali crafted with non-mechanical weaving tools (ATBM), creating a positive impact on culture and the environment through unique, modern, and relevant fashion accessories.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://www.tenunalus.com/cdn/shop/files/pallavi-biru-kulit.jpg?v=1712915464"
              alt="Traditional Indonesian weaving process"
              className="w-full rounded-xl"
            />
            <img
              src="https://www.tenunalus.com/cdn/shop/files/pallavi-orange-kulit.jpg?v=1712915465&width=1445"
              alt="Authentic Endek Bali fabric"
              className="w-full mt-8 rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;