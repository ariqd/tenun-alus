import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';

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
            <a
              href="https://wa.me/6282116803026?text=Hello!%20I%E2%80%99m%20interested%20in%20Tenun%20Alus%20Maura%E2%80%99s%20collection.%20Could%20you%20share%20more%20info%20and%20how%20to%20order?%20Thank%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white transition-colors bg-gray-900 rounded-full hover:bg-gray-800"
            >
              <MessageCircle size={20} />
              <span>Chat Now</span>
              <span className="ml-2 text-sm text-green-400">●</span>
            </a>
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
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
