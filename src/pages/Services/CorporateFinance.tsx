// ===== src/pages/Services/CorporateFinance.tsx =====
import React from 'react';
import { Link } from 'react-router-dom';

const CorporateFinance: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 font-heading">Corporate Finance</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Strategic financial planning and capital structure optimization to maximize 
              your company's value and growth potential.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 font-heading">Our Corporate Finance Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800 font-heading">Capital Structure Optimization</h3>
                  <p className="text-gray-600 font-body">Optimize your debt-to-equity ratio and financing mix to minimize cost of capital.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800 font-heading">Financial Planning & Analysis</h3>
                  <p className="text-gray-600 font-body">Comprehensive financial planning to support strategic decision-making.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800 font-heading">Cash Flow Management</h3>
                  <p className="text-gray-600 font-body">Optimize working capital and cash flow to improve liquidity and operational efficiency.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800 font-heading">Investment Appraisal</h3>
                  <p className="text-gray-600 font-body">Evaluate investment opportunities using advanced financial modeling techniques.</p>
                </div>
              </div>
            </section>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 font-heading">Ready to Optimize Your Capital Structure?</h3>
              <p className="text-gray-600 mb-6 font-body">Let our experts help you achieve your financial objectives.</p>
              <Link 
                to="/contact-us" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateFinance;