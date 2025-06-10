import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../public/logo.png';
import { usePostHog } from 'posthog-js/react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const posthog = usePostHog();

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Collections', href: '#collections' },
    { label: 'Artisans', href: '#artisans' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Features', href: '#features' },
    // { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleMenuClick = (href: string, label: string, isMobile: boolean) => {
    setIsMenuOpen(false);


    // Track navigation click
    posthog.capture('navigation_click', {
      section: label,
      href: href,
      device: isMobile ? 'mobile' : 'desktop'
    });

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
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick('#home', 'Home', false);
              }}
              className="text-3xl font-medium transition-colors text-amber-700 hover:text-amber-800"
            >
              {/* Tenunalus MAURA */}
              <img src={logo} alt="Tenunalus MAURA" className="h-[150px]" />
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
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.href, item.label, false);
                }}
                className="text-sm font-medium text-gray-600 transition-colors cursor-pointer hover:text-amber-700"
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
                  handleMenuClick(item.href, item.label, true);
                }}
                className="block px-4 py-2 text-gray-600 transition-colors rounded-lg cursor-pointer hover:bg-amber-50 hover:text-amber-700"
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