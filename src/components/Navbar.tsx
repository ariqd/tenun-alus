import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Collections', href: '#collections' },
    { label: 'Artisans', href: '#artisans' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Features', href: '#features' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 140; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4">
        {/* Top bar with logo */}
        <div className="flex items-center justify-between h-20 border-b">
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo - centered */}
          <div className="flex-1 flex justify-center">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick('#home');
              }}
              className="text-3xl font-medium text-amber-700 hover:text-amber-800 transition-colors"
            >
              Tenunalus MAURA
            </a>
          </div>

          {/* Empty div to maintain layout */}
          <div className="w-10 lg:hidden"></div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-center py-4">
          <div className="flex items-center space-x-12">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.href);
                }}
                className="text-gray-600 hover:text-amber-700 transition-colors text-sm font-medium cursor-pointer"
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
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.href);
                }}
                className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors cursor-pointer"
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