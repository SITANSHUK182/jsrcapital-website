// ===== src/components/Layout/Footer.tsx =====
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">JSR Capital Advisors</h3>
            <p className="text-gray-300 font-body">
              Providing comprehensive financial solutions for your business needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Our Services</h3>
            <ul className="space-y-2 text-gray-300 font-body">
              <li>Corporate Finance</li>
              <li>Valuation & Business Modelling</li>
              <li>Transaction Advisory Services</li>
              <li>Debt Syndication</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Contact Info</h3>
            <div className="text-gray-300 font-body">
              <p>Email: info@jsrcapitaladvisors.com</p>
              <p>Phone: +91 620 316 5860/+91 997 778 8888</p>
              <p>7/12, 7th Floor, World Trade Centre,<br />
                      Tower-1, Ganesh Murti Nagar,<br />
                      Cuffe Parade, Mumbai,<br />
                      Maharashtra - 400005</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 font-body">
          <p>&copy; 2025 JSR Capital Advisors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;