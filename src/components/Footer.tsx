import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Left column - About section */}
          <div className="col-span-12 ml-10 lg:col-span-4">
            <h3 className="mb-6 text-xl font-medium">About Tenunalus MAURA</h3>
            <p className="mb-6 leading-relaxed text-gray-600">
              We're a catalyst in bringing the beauty and traditions of Indonesian local wisdom to the global stage. Through authentic Endek Bali and traditional ATBM weaving techniques, we create unique, modern, and relevant fashion accessories that preserve cultural sustainability while making a positive environmental impact.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-gray-600">
                  <p className="font-medium">Visit Our Store</p>
                  <p>Jalan Raya Ubud No. 88</p>
                  <p>Denpasar, Bali 80571</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-600">Contact</p>
                <p className="text-gray-600">+62 361 123456</p>
                <p className="text-gray-600">info@tenunalus.com</p>
              </div>
            </div>
          </div>

          {/* Right columns */}
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div>
                <h3 className="mb-4 font-medium">Customer Care</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/faq" className="transition-colors hover:text-amber-700">FAQ</a></li>
                  <li><a href="/shipping" className="transition-colors hover:text-amber-700">Shipping & Returns</a></li>
                  <li><a href="/contact" className="transition-colors hover:text-amber-700">Contact Us</a></li>
                  <li><a href="/terms" className="transition-colors hover:text-amber-700">Terms & Conditions</a></li>
                  <li><a href="/privacy" className="transition-colors hover:text-amber-700">Privacy Policy</a></li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-medium">Store</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Jalan Raya Ubud No. 88</p>
                  <p>Denpasar, Bali 80571</p>
                  <p>Indonesia</p>
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-medium">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/whatsapp" className="transition-colors hover:text-amber-700">WhatsApp</a></li>
                  <li><a href="/instagram" className="transition-colors hover:text-amber-700">Instagram</a></li>
                  <li><a href="/facebook" className="transition-colors hover:text-amber-700">Facebook</a></li>
                  <li><a href="/email" className="transition-colors hover:text-amber-700">Email</a></li>
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