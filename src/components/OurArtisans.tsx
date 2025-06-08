import React from 'react';

const OurArtisans: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/1.png"
              alt="Mr & Mrs Maura of Tenun Alus"
              className="rounded-lg shadow-lg w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-4xl font-medium text-amber-700 mb-2">25+</p>
              <p className="text-gray-600">Years of artisanal excellence</p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-sm font-medium text-amber-700 tracking-wider uppercase">Our Founders</span>
            <h2 className="text-4xl font-medium leading-tight">Meet Mr & Mrs Maura</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                With over two decades of dedication to preserving Indonesia's rich textile heritage, Mr & Mrs Maura have transformed their passion for traditional craftsmanship into a thriving artisanal brand. Their journey began in the bustling streets of Denpasar, where they first dreamed of bridging traditional Indonesian weaving with contemporary design.
              </p>
              <p>
                "Our mission is to showcase the beauty of Indonesian craftsmanship while creating sustainable opportunities for local artisans," they share. Their commitment to authenticity and innovation has made Tenun Alus a beacon of artisanal excellence in modern fashion.
              </p>
              <p>
                Today, they lead a community of skilled artisans, ensuring that each piece not only meets the highest standards of quality but also tells a story of Indonesian heritage. Their vision has helped preserve traditional techniques while adapting them for the contemporary world.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-2xl font-medium text-amber-700 mb-2">50+</p>
                <p className="text-gray-600">Master Artisans</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-2xl font-medium text-amber-700 mb-2">1000+</p>
                <p className="text-gray-600">Unique designs created</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurArtisans;