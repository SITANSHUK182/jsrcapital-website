// ===== src/components/SEO/PerformanceOptimizer.tsx =====
// No external dependencies - pure React 19 compatible
import { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload important images
      const criticalImages = [
        '/logo.png',
        '/og-image.jpg',
        '/mumbai.jpeg'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Preload Google Fonts with optimized loading
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    // Performance monitoring for Core Web Vitals
    const monitorPerformance = () => {
      // Monitor Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('LCP:', entry.startTime);
            // In production, send to analytics
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                name: 'LCP',
                value: Math.round(entry.startTime),
                event_category: 'Performance'
              });
            }
          }
        });

        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitor First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const fid = (entry as any).processingStart - entry.startTime;
            console.log('FID:', fid);
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                name: 'FID',
                value: Math.round(fid),
                event_category: 'Performance'
              });
            }
          }
        });

        fidObserver.observe({ entryTypes: ['first-input'] });

        // Monitor Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          console.log('CLS:', clsValue);
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'CLS',
              value: Math.round(clsValue * 1000),
              event_category: 'Performance'
            });
          }
        });

        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Lazy load images
    const setupLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                imageObserver.unobserve(img);
              }
            }
          });
        }, {
          rootMargin: '50px 0px'
        });

        // Observe all images with data-src
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));

        // Re-observe on DOM changes
        const mutationObserver = new MutationObserver(() => {
          const newLazyImages = document.querySelectorAll('img[data-src]:not([data-observed])');
          newLazyImages.forEach(img => {
            img.setAttribute('data-observed', 'true');
            imageObserver.observe(img);
          });
        });

        mutationObserver.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    };

    // Add loading animations CSS if not exists
    const addLoadingStyles = () => {
      if (!document.querySelector('#performance-styles')) {
        const style = document.createElement('style');
        style.id = 'performance-styles';
        style.textContent = `
          .lazy-load {
            opacity: 0;
            transition: opacity 0.3s;
          }
          .lazy-load.loaded {
            opacity: 1;
          }
          
          /* Preload animation */
          .preload-animation {
            animation: shimmer 1.5s infinite;
          }
          
          @keyframes shimmer {
            0% { background-position: -200px 0; }
            100% { background-position: calc(200px + 100%) 0; }
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Execute optimizations
    preloadCriticalResources();
    monitorPerformance();
    setupLazyLoading();
    addLoadingStyles();

    // Page load performance tracking
    if (document.readyState === 'complete') {
      const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navTiming) {
        const loadTime = navTiming.loadEventEnd - navTiming.loadEventStart;
        console.log('Page Load Time:', loadTime);
        
        if (window.gtag) {
          window.gtag('event', 'page_load_time', {
            value: Math.round(loadTime),
            event_category: 'Performance'
          });
        }
      }
    }

  }, []);

  return null;
};

// Extend window for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default PerformanceOptimizer;
