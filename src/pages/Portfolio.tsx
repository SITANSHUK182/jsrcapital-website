// ===== src/pages/Portfolio.tsx =====
import React from 'react';
import { Link } from 'react-router-dom';




const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#F1EFE6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-heading" style={{ color: '#13293D' }}>
              Our Portfolio
            </h1>
            
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#13293D' }}></div>
            
            <p className="text-xl md:text-2xl leading-relaxed mb-8 font-body" style={{ color: '#141301' }}>
              Transforming businesses through strategic financial advisory services. 
              Discover how we've helped clients achieve exceptional outcomes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold font-heading mb-2" style={{ color: '#265CC7' }}>10+</div>
                <div className="text-lg font-body" style={{ color: '#141301' }}>Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-heading mb-2" style={{ color: '#DE6449' }}>$120M+</div>
                <div className="text-lg font-body" style={{ color: '#141301' }}>Total Transaction Value</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-heading mb-2" style={{ color: '#13293D' }}>10+</div>
                <div className="text-lg font-body" style={{ color: '#141301' }}>Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Portfolio */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: '#13293D' }}>
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-body" style={{ color: '#141301' }}>
              We've partnered with organizations across multiple sectors, from emerging growth companies to established market leaders.
            </p>
          </div>

          {/* Industries We Serve */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-12 font-heading" style={{ color: '#13293D' }}>
              Industries We Serve
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                'Technology', 'Healthcare', 'Financial Services', 'Manufacturing',
                'Real Estate', 'Energy & Utilities', 'Retail & E-commerce',
                'Transportation & Logistics', 'Construction', 'Banking'
              ].map((industry) => (
                <div 
                  key={industry}
                  className="p-4 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{ backgroundColor: '#F1EFE6' }}
                >
                  <span className="font-body text-sm font-medium" style={{ color: '#141301' }}>{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24" style={{ backgroundColor: '#F1EFE6' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading" style={{ color: '#13293D' }}>
                Proven Track Record
              </h2>
              <p className="text-xl max-w-3xl mx-auto font-body" style={{ color: '#141301' }}>
                Our success is measured by the tangible value we create for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 rounded-xl bg-white shadow-lg">
                <div className="text-3xl font-bold font-heading mb-2" style={{ color: '#265CC7' }}>98%</div>
                <div className="text-sm font-body" style={{ color: '#141301' }}>Client Satisfaction Rate</div>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-white shadow-lg">
                <div className="text-3xl font-bold font-heading mb-2" style={{ color: '#DE6449' }}>45%</div>
                <div className="text-sm font-body" style={{ color: '#141301' }}>Average Value Increase</div>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-white shadow-lg">
                <div className="text-3xl font-bold font-heading mb-2" style={{ color: '#13293D' }}>6 Months</div>
                <div className="text-sm font-body" style={{ color: '#141301' }}>Average Project Timeline</div>
              </div>
              
              <div className="text-center p-8 rounded-xl bg-white shadow-lg">
                <div className="text-3xl font-bold font-heading mb-2" style={{ color: '#265CC7' }}>85%</div>
                <div className="text-sm font-body" style={{ color: '#141301' }}>Repeat Client Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-white" style={{ backgroundColor: '#141301' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto font-body" style={{ color: '#F1EFE6' }}>
              Let's discuss how we can help your organization achieve exceptional financial outcomes 
              through our proven advisory approach.
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
                Start Your Success Story
              </Link>
              
              <Link 
                to="/about-us" 
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
                Learn About Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
