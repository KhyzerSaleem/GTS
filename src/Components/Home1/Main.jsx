import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Main() {
  return (
    <>
      <main>
        {/* Hero Section with Background Image */}
        <section className="py-16 md:py-16 relative">
          {/* Background Image with Opacity */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/main.webp" // Replace with your actual image path
              alt="Background"
              layout='fill'
              objectFit="cover"
              // className="opacity-80" // Adjust opacity as needed (0.2 = 20%)
            />
          </div>
          
          {/* Content with z-index to appear above the background */}
          <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bricolage font-bold mb-6">
              <span className="text-white">TRANSFORM, DESIGN, ENJOY</span>
            </h1>
            <h1 className="text-5xl md:text-7xl font-bricolage font-bold mb-8 text-white">
              Masterpieces
            </h1>
            <p className="max-w-2xl mx-auto font-semibold text-lg text-white  mb-12">
              Give us a chance to assist you in designing the ideal space for entertainment and rest. The Kellyville-based, family-run landscaping company in your area is GTS Landscaping Creations.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link href='/Contact'>
              <button className="bg-green-500 text-white py-3 px-8 rounded-full font-medium hover:brightness-95 transition-all">
                Get Started
              </button>
              </Link>
              <Link href='/Services'>
              <button className="bg-green-900 text-white py-3 px-8 rounded-full font-medium hover:brightness-110 transition-all">
                Learn More
              </button>
              </Link>
            </div>

            {/* User Avatars */}
            <div className="flex justify-center -space-x-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src="/assets/A1.jpg"
                  alt="User 1"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src="/assets/A2.jpg"
                  alt="User 2"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src="/assets/A1.jpg"
                  alt="User 3"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src="/assets/A2.jpg"
                  alt="User 4"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src="/assets/A1.jpg"
                  alt="User 5"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Join Counter */}
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white">50K+</h3>
              <p className="text-white">joined in already</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}