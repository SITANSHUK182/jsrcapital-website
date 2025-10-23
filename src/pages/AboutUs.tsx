// src/pages/AboutUs.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Who We Are Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading" style={{ color: '#13293D' }}>
                Who We Are
              </h2>
            </div>
            
            <div className="space-y-8 text-center">
              <p className="text-xl md:text-2xl leading-relaxed font-body" style={{ color: '#141301' }}>
                JSR Capital Advisors is a premier financial advisory firm that redefines the intersection 
                of legal expertise and sophisticated financial strategy. We are not just advisors—we are 
                architects of financial transformation.
              </p>
              
              <p className="text-lg leading-relaxed font-body max-w-3xl mx-auto" style={{ color: '#141301' }}>
                Founded on the principle that every financial decision must be both legally sound and 
                strategically optimal, we bring together seasoned professionals with deep expertise across 
                corporate finance, legal frameworks, and market dynamics. Our multidisciplinary approach 
                ensures that our clients receive comprehensive solutions that drive measurable results and 
                create lasting competitive advantages.
              </p>
              
              <p className="text-lg leading-relaxed font-body max-w-3xl mx-auto" style={{ color: '#141301' }}>
                From emerging growth companies to established market leaders, we partner with organizations 
                that demand excellence and understand that exceptional outcomes require both precision and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24" style={{ backgroundColor: '#F1EFE6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading" style={{ color: '#13293D' }}>
                Our Mission
              </h2>
            </div>
            
            <div className="text-center">
              <p className="text-xl md:text-2xl leading-relaxed font-body" style={{ color: '#141301' }}>
                We are dedicated to providing comprehensive financial advisory services that 
                empower businesses to achieve their strategic objectives. Our team of experienced 
                professionals combines deep industry knowledge with innovative solutions to deliver 
                exceptional value to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading" style={{ color: '#13293D' }}>
                Our Values
              </h2>
              <p className="text-xl font-body max-w-3xl mx-auto" style={{ color: '#141301' }}>
                Our core values guide every decision we make and every relationship we build, 
                ensuring that we consistently deliver excellence and integrity in all our endeavors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Value 1 - Excellence */}
              <div className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" 
                   style={{ backgroundColor: '#F1EFE6' }}>
                <div className="w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center" 
                     style={{ backgroundColor: '#13293D' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading" style={{ color: '#13293D' }}>
                  Excellence
                </h3>
                <p className="font-body" style={{ color: '#141301' }}>
                  We pursue the highest standards in everything we do, from our analytical rigor 
                  to our client service, ensuring exceptional outcomes that exceed expectations.
                </p>
              </div>

              {/* Value 2 - Integrity */}
              <div className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" 
                   style={{ backgroundColor: '#F1EFE6' }}>
                <div className="w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center" 
                     style={{ backgroundColor: '#265CC7' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading" style={{ color: '#13293D' }}>
                  Integrity
                </h3>
                <p className="font-body" style={{ color: '#141301' }}>
                  We operate with unwavering ethical standards, building trust through transparency, 
                  honesty, and accountability in every client relationship and business decision.
                </p>
              </div>

              {/* Value 3 - Innovation */}
              <div className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" 
                   style={{ backgroundColor: '#F1EFE6' }}>
                <div className="w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center" 
                     style={{ backgroundColor: '#DE6449' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading" style={{ color: '#13293D' }}>
                  Innovation
                </h3>
                <p className="font-body" style={{ color: '#141301' }}>
                  We continuously evolve our methodologies and solutions, leveraging cutting-edge 
                  financial strategies and technologies to solve complex challenges.
                </p>
              </div>

              {/* Value 4 - Collaboration */}
              <div className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" 
                   style={{ backgroundColor: '#F1EFE6' }}>
                <div className="w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center" 
                     style={{ backgroundColor: '#13293D' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading" style={{ color: '#13293D' }}>
                  Collaboration
                </h3>
                <p className="font-body" style={{ color: '#141301' }}>
                  We believe in the power of partnership, working closely with our clients as an 
                  extension of their team to achieve shared objectives and mutual success.
                </p>
              </div>

              {/* Value 5 - Results-Driven */}
              <div className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" 
                   style={{ backgroundColor: '#F1EFE6' }}>
                <div className="w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center" 
                     style={{ backgroundColor: '#265CC7' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading" style={{ color: '#13293D' }}>
                  Results-Driven
                </h3>
                <p className="font-body" style={{ color: '#141301' }}>
                  We measure our success by the tangible value we create for our clients, focusing 
                  on measurable outcomes that drive sustainable business growth.
                </p>
              </div>

              {/* Value 6 - Precision */}
              <div className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" 
                   style={{ backgroundColor: '#F1EFE6' }}>
                <div className="w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center" 
                     style={{ backgroundColor: '#DE6449' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading" style={{ color: '#13293D' }}>
                  Precision
                </h3>
                <p className="font-body" style={{ color: '#141301' }}>
                  Every analysis, recommendation, and solution we deliver is meticulously crafted 
                  with attention to detail that ensures accuracy and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24" style={{ backgroundColor: '#F1EFE6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading" style={{ color: '#13293D' }}>
                Our Expertise
              </h2>
            </div>
            
            <div className="space-y-8">
              <p className="text-lg leading-relaxed font-body text-center" style={{ color: '#141301' }}>
                With years of experience in the financial services industry, we specialize in:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-3 font-heading" style={{ color: '#13293D' }}>
                    Corporate Finance
                  </h3>
                  <p className="font-body" style={{ color: '#141301' }}>
                    Capital structure optimization and strategic financial structuring for complex business needs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-3 font-heading" style={{ color: '#13293D' }}>
                    Business Valuation & Financial Modeling
                  </h3>
                  <p className="font-body" style={{ color: '#141301' }}>
                    Precise valuations and advanced modeling for critical decision-making processes.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-3 font-heading" style={{ color: '#13293D' }}>
                    Transaction Advisory Services
                  </h3>
                  <p className="font-body" style={{ color: '#141301' }}>
                    Expert guidance through complex M&A transactions and strategic partnerships.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-3 font-heading" style={{ color: '#13293D' }}>
                    Debt Syndication
                  </h3>
                  <p className="font-body" style={{ color: '#141301' }}>
                    Optimized debt structuring and syndication solutions for capital efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 text-white" style={{ backgroundColor: '#141301' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto font-body" style={{ color: '#F1EFE6' }}>
              Experience the difference that legal precision and financial expertise can make 
              for your business. Let's discuss how we can help you achieve your strategic objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact-us" 
                className="inline-block px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-body text-lg"
                style={{ 
                  backgroundColor: '#F1EFE6', 
                  color: '#13293D' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#265CC7';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F1EFE6';
                  e.currentTarget.style.color = '#13293D';
                }}
              >
                Get in Touch
              </Link>
              
              <Link 
                to="/portfolio" 
                className="inline-block px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 font-body text-lg"
                style={{ 
                  borderColor: '#F1EFE6', 
                  color: '#F1EFE6' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F1EFE6';
                  e.currentTarget.style.color = '#13293D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#F1EFE6';
                }}
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;