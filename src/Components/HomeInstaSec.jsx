import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaPlay } from 'react-icons/fa';
import I1 from '../Components/Images/InstaPics/1.jpg';
import I2 from '../Components/Images/InstaPics/2.jpg';
import I3 from '../Components/Images/InstaPics/3.jpg';
import I4 from '../Components/Images/InstaPics/4.jpg';
import I5 from '../Components/Images/InstaPics/5.jpg';
import I6 from '../Components/Images/InstaPics/6.jpg';

// Replace these with your actual Instagram image URLs
const landscapeImages = [
  { src: I1, isVideo: true },
  { src: I2, isVideo: false },
  { src: I3, isVideo: false },
  { src: I4, isVideo: true },
  { src: I5, isVideo: true },
  { src: I6, isVideo: false }
];

const HomeInstaSec = () => {
  return (
    <div className="container mx-auto md:pt-20 pt-8 px-4">
      <div className="relative">
        {/* Instagram-style header */}
      
          <div className="flex-grow">
            <div className="flex items-center justify-center">
              <span className="text-lg absolute lg:bottom-[90%] z-20 text-center py-2 px-16 flex gap-2 items-center shadow-lg shadow-gray-950 bg-[#2a7d2e] text-white font-semibold">
                <FaInstagram size={24} color="white" /> sandandstonelandscapes
              </span>
            </div>
          </div>
     

        {/* Image Grid */}
        <div className="grid relative md:grid-cols-2 grid-cols-1 lg:grid-cols-6 gap-6 md:gap-4">
          {landscapeImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square relative shadow-lg shadow-gray-950 overflow-hidden"
            >
              <Image
                src={image.src}
                alt={`Landscape image ${index + 1}`}
                fill
                className="object-cover hover:opacity-80 transition-opacity cursor-pointer duration-300"
              />
              {image.isVideo && (
                <div className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 rounded-full p-3">
                  <FaPlay className="text-white" size={28} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeInstaSec;