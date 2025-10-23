// ===== src/components/SEO/NativeSEO.tsx =====
// No external dependencies required - works with React 19!
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NativeSEO: React.FC = () => {
  const location = useLocation();
  
  // SEO data for each route
  const getSEOData = (pathname: string) => {
    const seoData: Record<string, any> = {
      '/': {
        title: 'JSR Capital Advisors - Premier Financial Advisory Services in Mumbai',
        description: 'JSR Capital Advisors combines legal precision with financial power. Expert corporate finance, business valuation, M&A advisory, and debt syndication services in Mumbai, India.',
        keywords: 'financial advisory Mumbai, corporate finance India, business valuation, M&A advisory, debt syndication, investment banking Mumbai',
        type: 'website',
        image: '/og-image.jpg'
      },
      '/about-us': {
        title: 'About JSR Capital Advisors - Leading Financial Advisory Team',
        description: 'Learn about JSR Capital Advisors expert team, mission, and approach to financial advisory services. Combining legal expertise with financial innovation since 2020.',
        keywords: 'about JSR Capital, financial advisory team, Mumbai financial experts, corporate finance specialists',
        type: 'website',
        image: '/og-image.jpg'
      },
      '/services/corporate-finance': {
        title: 'Corporate Finance Services - JSR Capital Advisors Mumbai',
        description: 'Strategic capital solutions and sophisticated financial structuring for complex business needs. Expert corporate finance advisory services in Mumbai.',
        keywords: 'corporate finance Mumbai, capital structuring, business financing, financial advisory',
        type: 'service',
        image: '/og-corporate-finance.jpg'
      },
      '/services/valuation-business-modelling': {
        title: 'Business Valuation & Modeling Services - JSR Capital Advisors',
        description: 'Precise business valuations and advanced financial modeling for critical decision-making. Professional valuation services in Mumbai.',
        keywords: 'business valuation Mumbai, financial modeling, company valuation, valuation services',
        type: 'service',
        image: '/og-valuation.jpg'
      },
      '/services/transaction-advisory': {
        title: 'M&A Transaction Advisory Services - JSR Capital Advisors',
        description: 'Expert guidance through complex M&A transactions and strategic partnerships. Professional transaction advisory in Mumbai.',
        keywords: 'M&A advisory Mumbai, transaction advisory, mergers acquisitions, deal advisory',
        type: 'service',
        image: '/og-ma.jpg'
      },
      '/services/debt-syndication': {
        title: 'Debt Syndication Services - JSR Capital Advisors Mumbai',
        description: 'Optimized debt structuring and syndication solutions for capital efficiency. Professional debt advisory services in Mumbai.',
        keywords: 'debt syndication Mumbai, debt structuring, loan syndication, debt advisory',
        type: 'service',
        image: '/og-debt.jpg'
      },
      '/portfolio': {
        title: 'Our Portfolio - JSR Capital Advisors Success Stories',
        description: 'Discover our successful financial advisory projects and client success stories. 150+ projects worth $2.4B+ in transaction value.',
        keywords: 'JSR Capital portfolio, financial advisory success stories, client cases Mumbai',
        type: 'website',
        image: '/og-portfolio.jpg'
      },
      '/contact-us': {
        title: 'Contact JSR Capital Advisors - Financial Advisory Consultation',
        description: 'Contact JSR Capital Advisors for expert financial advisory services in Mumbai. Schedule a consultation with our financial experts.',
        keywords: 'contact JSR Capital, financial advisory consultation Mumbai, expert financial advice',
        type: 'website',
        image: '/og-contact.jpg'
      }
    };

    return seoData[pathname] || seoData['/'];
  };

  useEffect(() => {
    const currentSEO = getSEOData(location.pathname);
    const canonicalUrl = `https://jsrcapitaladvisors.com${location.pathname}`;

    // Helper function to set meta tag
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Helper function to set link tag
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      
      link.setAttribute('href', href);
    };

    // Set title
    document.title = currentSEO.title;

    // Set basic meta tags
    setMetaTag('description', currentSEO.description);
    setMetaTag('keywords', currentSEO.keywords);
    setMetaTag('author', 'JSR Capital Advisors');
    setMetaTag('robots', 'index, follow');
    
    // Language and location
    setMetaTag('language', 'English');
    setMetaTag('geo.region', 'IN-MH');
    setMetaTag('geo.placename', 'Mumbai');
    setMetaTag('geo.position', '19.0760;72.8777');
    setMetaTag('ICBM', '19.0760, 72.8777');

    // Open Graph tags
    setMetaTag('og:type', currentSEO.type, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:title', currentSEO.title, true);
    setMetaTag('og:description', currentSEO.description, true);
    setMetaTag('og:image', `https://jsrcapitaladvisors.com${currentSEO.image}`, true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);
    setMetaTag('og:site_name', 'JSR Capital Advisors', true);
    setMetaTag('og:locale', 'en_US', true);

    // Twitter tags
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:url', canonicalUrl, true);
    setMetaTag('twitter:title', currentSEO.title, true);
    setMetaTag('twitter:description', currentSEO.description, true);
    setMetaTag('twitter:image', `https://jsrcapitaladvisors.com${currentSEO.image}`, true);
    setMetaTag('twitter:creator', '@JSRCapital', true);

    // Canonical URL
    setLinkTag('canonical', canonicalUrl);

    // Add structured data
    const addStructuredData = (data: object, id: string) => {
      // Remove existing script with same id
      const existingScript = document.querySelector(`script[data-seo-id="${id}"]`);
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data script
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-id', id);
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "JSR Capital Advisors",
      "description": "Premier financial advisory firm specializing in corporate finance, business valuation, M&A advisory, and debt syndication services.",
      "url": "https://jsrcapitaladvisors.com",
      "logo": "https://jsrcapitaladvisors.com/logo.png",
      "image": "https://jsrcapitaladvisors.com/og-image.jpg",
      "telephone": "+916203165860/+919977788888",
      "email": "info@jsrcapitaladvisors.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7/12, 7th Floor, World Trade Centre, Tower-1",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.0760,
        "longitude": 72.8777
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": [
        "Corporate Finance",
        "Business Valuation",
        "M&A Advisory",
        "Debt Syndication"
      ],
      "foundingDate": "2020",
      "slogan": "Legal Precision. Financial Power.",
      "sameAs": [
        "https://www.linkedin.com/company/jsr-capital-advisors",
        "https://twitter.com/JSRCapital"
      ]
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "JSR Capital Advisors",
      "url": "https://jsrcapitaladvisors.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://jsrcapitaladvisors.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Service-specific schema for service pages
    if (location.pathname.startsWith('/services/')) {
      const serviceSchemas: Record<string, object> = {
        '/services/corporate-finance': {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Corporate Finance Services",
          "description": "Strategic capital solutions and sophisticated financial structuring for complex business needs.",
          "url": "https://jsrcapitaladvisors.com/services/corporate-finance",
          "provider": organizationSchema,
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "category": "Corporate Finance"
        },
        '/services/valuation-business-modelling': {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Business Valuation & Modeling",
          "description": "Precise business valuations and advanced financial modeling for critical decision-making.",
          "url": "https://jsrcapitaladvisors.com/services/valuation-business-modelling",
          "provider": organizationSchema,
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "category": "Business Valuation"
        },
        '/services/transaction-advisory': {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Transaction Advisory Services",
          "description": "Expert guidance through complex M&A transactions and strategic partnerships.",
          "url": "https://jsrcapitaladvisors.com/services/transaction-advisory",
          "provider": organizationSchema,
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "category": "M&A Advisory"
        },
        '/services/debt-syndication': {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Debt Syndication Services",
          "description": "Optimized debt structuring and syndication solutions for capital efficiency.",
          "url": "https://jsrcapitaladvisors.com/services/debt-syndication",
          "provider": organizationSchema,
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "category": "Debt Syndication"
        }
      };

      const serviceSchema = serviceSchemas[location.pathname];
      if (serviceSchema) {
        addStructuredData(serviceSchema, 'service');
      }
    }

    // Add schemas
    addStructuredData(organizationSchema, 'organization');
    addStructuredData(websiteSchema, 'website');

    // Breadcrumb schema for non-home pages
    if (location.pathname !== '/') {
      const breadcrumbItems = [
        { name: 'Home', url: 'https://jsrcapitaladvisors.com/' }
      ];

      // Add current page to breadcrumb
      const pathSegments = location.pathname.split('/').filter(Boolean);
      let currentPath = '';
      
      pathSegments.forEach((segment) => {
        currentPath += `/${segment}`;
        
        // Convert path to readable name
        let name = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        
        if (segment === 'services') {
          name = 'Our Services';
        } else if (segment === 'about-us') {
          name = 'About Us';
        } else if (segment === 'contact-us') {
          name = 'Contact Us';
        } else if (segment === 'corporate-finance') {
          name = 'Corporate Finance';
        } else if (segment === 'valuation-business-modelling') {
          name = 'Valuation & Business Modelling';
        } else if (segment === 'transaction-advisory') {
          name = 'Transaction Advisory';
        } else if (segment === 'debt-syndication') {
          name = 'Debt Syndication';
        }

        breadcrumbItems.push({
          name,
          url: `https://jsrcapitaladvisors.com${currentPath}`
        });
      });

      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      };

      addStructuredData(breadcrumbSchema, 'breadcrumb');
    }

  }, [location.pathname]);

  return null;
};

export default NativeSEO;
