'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import image1 from '../Components/Images/1.jpg';
import image2 from '../Components/Images/2.jpg';
import image3 from '../Components/Images/3.jpg';
import image4 from '../Components/Images/4.jpg';

const heroContent = [
  {
    src: image1,
    title: 'Elegant Urban Gardens',
    subtitle: 'Transforming Outdoor Spaces',
    description: 'Creating sophisticated landscape designs that blend innovation and natural beauty.'
  },
  {
    src: image2,
    title: 'Modern Landscape Solutions',
    subtitle: 'Innovative Design Concepts',
    description: 'Crafting unique outdoor environments that reflect your lifestyle and vision.'
  },
  {
    src: image3,
    title: 'Sustainable Landscape Architecture',
    subtitle: 'Eco-Friendly Design Approach',
    description: 'Harmonizing cutting-edge design with environmental consciousness.'
  },
  {
    src: image4,
    title: 'Landscape Architecture',
    subtitle: 'Eco-Friendly Design Approach',
    description: 'Harmonizing cutting-edge design with environmental consciousness.'
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heroHeight, setHeroHeight] = useState('100vh');
  const sectionRef = useRef(null);
  const initialRenderComplete = useRef(false);

  // Function to calculate hero height
  const calculateHeroHeight = () => {
    // Find header height
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;
    
    // Calculate height, ensuring at least a minimum height
    const calculatedHeight = Math.max(
      window.innerHeight - headerHeight, 
      400 // Minimum height of 400px
    );
    
    // Update hero section height if ref exists
    if (sectionRef.current) {
      sectionRef.current.style.height = `${calculatedHeight}px`;
      sectionRef.current.style.minHeight = `${calculatedHeight}px`;
    }
    
    // Also update state for additional flexibility
    setHeroHeight(`${calculatedHeight}px`);
  };

  useEffect(() => {
    // Set initial 100vh height
    if (sectionRef.current) {
      sectionRef.current.style.height = '100vh';
      sectionRef.current.style.minHeight = '100vh';
    }

    // This ensures initial calculation happens after the DOM is fully loaded
    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        calculateHeroHeight();
      } else {
        window.addEventListener('load', calculateHeroHeight);
      }
    }

    // Calculate height after a short delay to ensure header is rendered
    const initialTimer = setTimeout(() => {
      calculateHeroHeight();
      initialRenderComplete.current = true;
    }, 100);

    // Recalculate on resize
    window.addEventListener('resize', calculateHeroHeight);

    // Slider interval
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % heroContent.length
      );
    }, 3000);

    // Cleanup
    return () => {
      clearInterval(interval);
      clearTimeout(initialTimer);
      window.removeEventListener('resize', calculateHeroHeight);
      window.removeEventListener('load', calculateHeroHeight);
    };
  }, []);

  // Run calculation once more after component is mounted
  useEffect(() => {
    // This runs after the component has mounted
    const mountTimer = setTimeout(calculateHeroHeight, 300);
    return () => clearTimeout(mountTimer);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative flex flex-col lg:flex-row"
      style={{ 
        height: heroHeight,
        minHeight: heroHeight
      }}
    >
      {/* Left Content Section */}
      <div className="
        w-full lg:w-[30%] 
        bg-white 
        flex items-center justify-center 
        p-4 md:p-8 lg:p-12 
        order-2 lg:order-1
      ">
        <div className="max-w-md w-full">
          {/* Sliding Text Container */}
          <div className="relative lg:h-[300px] md:h-[230px] h-[200px] overflow-hidden">
            <div 
              className="absolute w-full top-[10%] lg:top-[-10%] transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {heroContent.map((content, index) => (
                <div 
                  key={index} 
                  className="w-full absolute top-0 left-0"
                  style={{
                    transform: `translateX(${index * 100}%)`,
                  }}
                >
                  <h2 className="
                    text-base md:text-lg lg:text-xl 
                    font-medium 
                    text-[#37b629] 
                    tracking-widest 
                    mb-2 md:mb-4
                  ">
                    {content.subtitle}
                  </h2>
                  <h1 className="
                    text-2xl md:text-3xl lg:text-4xl 
                    font-bold 
                    text-gray-800 
                    mb-4 md:mb-6
                  ">
                    {content.title}
                  </h1>
                  <p className="
                    text-base md:text-lg 
                    text-gray-600 
                  ">
                    {content.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <button className="
              sm:w-auto 
              bg-[#2a7d2e] text-white 
              px-4 py-2 md:px-6 md:py-3 
              rounded 
              hover:bg-[#37b629] 
              transition-colors
              whitespace-nowrap
            ">
              Our Services
            </button>
            <button className="
              sm:w-auto 
              border border-[#37b629] 
              text-[#37b629] 
              px-4 py-2 md:px-6 md:py-3 
              rounded 
              hover:bg-[#37b629] 
              hover:text-white 
              transition-colors
              whitespace-nowrap
            ">
              View Projects
            </button>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="
        w-full lg:w-[70%] 
        relative 
        overflow-hidden 
        order-1 lg:order-2 
        shadow-md shadow-gray-950
        h-[50vh] lg:h-auto
      ">
        {heroContent.map((content, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 
              transition-transform 
              duration-1000 
              ease-in-out 
              ${
                index === currentIndex 
                  ? 'translate-x-0' 
                  : index > currentIndex 
                    ? 'translate-x-full' 
                    : '-translate-x-full'
              }
            `}
          >
            <Image 
              src={content.src} 
              alt={content.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 70vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}