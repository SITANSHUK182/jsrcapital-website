// src/components/Navigation/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { ServiceLink } from '../../types';

interface NavbarProps {
  isTransparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isTransparent = false }) => {
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Clean up inline styles when transparency state changes
  useEffect(() => {
    const navLinks = document.querySelectorAll('[data-nav-link]');
    navLinks.forEach((link) => {
      const element = link as HTMLElement;
      element.style.color = '';
      element.style.backgroundColor = '';
    });
  }, [isTransparent]);

  const servicesLinks: ServiceLink[] = [
    { path: '/services/corporate-finance', label: 'Corporate Finance' },
    { path: '/services/valuation-business-modelling', label: 'Valuation & Business Modelling' },
    { path: '/services/transaction-advisory', label: 'Transaction Advisory Services' },
    { path: '/services/debt-syndication', label: 'Debt Syndication' }
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  // Helper function for hover effects
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = colors.hover;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const defaultColor = isTransparent ? 'white' : 'rgb(31, 41, 55)';
    e.currentTarget.style.color = defaultColor;
  };

  const handleDropdownMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = colors.hover;
    e.currentTarget.style.color = '#ffffff';
  };

  const handleDropdownMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = colors.dropdownText;
  };

  // Mobile menu hover handlers
  const handleMobileMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = colors.hover;
    e.currentTarget.style.color = '#ffffff';
  };

  const handleMobileMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = colors.dropdownText;
  };

  const handleMobileSubmenuMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = colors.hover;
    e.currentTarget.style.color = '#ffffff';
  };

  const handleMobileSubmenuMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = 'rgba(242, 239, 230, 0.8)';
  };

  // Color schemes based on state
  const colors = {
    text: isTransparent ? 'text-white' : 'text-gray-800',
    hover: '#DE6449', // Burnt-sienna for hover
    dropdownBg: '#141301',
    dropdownText: 'rgb(242, 239, 230)',
    dropdownHover: '#13293D'
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {/* About Link */}
        <Link 
          to="/about-us" 
          data-nav-link
          className={`${colors.text} px-3 py-2 rounded-md text-sm font-medium transition-colors font-body`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          About Us
        </Link>
        
        {/* Services Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button 
            data-nav-link
            className={`${colors.text} px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center font-body`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Our Services
            <svg 
              className={`ml-1 h-4 w-4 transform transition-transform duration-300 ease-in-out ${isServicesOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Desktop Dropdown */}
          <div 
            className={`absolute top-full left-0 w-64 rounded-md shadow-lg border z-50 overflow-hidden transition-all duration-300 ease-in-out ${
              isServicesOpen 
                ? 'max-h-80 opacity-100 translate-y-0' 
                : 'max-h-0 opacity-0 -translate-y-2'
            }`}
            style={{ 
              backgroundColor: colors.dropdownBg,
              borderColor: colors.dropdownBg
            }}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="py-2">
              {servicesLinks.map((service: ServiceLink, index) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className={`block px-4 py-2 text-sm transition-all duration-200 font-body transform ${
                    isServicesOpen ? 'translate-x-0' : '-translate-x-2'
                  }`}
                  style={{ 
                    color: colors.dropdownText,
                    transitionDelay: isServicesOpen ? `${index * 30}ms` : '0ms'
                  }}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Portfolio Link */}
        <Link 
          to="/portfolio" 
          data-nav-link
          className={`${colors.text} px-3 py-2 rounded-md text-sm font-medium transition-colors font-body`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Portfolio
        </Link>
        
        {/* Contact Link */}
        <Link 
          to="/contact-us" 
          data-nav-link
          className={`${colors.text} px-3 py-2 rounded-md text-sm font-medium transition-colors font-body`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Contact Us
        </Link>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-nav-link
          className={`${colors.text} p-2 rounded-md transition-colors relative`}
          aria-label="Toggle mobile menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            {/* Top Line */}
            <span 
              className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            {/* Middle Line */}
            <span 
              className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out mt-1 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            {/* Bottom Line */}
            <span 
              className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out mt-1 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`absolute top-full left-0 right-0 md:hidden shadow-lg border-t z-40 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
        style={{ 
          backgroundColor: colors.dropdownBg,
          borderTopColor: colors.dropdownBg
        }}
      >
        <div className="px-4 py-2 space-y-1">
          {/* About Us - Mobile */}
          <Link
            to="/about-us"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded-md transition-all duration-200 font-body transform hover:scale-105"
            style={{ color: colors.dropdownText }}
            onMouseEnter={handleMobileMouseEnter}
            onMouseLeave={handleMobileMouseLeave}
          >
            About Us
          </Link>

          {/* Services Section - Mobile */}
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left px-3 py-2 rounded-md transition-all duration-200 flex items-center justify-between font-body transform hover:scale-105"
              style={{ color: colors.dropdownText }}
              onMouseEnter={handleMobileMouseEnter}
              onMouseLeave={handleMobileMouseLeave}
            >
              Our Services
              <svg 
                className={`h-4 w-4 transform transition-transform duration-300 ease-in-out ${isServicesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mobile Services Submenu */}
            <div 
              className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                isServicesOpen 
                  ? 'max-h-64 opacity-100 mt-2' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              {servicesLinks.map((service: ServiceLink, index) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={closeMobileMenu}
                  className={`block px-3 py-2 text-sm transition-all duration-200 font-body transform hover:scale-105 ${
                    isServicesOpen ? 'translate-x-0' : '-translate-x-4'
                  }`}
                  style={{ 
                    color: 'rgba(242, 239, 230, 0.8)',
                    transitionDelay: isServicesOpen ? `${index * 50}ms` : '0ms',
                    borderRadius: '8px'
                  }}
                  onMouseEnter={handleMobileSubmenuMouseEnter}
                  onMouseLeave={handleMobileSubmenuMouseLeave}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Portfolio - Mobile */}
          <Link
            to="/portfolio"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded-md transition-all duration-200 font-body transform hover:scale-105"
            style={{ color: colors.dropdownText }}
            onMouseEnter={handleMobileMouseEnter}
            onMouseLeave={handleMobileMouseLeave}
          >
            Portfolio
          </Link>

          {/* Contact Us - Mobile */}
          <Link
            to="/contact-us"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded-md transition-all duration-200 font-body transform hover:scale-105"
            style={{ color: colors.dropdownText }}
            onMouseEnter={handleMobileMouseEnter}
            onMouseLeave={handleMobileMouseLeave}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;