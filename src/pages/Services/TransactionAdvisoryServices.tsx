// ===== src/pages/Services/TransactionAdvisoryServices.tsx =====
import React from 'react';
import { Link } from 'react-router-dom';

const TransactionAdvisoryServices: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 font-heading">Transaction Advisory Services</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Expert guidance through complex transactions including mergers, acquisitions, 
              divestitures, and strategic partnerships.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Our Transaction Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">M&A Advisory</h3>
                  <p className="text-gray-600">End-to-end support for mergers and acquisitions, from strategy to closing.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Due Diligence</h3>
                  <p className="text-gray-600">Comprehensive financial, commercial, and operational due diligence services.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Deal Structuring</h3>
                  <p className="text-gray-600">Optimize transaction structure for tax efficiency and risk mitigation.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800">Post-Merger Integration</h3>
                  <p className="text-gray-600">Support integration planning and execution to realize synergies.</p>
                </div>
              </div>
            </section>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Ready for Your Next Transaction?</h3>
              <p className="text-gray-600 mb-6">Let our experienced team guide you through the process.</p>
              <Link 
                to="/contact-us" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Start Your Transaction
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionAdvisoryServices;