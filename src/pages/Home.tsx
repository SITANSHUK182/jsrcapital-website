// src/pages/Home.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { ServiceCardProps } from '../types';

const Home: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale, .stagger-children, .portfolio-grid, .stat-number, .service-card'
    );
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Mumbai Background and Right-to-Left Gradient */}
      <section 
        className="min-h-screen flex items-center py-20 relative"
        style={{ backgroundColor: '#F1EFE6' }}
      >
        {/* Mumbai Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/mumbai.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Gradient Overlay - Right opaque to Left black (extended 65% coverage) */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to left, transparent 0%, transparent 35%, rgba(0, 0, 0, 0.3) 45%, rgba(0, 0, 0, 0.7) 65%, rgba(0, 0, 0, 0.9) 100%)'
            }}
          ></div>
        </div>
        
        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight">
                  <span style={{ color: '#F1EFE6' }}>Financial Prowess.</span><br />
                  <span style={{ color: '#DE6449' }}>Legal Precision.</span>
                </h1>
                
                <div className="hero-subtitle w-24 h-1" style={{ backgroundColor: '#F1EFE6' }}></div>
                
                <p className="hero-description text-xl md:text-2xl leading-relaxed font-body max-w-2xl" style={{ color: '#F1EFE6' }}>
                  JSR Capital Advisors partners differently to unlock opportunity and help 
                  businesses create exceptional financial outcomes through sophisticated advisory services.
                </p>
                
                <p className="hero-description text-lg leading-relaxed font-body max-w-xl" style={{ color: 'rgba(241, 239, 230, 0.9)' }}>
                  We combine deep legal expertise with financial innovation to deliver 
                  transformative solutions that exceed expectations.
                </p>
              </div>
              
              <div className="hero-button flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/contact-us" 
                  className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-body text-lg min-w-[200px]"
                  style={{ backgroundColor: '#265CC7' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#DE6449';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#265CC7';
                  }}
                >
                  Partner with us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link 
                  to="/portfolio" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-body text-lg min-w-[200px]"
                  style={{ 
                    borderColor: '#F1EFE6', 
                    color: '#F1EFE6',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F1EFE6';
                    e.currentTarget.style.color = '#13293D';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
                    e.currentTarget.style.color = '#F1EFE6';
                  }}
                >
                  View Our Portfolio
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Right Column - Empty for background visibility */}
            <div className="hidden lg:block">
              {/* Empty space to maintain grid layout */}
            </div>
          </div>
        </div>
      </section>

      {/* Brief About Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="fade-in-up text-4xl md:text-5xl font-bold mb-8 font-heading" style={{ color: '#13293D' }}>
              About JSR Capital Advisors
            </h2>
            
            <p className="fade-in-up text-xl md:text-2xl leading-relaxed mb-8 font-body" style={{ color: '#141301' }}>
              We are a premier financial advisory firm specializing in comprehensive solutions 
              that bridge legal expertise with sophisticated financial strategies.
            </p>
            
            <p className="fade-in-up text-lg leading-relaxed mb-12 font-body max-w-3xl mx-auto" style={{ color: '#141301' }}>
              Our multidisciplinary approach ensures every financial decision is legally sound, 
              strategically optimal, and precisely executed. From complex transactions to capital 
              restructuring, we deliver results that transform businesses and create lasting value 
              for our clients across diverse industries.
            </p>
            
            <div className="fade-in-up">
              <Link 
                to="/about-us" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 font-body text-lg"
                style={{ 
                  borderColor: '#13293D', 
                  color: '#13293D'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#265CC7';
                  e.currentTarget.style.borderColor = '#265CC7';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = '#13293D';
                  e.currentTarget.style.color = '#13293D';
                }}
              >
                Learn More About Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSR Insights Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="fade-in-up text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#DE6449' }}>
                Market Intelligence
              </p>
              <h2 className="fade-in-up text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: '#13293D' }}>
                JSR Insights
              </h2>
              <div className="w-16 h-1 mx-auto mb-6" style={{ backgroundColor: '#DE6449' }}></div>
              <p className="fade-in-up text-xl max-w-2xl mx-auto font-body" style={{ color: '#555' }}>
                Expert perspectives, market reports, and strategy articles from the JSR Capital team.
              </p>
            </div>

            {/* Dynamic Insights Grid */}
            {/* 
              TIPS FOR ADDING CONTENT:
              To add your PDFs or Links, update the 'insightsData' array below.
              For PDFs: Put your PDF files inside the '/public/documents/' folder and link them like '/documents/your-file.pdf'.
              For Links: Use any external URL like 'https://example.com'.
            */}
            {(() => {
              const insightsData: Array<{
                title: string;
                description: string;
                date: string;
                publisher: string;
                pdfUrl: string;
                webUrl: string;
                expert: string;
              }> = [
                {
                  title: "IPO Issuers Opt to Wait Rather Than Resize Offerings",
                  description: "Our Partner Sahil comments on the strategy of Indian IPO issuers preferring to delay market launches instead of resizing their capital mandates amidst dynamic market shifts.",
                  date: "June 03, 2026",
                  publisher: "The Hindu BusinessLine",
                  pdfUrl: "/documents/the_hindu_businessline_june_3rd.pdf",
                  webUrl: "https://www.thehindubusinessline.com/markets/stock-markets/ipo-issuers-opt-to-wait-rather-than-resize-offerings/article71053760.ece?shem=rimspwouoe",
                  expert: "Sahil"
                },
                {
                  title: "Arbitrage Hunters Eye SME Stocks for Migration Windfalls as Mainboard Stagnates",
                  description: "Our Founder & Partner, Sanket Jamuar, was quoted in Mint on the valuation opportunities arising from SME-to-mainboard migration, highlighting that the liquidity and institutional access discount attached to SME-listed companies often narrows significantly after migration.",
                  date: "May 25, 2026",
                  publisher: "Livemint (Mint)",
                  pdfUrl: "/documents/google.pdf",
                  webUrl: "https://www.livemint.com/market/arbitrage-hunters-eye-sme-stocks-for-migration-windfalls-as-mainboards-stagnate-nse-bse-markets-11779599538334.html?shem=rimspwouoe",
                  expert: "Sanket"
                }
              ];

              if (insightsData.length === 0) {
                return (
                  <div
                    className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed py-20 px-8 text-center"
                    style={{ borderColor: '#D8D3C8', backgroundColor: '#F9F7F2' }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                      style={{ backgroundColor: '#F1EFE6' }}
                    >
                      <svg className="w-8 h-8" style={{ color: '#DE6449' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 2v6h6M9 12h6M9 16h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 font-heading" style={{ color: '#13293D' }}>
                      Insights Coming Soon
                    </h3>
                    <p className="font-body" style={{ color: '#888', maxWidth: '360px' }}>
                      We are preparing reports and market analysis. Please check back shortly.
                    </p>
                  </div>
                );
              }

              return (
                <div className="border rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-sm" style={{ borderColor: '#D8D3C8', backgroundColor: '#F9F7F2' }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {insightsData.map((item, index) => (
                      <div key={index} className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div>
                        {/* Meta Category & Date */}
                        <div className="flex items-center justify-between mb-4">
                          <span 
                            className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                            style={{ 
                              backgroundColor: 'rgba(222, 100, 73, 0.1)', 
                              color: '#DE6449' 
                            }}
                          >
                            {item.publisher}
                          </span>
                          <span className="text-sm text-gray-500">{item.date}</span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-semibold mb-3 font-heading text-[#13293D] leading-snug">
                          {item.title}
                        </h3>
                        
                        {/* Quoted Expert Badge */}
                        <div className="inline-flex items-center gap-1.5 mb-5 px-2.5 py-1 rounded bg-gray-100 text-xs font-semibold text-gray-700">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          Featured Expert: {item.expert}
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 font-body text-sm mb-8 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Action Links (Dual Options) */}
                      <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-100 pt-6">
                        <a 
                          href={item.webUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-lg border text-sm font-semibold transition-all duration-200"
                          style={{ borderColor: '#265CC7', color: '#265CC7' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#265CC7';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#265CC7';
                          }}
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Read Online
                        </a>

                        <a 
                          href={item.pdfUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                          style={{ backgroundColor: '#DE6449', color: '#ffffff' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c4533a'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DE6449'}
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Download PDF
                        </a>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              );
            })()}

          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24" style={{ backgroundColor: '#F1EFE6' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="fade-in-up text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: '#13293D' }}>
              Our Services
            </h2>
            <p className="fade-in-up text-xl max-w-3xl mx-auto font-body" style={{ color: '#141301' }}>
              Comprehensive financial advisory services designed for sophisticated clients 
              who demand excellence and measurable results.
            </p>
          </div>

          <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Corporate Finance"
              description="Strategic capital solutions and sophisticated financial structuring for complex business needs."
              link="/services/corporate-finance"
            />
            <ServiceCard 
              title="Valuation & Business Modelling"
              description="Precise business valuations and advanced financial modeling for critical decision-making."
              link="/services/valuation-business-modelling"
            />
            <ServiceCard 
              title="Transaction Advisory Services"
              description="Expert guidance through complex M&A transactions and strategic partnerships."
              link="/services/transaction-advisory"
            />
            <ServiceCard 
              title="Debt Syndication"
              description="Optimized debt structuring and syndication solutions for capital efficiency."
              link="/services/debt-syndication"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="fade-in-up text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: '#13293D' }}>
                Why Choose JSR Capital Advisors
              </h2>
              <p className="fade-in-up text-xl max-w-3xl mx-auto font-body" style={{ color: '#141301' }}>
                Our unique combination of legal precision and financial expertise sets us apart 
                in the advisory landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="fade-in-up text-center p-6">
                <div className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center" 
                     style={{ backgroundColor: '#F1EFE6' }}>
                  <svg className="w-8 h-8" style={{ color: '#13293D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading" style={{ color: '#13293D' }}>
                  Proven Track Record
                </h3>
                <p className="text-gray-600 font-body">
                  10+ successful projects with measurable outcomes and exceptional client satisfaction.
                </p>
              </div>

              <div className="fade-in-up text-center p-6">
                <div className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center" 
                     style={{ backgroundColor: '#F1EFE6' }}>
                  <svg className="w-8 h-8" style={{ color: '#265CC7' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading" style={{ color: '#13293D' }}>
                  Legal Expertise
                </h3>
                <p className="text-gray-600 font-body">
                  Deep legal knowledge ensures every financial decision is compliant and optimized.
                </p>
              </div>

              <div className="fade-in-up text-center p-6">
                <div className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center" 
                     style={{ backgroundColor: '#F1EFE6' }}>
                  <svg className="w-8 h-8" style={{ color: '#DE6449' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading" style={{ color: '#13293D' }}>
                  Strategic Innovation
                </h3>
                <p className="text-gray-600 font-body">
                  Cutting-edge financial strategies that drive growth and competitive advantage.
                </p>
              </div>

              <div className="fade-in-up text-center p-6">
                <div className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center" 
                     style={{ backgroundColor: '#F1EFE6' }}>
                  <svg className="w-8 h-8" style={{ color: '#13293D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading" style={{ color: '#13293D' }}>
                  Dedicated Partnership
                </h3>
                <p className="text-gray-600 font-body">
                  Long-term relationships built on trust, transparency, and exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-24 text-white" style={{ backgroundColor: '#141301' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="fade-in-up text-4xl md:text-5xl font-bold mb-6 font-heading">
              Ready to Transform Your Business?
            </h2>
            <p className="fade-in-up text-xl mb-12 max-w-2xl mx-auto font-body" style={{ color: '#F1EFE6' }}>
              Connect with our expert advisors to discuss how we can help achieve 
              your most ambitious financial objectives through our proven advisory services.
            </p>
            <div className="fade-in-up">
              <Link 
                to="/contact-us" 
                className="inline-block px-12 py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-body text-lg"
                style={{ 
                  backgroundColor: '#F1EFE6', 
                  color: '#13293D' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#DE6449';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F1EFE6';
                  e.currentTarget.style.color = '#13293D';
                }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, link }) => (
  <Link to={link} className="service-card block group">
    <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 h-full group-hover:border-transparent overflow-hidden">
      {/* Hover Background */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
           style={{ backgroundColor: '#265CC7' }}>
      </div>
      
      {/* Service Icon */}
      <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 relative z-10" 
           style={{ backgroundColor: '#F1EFE6' }}>
        <svg className="w-8 h-8 transition-colors duration-300 group-hover:text-white" 
             style={{ color: '#13293D' }} 
             fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      
      <h3 className="text-xl font-semibold mb-4 font-heading text-[#13293D] group-hover:text-white transition-colors duration-300 relative z-10">
        {title}
      </h3>
      
      <p className="leading-relaxed font-body text-[#13293D] group-hover:text-gray-100 transition-colors duration-300 relative z-10">
        {description}
      </p>
      
      {/* Arrow Icon */}
      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2 relative z-10">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  </Link>
);

export default Home;