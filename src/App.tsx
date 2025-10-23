// ===== Updated src/App.tsx (React 19 compatible) =====
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NativeSEO from './components/SEO/NativeSEO';
import PerformanceOptimizer from './components/SEO/PerformanceOptimizer';

// Keep all your existing page imports unchanged
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import ContactUs from './pages/ContactUs';
import CorporateFinance from './pages/Services/CorporateFinance';
import ValuationBusinessModelling from './pages/Services/ValuationBusinessModelling';
import TransactionAdvisoryServices from './pages/Services/TransactionAdvisoryServices';
import DebtSyndication from './pages/Services/DebtSyndication';
import './styles/index.css';

function App() {
  return (
    <Router>
      {/* Native SEO - No external dependencies, React 19 compatible */}
      <NativeSEO />
      <PerformanceOptimizer />
      
      <Layout>
        <Routes>
          {/* All your existing routes remain exactly the same */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services/corporate-finance" element={<CorporateFinance />} />
          <Route path="/services/valuation-business-modelling" element={<ValuationBusinessModelling />} />
          <Route path="/services/transaction-advisory" element={<TransactionAdvisoryServices />} />
          <Route path="/services/debt-syndication" element={<DebtSyndication />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
