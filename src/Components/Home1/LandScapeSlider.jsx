'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Circle, Dot } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandscapeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const firstRenderRef = useRef(true);
  
  // Array of image data
  const slides = [
    {
      src: "/assets/SwiperLS/1.jpeg",
      title: "Elegant Gardens",
      description: "Harmonious designs that blend with natural surroundings"
    },
    {
      src: "/assets/SwiperLS/2.jpeg",
      title: "Elegant Gardens",
      description: "Harmonious designs that blend with natural surroundings"
    },
    {
      src: "/assets/SwiperLS/3.jpeg",
      title: "Modern Landscaping",
      description: "Clean lines and contemporary elements for urban spaces"
    },
    {
      src: "/assets/SwiperLS/4.jpeg",
      title: "Sustainable Solutions",
      description: "Eco-friendly approaches to landscape architecture"
    },
    {
      src: "/assets/SwiperLS/5.jpeg",
      title: "Custom Outdoor Living",
      description: "Crafting personalized spaces for your lifestyle"
    }
  ];

  // Force first slide to be visible immediately
  useEffect(() => {
    // This ensures first slide is visible
    if (firstRenderRef.current) {
      const firstSlide = document.querySelector('[data-slide="0"]');
      if (firstSlide) {
        firstSlide.style.opacity = '1';
      }
      firstRenderRef.current = false;
    }

    // Start auto-advancing immediately
    const startTimer = setTimeout(() => {
      setCurrentIndex(1); // Move to second slide after delay
    }, 2000);

    // Continue auto-advancing
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mb-20 rounded-xl overflow-hidden shadow-2xl">
      {/* Main Image with Overlay */}
      <div className="relative aspect-w-16 aspect-h-9 bg-emerald-900 h-96 md:h-[600px]">
        {slides.map((slide, index) => (
          <div 
            key={index}
            data-slide={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              // Force first slide to be visible initially
              opacity: index === 0 && firstRenderRef.current ? 1 : undefined
            }}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              className="object-cover opacity-90"
              priority={index === 0} // Prioritize loading of first image
            />

            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 md:from-emerald-900/70 to-transparent flex items-end">
              <div className="p-8 text-white pb-12 md:pb-8">
                <h3 className="text-3xl font-semibold mb-2">{slide.title}</h3>
                <p className="text-lg mb-4">{slide.description}</p>
                <Link href='/Services'>
                  <button className="flex items-center bg-emerald-600 hover:bg-emerald-700 transition-colors px-6 py-3 rounded-lg text-white font-medium">
                    Explore Our Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots - increased bottom spacing on mobile */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`p-1 rounded-full transition-all ${
              index === currentIndex ? 'text-white scale-125' : 'text-white/50 hover:text-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex ? <Circle className="h-3 w-3 fill-current" /> : <Dot className="h-3 w-3" />}
          </button>
        ))}
      </div>
    </div>
  );
}