// ===== src/pages/ContactUs.tsx =====
import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { ContactFormData } from '../types';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
          setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <div className="pt-24 pb-16" style={{ backgroundColor: '#F1EFE6' }}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 font-heading" style={{ color: '#13293D' }}>
            Contact Us
          </h1>
          
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#13293D' }}></div>
          
          <p className="text-xl md:text-2xl leading-relaxed font-body" style={{ color: '#141301' }}>
            Ready to transform your business? Let's discuss how we can help you achieve 
            your most ambitious financial objectives.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Form and Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-semibold mb-6 font-heading" style={{ color: '#13293D' }}>
                Get in Touch
              </h2>
              <p className="mb-8 font-body leading-relaxed text-lg" style={{ color: '#141301' }}>
                Ready to discuss your financial needs? We're here to help. Contact us today 
                to schedule a consultation with our expert team.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 p-3 rounded-lg mr-4 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F1EFE6' }}>
                    <svg className="w-6 h-6" style={{ color: '#13293D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold font-body mb-1 text-lg" style={{ color: '#13293D' }}>Email</h3>
                    <p className="font-body text-base" style={{ color: '#141301' }}>info@jsrcapitaladvisors.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 p-3 rounded-lg mr-4 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F1EFE6' }}>
                    <svg className="w-6 h-6" style={{ color: '#13293D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold font-body mb-1 text-lg" style={{ color: '#13293D' }}>Phone</h3>
                    <div className="space-y-1">
                      <p className="font-body text-base" style={{ color: '#141301' }}>+91 620 316 5860</p>
                      <p className="font-body text-base" style={{ color: '#141301' }}>+91 997 778 8888</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 p-3 rounded-lg mr-4 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F1EFE6' }}>
                    <svg className="w-6 h-6" style={{ color: '#13293D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold font-body mb-1 text-lg" style={{ color: '#13293D' }}>Address</h3>
                    <p className="font-body leading-relaxed text-base" style={{ color: '#141301' }}>
                      7/12, 7th Floor, World Trade Centre,<br />
                      Tower-1, Ganesh Murti Nagar,<br />
                      Cuffe Parade, Mumbai,<br />
                      Maharashtra - 400005
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-semibold mb-6 font-heading" style={{ color: '#13293D' }}>
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base font-medium mb-2 font-body" style={{ color: '#13293D' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 font-body text-base"
                    style={{ 
                      focusRingColor: '#13293D',
                      '--tw-ring-color': '#13293D'
                    } as React.CSSProperties}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#13293D';
                      e.target.style.boxShadow = '0 0 0 2px rgba(19, 41, 61, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-base font-medium mb-2 font-body" style={{ color: '#13293D' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 font-body text-base"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#13293D';
                      e.target.style.boxShadow = '0 0 0 2px rgba(19, 41, 61, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-base font-medium mb-2 font-body" style={{ color: '#13293D' }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 font-body text-base"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#13293D';
                      e.target.style.boxShadow = '0 0 0 2px rgba(19, 41, 61, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-base font-medium mb-2 font-body" style={{ color: '#13293D' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 font-body resize-vertical text-base"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#13293D';
                      e.target.style.boxShadow = '0 0 0 2px rgba(19, 41, 61, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg font-semibold font-body transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                  style={{ backgroundColor: '#13293D', color: 'white' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#265CC7';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#13293D';
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 pb-0">
              <h2 className="text-3xl font-semibold mb-4 font-heading" style={{ color: '#13293D' }}>
                Find Us Here
              </h2>
              <p className="font-body mb-6 text-lg" style={{ color: '#141301' }}>
                Visit our office in Mumbai. We're conveniently located and easily accessible by public transport.
              </p>
            </div>
            
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5!2d72.8217!3d18.9244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzI3LjgiTiA3MsKwNDknMTguMSJF!5e0!3m2!1sen!2sin!4v1632000000000!5m2!1sen!2sin&q=World+Trade+Centre+Tower+1+Cuffe+Parade+Mumbai"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="JSR Capital Advisors Location - World Trade Centre"
              ></iframe>
              
              {/* Map Overlay with Address */}
              <div className="absolute top-4 left-4 bg-white bg-opacity-95 p-4 rounded-lg shadow-lg backdrop-blur-sm max-w-xs">
                <h3 className="font-semibold font-body mb-1 text-lg" style={{ color: '#13293D' }}>
                  JSR Capital Advisors
                </h3>
                <p className="font-body leading-relaxed text-sm" style={{ color: '#141301' }}>
                  7/12, 7th Floor, World Trade Centre,<br />
                  Tower-1, Ganesh Murti Nagar,<br />
                  Cuffe Parade, Mumbai, Maharashtra - 400005
                </p>
                <a
                  href="https://maps.google.com/?q=7/12,+7th+Floor,+World+Trade+Centre,+Tower-1,+Ganesh+Murti+Nagar,+Cuffe+Parade,+Mumbai,+Maharashtra+400005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm font-semibold font-body hover:underline"
                  style={{ color: '#265CC7' }}
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;