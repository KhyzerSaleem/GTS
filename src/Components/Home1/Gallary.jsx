// pages/index.js
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <header className="mb-8 text-center">
          <h1 className="text-center text-5xl font-bricolage md:text-6xl font-bold mb-4">
            <span className="text-green-950">GTS</span>
            <span className="text-green-500"> Gallery</span>
          </h1>
          <p className="max-w-2xl mx-auto text-justify text-gray-600">
            Explore our showcase of beautiful landscape transformations, carefully crafted outdoor spaces, and professional turf management projects. Browse through our gallery to see the quality and dedication we bring to every property we serve.
          </p>
        </header>

        {/* Top Gallery Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-4">
          {/* Gallery Item 1 */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative shadow-sm shadow-gray-950 h-48 md:h-[400px]">
              <Image 
                src="/assets/Gallary/G1.jpg" 
                alt="Person mowing lawn" 
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>

          {/* Gallery Item 2 - Water Features */}
          <div className="rounded-lg overflow-hidden shadow-sm shadow-gray-950 bg-green-500 text-white p-6 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Water Features</h2>
            <p className="mb-6 text-sm text-justify md:text-base">
              Elevate your landscape with our custom water features. From elegant fountains to serene ponds and bubbling streams, we design and install water elements that create tranquil environments and enhance your outdoor living space.
            </p>
            
          </div>

          {/* Gallery Item 3 */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative shadow-sm shadow-gray-950 h-48 md:h-[400px]">
              <Image 
                src="/assets/Gallary/G2.jpg" 
                alt="Person gardening with plants" 
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* Bottom Gallery Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Gallery Item 4 - Lawn Care */}
          <div className="rounded-lg overflow-hidden shadow-sm shadow-gray-950 bg-green-500 text-white p-6 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Lawn Care</h2>
            <p className="mb-6 text-sm text-justify md:text-base">
              Discover our premium lawn maintenance services that deliver lush, healthy turf year-round. Our specialized techniques for mowing, fertilization, and weed control create the perfect canvas for your outdoor activities and enhance your property's curb appeal.
            </p>
         
          </div>

          {/* Gallery Item 5 */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative shadow-sm shadow-gray-950 h-48 md:h-[400px]">
              <Image 
                src="/assets/Gallary/G3.jpg" 
                alt="Irrigation system in field" 
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Gallery Item 6 - Irrigation Systems */}
          <div className="rounded-lg overflow-hidden shadow-sm shadow-gray-950 bg-green-500 text-white p-6 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Irrigation Systems</h2>
            <p className="mb-6 text-sm text-justify md:text-base">
              Our smart irrigation solutions ensure optimal water distribution while conserving resources. From installation to maintenance and upgrades, we provide efficient systems that keep your landscape hydrated through every season with minimal waste.
            </p>
           
          </div>
        </section>
      </div>
    </div>
  );
}