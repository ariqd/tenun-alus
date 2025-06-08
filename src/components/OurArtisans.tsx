import React from 'react';

const OurArtisans: React.FC = () => {
  return (
    <section id="artisans" className="py-20 bg-stone-50">
      <div className="container px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src="/1.png"
              alt="Mr & Mrs Maura of Tenun Alus"
              className="rounded-lg shadow-lg w-full h-[600px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <span className="text-sm font-medium tracking-wider uppercase text-amber-700">Our Founders</span>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurArtisans;