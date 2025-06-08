import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-8">
          {/* Left column - About section */}
          <div className="col-span-12 lg:col-span-4 ml-10">
            <h3 className="text-xl font-medium mb-6">About Tenun Alus</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We're dedicated to preserving and sharing the rich heritage of Balinese craftsmanship through our handcrafted accessories. Each piece tells a story of tradition, innovation, and sustainable artistry.
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-medium mb-4">Customer Care</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/faq" className="hover:text-amber-700 transition-colors">FAQ</a></li>
                  <li><a href="/shipping" className="hover:text-amber-700 transition-colors">Shipping & Returns</a></li>
                  <li><a href="/contact" className="hover:text-amber-700 transition-colors">Contact Us</a></li>
                  <li><a href="/terms" className="hover:text-amber-700 transition-colors">Terms & Conditions</a></li>
                  <li><a href="/privacy" className="hover:text-amber-700 transition-colors">Privacy Policy</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-4">Visit Our Store</h3>
                <p>Jalan Raya Ubud No. 88</p>
                <p>Denpasar, Bali 80571</p>
              </div>

              <div>
                <h3 className="font-medium mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/whatsapp" className="hover:text-amber-700 transition-colors">WhatsApp</a></li>
                  <li><a href="/instagram" className="hover:text-amber-700 transition-colors">Instagram</a></li>
                  <li><a href="/facebook" className="hover:text-amber-700 transition-colors">Facebook</a></li>
                  <li><a href="/email" className="hover:text-amber-700 transition-colors">Email</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-4">Business Hours</h3>
                <div className="text-sm text-gray-600 space-y-3">
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
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Tenun Alus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;