// pages/index.js
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Lawn Care",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: "Transform your outdoor space with our comprehensive lawn care services. We provide professional mowing, fertilization, weed control, and aeration to keep your grass lush, green, and healthy throughout the seasons."
    },
    {
      id: 2,
      title: "Free Consultations",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      description: "Unsure about what your lawn needs? Our experts offer complimentary on-site evaluations to assess your property's unique requirements. We'll develop a customized maintenance plan tailored specifically to your landscape's conditions."
    },
    {
      id: 3,
      title: "Irrigation Systems",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description: "Maximize water efficiency with our state-of-the-art irrigation solutions. From installation to maintenance and smart controller upgrades, we ensure your lawn and garden receive optimal hydration without waste or runoff."
    },
    {
      id: 4,
      title: "Seasonal Maintenance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      description: "Keep your lawn looking its best year-round with our seasonal maintenance packages. From spring cleanup and summer care to fall leaf removal and winter preparation, we provide timely services adapted to each season's demands."
    },
    {
      id: 5,
      title: "Weather-Smart Solutions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      description: "Our climate-adaptive approach ensures your lawn thrives despite changing weather patterns. We implement drought-resistant landscaping, rain sensors, and seasonal adjustments to protect your investment in all conditions."
    },
    {
      id: 6,
      title: "Expert Gardening",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      description: "Enhance your property with beautiful, sustainable garden designs. Our skilled gardeners handle everything from planting and pruning to mulching and ornamental care, creating vibrant outdoor spaces that complement your lifestyle."
    }
  ];

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-center text-5xl font-bricolage  md:text-6xl font-bold">
              <span className="text-green-900">Our </span>
              <span className="text-green-500">Services</span>
            </h1>
            <p className=" mt-4 max-w-3xl text-justify mx-auto text-gray-600">
              At GTS, we combine horticultural expertise with superior customer service to deliver exceptional lawn and garden care. From routine maintenance to comprehensive landscape transformations, our team is dedicated to making your outdoor spaces thrive in every season.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8 md:py-12 ">
          <div className="container  mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="bg-white rounded-lg p-6 shadow-lg transition-shadow flex flex-row items-start"
                >
                  <div className="mr-5 bg-green-950 p-4 rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-green-950">{service.title}</h3>
                      
                    </div>
                    <p className="text-gray-600 text-justify text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}