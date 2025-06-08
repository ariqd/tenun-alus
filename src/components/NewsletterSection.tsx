import React from 'react';
import { MessageCircle, Instagram, Globe } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-6">Join Our Global Community</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Be part of our mission to bring Indonesian traditional weaving to the global stage. Connect with us for exclusive updates, cultural insights, and early access to new collections that blend global aesthetics with local traditional richness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
              <MessageCircle size={20} />
              <span>Chat Now</span>
              <span className="text-green-400 text-sm ml-2">●</span>
            </button>
            <a 
              href="https://instagram.com/tenunalus.indonesia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
            >
              <Instagram size={20} />
              <span>@tenunalus.indonesia</span>
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-center gap-8 text-center">
              <div>
                <p className="text-2xl font-medium mb-1">Global</p>
                <p className="text-sm text-gray-600">Market Reach</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <p className="text-2xl font-medium mb-1">Cultural</p>
                <p className="text-sm text-gray-600">Sustainability</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div>
                <p className="text-2xl font-medium mb-1">Traditional</p>
                <p className="text-sm text-gray-600">ATBM Weaving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;