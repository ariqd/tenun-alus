import React from 'react';

const OurArtisans: React.FC = () => {
  return (
    <section id="artisans" className="py-20 bg-stone-50">
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
              <p className="text-gray-600">Years preserving Indonesian weaving traditions</p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-sm font-medium text-amber-700 tracking-wider uppercase">Our Founders</span>
            <h2 className="text-4xl font-medium leading-tight">Meet Mr & Mrs Maura</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                With over two decades of dedication to preserving Indonesia's rich textile heritage, Mr & Mrs Maura founded Tenunalus MAURA as a catalyst for bringing local wisdom to the global stage. Their mission centers on preserving, respecting, and promoting cultural sustainability through traditional weaving techniques.
              </p>
              <p>
                "We believe in creating collaborations that blend global aesthetics with local traditional richness," they share. Starting with authentic Endek Bali as our primary material, we're opening new markets and increasing penetration in local and global markets to introduce and promote the beauty of traditional Indonesian weaving.
              </p>
              <p>
                Their vision extends beyond business success - they're building partnerships that create positive cultural and environmental impact through unique, modern, and relevant fashion accessories that honor Indonesia's weaving heritage while meeting contemporary needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-2xl font-medium text-amber-700 mb-2">Global</p>
                <p className="text-gray-600">Market Expansion</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-2xl font-medium text-amber-700 mb-2">Cultural</p>
                <p className="text-gray-600">Partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurArtisans;