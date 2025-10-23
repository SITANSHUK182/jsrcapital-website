// src/components/Layout/Header.tsx
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Only trigger scroll behavior on home page
      if (isHomePage) {
        setIsScrolled(scrollTop > 50);
      }
    };

    // Add scroll event listener only for home page
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      // Check initial scroll position
      handleScroll();
    } else {
      // For non-home pages, always use fixed state
      setIsScrolled(true);
    }

    // Cleanup
    return () => {
      if (isHomePage) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isHomePage]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || !isHomePage
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
      style={{
        borderBottom: (isScrolled || !isHomePage)
          ? 'none' 
          : '1px solid rgba(241, 239, 230, 0.3)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="transition-all duration-300 ease-in-out hover:scale-105"
              aria-label="JSR Capital Advisors - Home"
            >
              <img 
                src="/logo.svg" 
                alt="JSR Capital Advisors" 
                className={`h-10 w-auto transition-all duration-300 ease-in-out ${
                  isScrolled || !isHomePage
                    ? 'filter-none' 
                    : 'brightness-0 invert'
                }`}
              />
            </Link>
          </div>
          <Navbar isTransparent={!isScrolled && isHomePage} />
        </div>
      </div>
    </header>
  );
};

export default Header;