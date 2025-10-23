// ===== src/pages/Services/ValuationBusinessModelling.tsx =====
import React from 'react';
import { Link } from 'react-router-dom';

const ValuationBusinessModelling: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 font-heading">Valuation & Business Modelling</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive business valuations and sophisticated financial modeling 
              to support strategic decisions and transactions.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Valuation Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Business Valuation</h3>
                  <p className="text-gray-600">Fair value assessments for M&A, litigation, tax, and financial reporting purposes.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Financial Modeling</h3>
                  <p className="text-gray-600">Dynamic financial models for scenario analysis and strategic planning.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Discounted Cash Flow Analysis</h3>
                  <p className="text-gray-600">Detailed DCF models to determine intrinsic business value.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Comparable Company Analysis</h3>
                  <p className="text-gray-600">Market-based valuation using industry benchmarks and multiples.</p>
                </div>
              </div>
            </section>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Need a Professional Valuation?</h3>
              <p className="text-gray-600 mb-6">Our certified valuation experts are ready to help.</p>
              <Link 
                to="/contact-us" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Request Valuation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuationBusinessModelling;