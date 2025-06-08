import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Left column - About section */}
          <div className="col-span-12 ml-10 lg:col-span-5">
            <h3 className="mb-6 text-xl font-medium">About Tenunalus MAURA</h3>
            <p className="mb-6 leading-relaxed text-gray-600">
              We're a catalyst in bringing the beauty and traditions of Indonesian local wisdom to the global stage. Through authentic Endek Bali and traditional ATBM weaving techniques, we create unique, modern, and relevant fashion accessories that preserve cultural sustainability while making a positive environmental impact.
            </p>
          </div>

          {/* Right columns */}
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div>
                <h3 className="mb-4 font-medium">Store</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <a
                    href='https://maps.app.goo.gl/Vkojf56hCvgdXcKD8'
                    target='_blank'
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-amber-700">
                    Ganidha Apartment, Jl. Gn. Soputan, Pemecutan Klod. Denpasar, Bali.
                  </a>
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-medium">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <a
                      href="https://wa.me/6282116803026?text=Hello!%20I%E2%80%99m%20interested%20in%20Tenun%20Alus%20Maura%E2%80%99s%20collection.%20Could%20you%20share%20more%20info%20and%20how%20to%20order?%20Thank%20you!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-amber-700">
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/tenunalus.indonesia"
                      target="_blank"
                      rel="noopener noreferrer" className="transition-colors hover:text-amber-700">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-medium">Business Hours</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <p className="font-medium">Monday - Friday</p>
                    <p>09:00 - 17:00</p>
                  </div>
                  <div>
                    <p className="font-medium">Saturday</p>
                    <p>10:00 - 15:00</p>
                  </div>
                  <div>
                    <p className="font-medium">Sunday</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 text-sm text-center text-gray-600 border-t">
          <p>© {new Date().getFullYear()} Tenunalus MAURA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
