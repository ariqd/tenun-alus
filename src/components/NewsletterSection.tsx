import React from 'react';
import { MessageCircle, Instagram, Globe } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-medium">Join Our Global Community</h2>
          <p className="mb-8 text-lg text-gray-600">
            Be part of our mission to bring Indonesian traditional weaving to the global stage. Connect with us for exclusive updates, cultural insights, and early access to new collections that blend global aesthetics with local traditional richness.
          </p>

          <div className="flex flex-col justify-center gap-4 mb-12 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white transition-colors bg-gray-900 rounded-full hover:bg-gray-800">
              <MessageCircle size={20} />
              <span>Chat Now</span>
              <span className="ml-2 text-sm text-green-400">●</span>
            </button>
            <a
              href="https://instagram.com/tenunalus.indonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-900 transition-colors border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white"
            >
              <Instagram size={20} />
              <span>@tenunalus.indonesia</span>
            </a>
          </div>

          <div className="p-6 bg-white shadow-sm rounded-xl">
            <div className="flex items-center justify-center gap-8 text-center">
              <div>
                <p className="mb-1 text-2xl font-medium">Global</p>
                <p className="text-sm text-gray-600">Market Reach</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <p className="mb-1 text-2xl font-medium">Cultural</p>
                <p className="text-sm text-gray-600">Sustainability</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <p className="mb-1 text-2xl font-medium">Traditional</p>
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