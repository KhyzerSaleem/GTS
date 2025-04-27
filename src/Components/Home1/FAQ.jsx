// components/FAQSection.jsx
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "What factors influence the cost of a landscaping project?",
      answer: "The cost of artificial turf installation depends on several factors including the total area size type of turf selected ground preparation requirements drainage solutions needed accessibility of the site and any additional features like edging or infill options. We provide free onsite evaluations to give you an accurate quote."
    },
    {
      id: 2,
      question: "What sets your landscaping service apart from others in the area?",
      answer: "GTS stands out for our premium quality materials professional installation techniques long-lasting warranty coverage exceptional customer service and extensive experience with both residential and commercial projects. We use only the highest grade turf products that look and feel like natural grass."
    },
    {
      id: 3,
      question: "How often should I schedule landscape maintenance services?",
      answer: "One major benefit of our artificial turf is minimal maintenance requirements. Unlike natural grass there's no mowing watering or fertilizing needed. We recommend occasional rinsing to remove dust and debris plus brushing the turf fibers every few months to keep them upright. A more thorough cleaning might be beneficial once yearly."
    },
    {
      id: 4,
      question: "Do you provide sustainable and eco friendly landscaping options?",
      answer: "Absolutely! Our artificial turf solutions are environmentally friendly as they eliminate the need for water fertilizers pesticides and gas-powered lawn equipment. Our products are made from recyclable materials and help conserve thousands of gallons of water annually. Many of our installations qualify for local water conservation rebates."
    },
    {
      id: 5,
      question: "What landscaping services do you offer?",
      answer: "We offer complete artificial turf solutions including consultation design turf selection ground preparation installation drainage systems synthetic putting greens pet-friendly turf playgrounds sports fields commercial applications maintenance services and repairs. We handle everything from small residential yards to large commercial properties."
    },
    {
      id: 6,
      question: "Can you assist with obtaining permits for landscaping projects?",
      answer: "Yes we can help navigate the permit process for your artificial turf installation. Our team is familiar with local regulations and HOA requirements throughout the service area. We can prepare necessary documentation assist with application submissions and ensure your project meets all compliance standards before we begin work."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-center text-5xl font-bricolage  md:text-6xl font-bold text-green-900 mb-2">Frequently Asked</h2>
            <h2 className="text-center text-5xl font-bricolage  md:text-6xl font-bold text-green-500 mb-6">Questions</h2>
            <p className="text-gray-600 text-justify max-w-3xl mx-auto">
              Find answers to common questions about our artificial turf solutions. We've compiled this information to help you learn more about the benefits installation process maintenance requirements and special features of our premium synthetic grass products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white  rounded-lg p-6 shadow-lg transition-shadow border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-8 h-8 mr-3 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold  text-green-900">{faq.question}</h3>
                </div>
                <p className="text-gray-600 text-justify ml-11">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;