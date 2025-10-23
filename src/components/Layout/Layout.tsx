// src/components/Layout/Layout.tsx
import React from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div 
      className="min-h-screen flex flex-col" 
      style={{ backgroundColor: 'rgb(242, 239, 230)' }}
    >
      <Header />
      <main 
        className={`flex-grow ${!isHomePage ? 'pt-16' : ''}`}
        style={{ backgroundColor: 'rgb(242, 239, 230)' }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;