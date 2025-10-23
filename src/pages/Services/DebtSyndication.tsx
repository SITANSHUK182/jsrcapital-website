// ===== src/pages/Services/DebtSyndication.tsx =====
import React from 'react';
import { Link } from 'react-router-dom';

const DebtSyndication: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 font-heading">Debt Syndication</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Strategic debt structuring and syndication solutions to optimize 
              your capital structure and funding requirements.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Debt Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Debt Syndication</h3>
                  <p className="text-gray-600">Arrange and structure syndicated loans with multiple lending institutions.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Term Loan Arrangement</h3>
                  <p className="text-gray-600">Secure competitive term loans for growth capital and expansion needs.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Working Capital Finance</h3>
                  <p className="text-gray-600">Optimize working capital facilities to support operational requirements.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Debt Restructuring</h3>
                  <p className="text-gray-600">Restructure existing debt to improve terms and cash flow management.</p>
                </div>
              </div>
            </section>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Need Debt Financing Solutions?</h3>
              <p className="text-gray-600 mb-6">Our team can help you secure the right financing for your business.</p>
              <Link 
                to="/contact-us" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Explore Financing Options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebtSyndication;
