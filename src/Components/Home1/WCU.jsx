/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'


export default function WCU() {

  return (
    <>
    
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bricolage font-bold mb-6">
              <span className="text-green-500">Why Choose</span> <span className="text-green-950">Us?</span>
            </h2>
            
            <p className="text-gray-700 text-justify mb-10">
              At GTS, we're committed to transforming ordinary outdoor spaces into stunning, sustainable landscapes. With over 15 years of industry experience, our team of certified professionals delivers exceptional results that enhance your property's beauty and value. We combine innovative techniques with environmentally responsible practices to create lush, vibrant landscapes that thrive in all seasons.
            </p>
            
            {/* Feature 1 */}
            <div className="mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-green-500 rounded-md flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">Sustainable Practices</h3>
                  <p className="text-gray-700 text-justify mb-2">
                    We prioritize eco-friendly landscaping solutions that conserve water and reduce environmental impact. Our drought-resistant turf options, water-efficient irrigation systems, and organic fertilization methods ensure your landscape stays beautiful while minimizing resource consumption.
                  </p>
                  
                </div>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-green-500 rounded-md flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">Licensed and Insured</h3>
                  <p className="text-gray-700 text-justify mb-2">
                    Rest easy knowing you're working with fully licensed, bonded, and insured professionals. Our team consists of certified horticulturists and landscape technicians who follow industry best practices and safety standards to protect your property throughout every project.
                  </p>
                 
                </div>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-green-500 rounded-md flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">Local Knowledge</h3>
                  <p className="text-gray-700 text-justify mb-2">
                    Our deep understanding of local soil conditions, climate patterns, and plant species ensures we create landscapes perfectly suited to your region. We select turf varieties and plants that thrive in your specific microclimate, resulting in healthier, more resilient outdoor spaces.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-[40%] lg:ml-8 flex items-center">
            <div className="w-full h-auto rounded-lg overflow-hidden">
              <Image
                src="/assets/S1.jpeg" 
                alt="Professional landscaping and turf installation"
                width={600}
                height={600}
                className="w-full h-full object-cover shadow-md shadow-gray-500 rounded-lg"
                priority
              />
            </div>
          </div>
         
        </div>
      </div>
    </section>
    </>
  )
}