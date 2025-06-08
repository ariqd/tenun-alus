import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#products' },
    { label: 'Collections', href: '#collections' },
    { label: 'Artisans', href: '#artisans' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Features', href: '#features' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container px-4 mx-auto">
        {/* Top bar with logo */}
        <div className="flex items-center justify-between h-20 border-b">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 lg:hidden hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo - centered */}
          <div className="flex justify-center flex-1">
            <a href="/" className="text-3xl font-medium text-amber-700">
              Tenun Alus
            </a>
          </div>

          {/* Empty div to maintain layout */}
          <div className="w-10 lg:hidden"></div>
        </div>

        {/* Desktop Navigation */}
        <div className="justify-center hidden py-4 lg:flex">
          <div className="flex items-center space-x-12">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-amber-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-gray-600 transition-colors rounded-lg hover:bg-amber-50 hover:text-amber-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;