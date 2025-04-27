'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import S1 from '../Components/Images/AsSeenIn/1.jpeg';
import S2 from '../Components/Images/AsSeenIn/2.jpeg';
import Image from 'next/image';
import { 
  X, 
  Maximize2, 
  Minimize2, 
  Share2, 
  ZoomIn, 
  ZoomOut 
} from 'lucide-react';

export default function AsSeenIn() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const imageContainerRef = useRef(null);

  const images = [
    { src: S1, alt: 'Landscape Image 1', className: 'col-span-1' },
    { src: S2, alt: 'Landscape Image 2', className: 'col-span-2' }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setZoomLevel(1);
    setIsFullScreen(false);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setSelectedImage(null);
    setZoomLevel(1);
    setIsFullScreen(false);
  };

  const toggleFullScreen = (e) => {
    e.stopPropagation();
    
    if (!document.fullscreenElement) {
      // Enter fullscreen
      const element = imageContainerRef.current;
      if (element) {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
          element.msRequestFullscreen();
        }
      }
      setIsFullScreen(true);
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  // Fullscreen change event listener (previous implementation remains the same)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Zoom and other methods remain the same as in the previous implementation

  const handleZoom = useCallback((e, direction) => {
    e.stopPropagation();
    const zoomStep = 0.5;
    const maxZoom = 3;
    const minZoom = 0.5;

    const newZoom = direction === 'in' 
      ? Math.min(zoomLevel + zoomStep, maxZoom)
      : Math.max(zoomLevel - zoomStep, minZoom);
    
    setZoomLevel(newZoom);
  }, [zoomLevel]);

  const handleShare = (e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: 'Landscape Design',
        text: 'Check out this amazing landscape design!',
        url: window.location.href
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch(err => console.error('Could not copy text: ', err));
    }
  };

  return (
    <section className='container mx-auto px-4 '>
      <div className='flex gap-5 py-6 justify-center items-center'>
        <div className="items-center w-[35%] border-b-2 border-[#37b629] "></div>
        <div><h2 className="text-3xl text-gray-700 text-center ">As Seen In</h2></div>
        <div className="items-center w-[35%] border-b-2 border-[#37b629]  "></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`${image.className} shadow-lg shadow-gray-950 cursor-pointer hover:opacity-80 transition-opacity`}
            onClick={() => handleImageClick(image.src)}
          >
            <Image 
              src={image.src} 
              alt={image.alt} 
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}

        {/* Modal implementation remains the same as previous version */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={closeModal}
          >
            <div 
              className={`relative flex flex-col ${
                isFullScreen 
                  ? 'w-full h-full' 
                  : 'max-w-4xl max-h-[90vh] w-full'
              }`}
            >
              {/* Modal Control Icons */}
              <div className="absolute z-60 top-[-20%] md:top-[-20%] right-2  lg:top-0 lg:right-[-24%] flex space-x-4">
                <ZoomIn 
                  size={24}
                  className="text-white cursor-pointer hover:text-gray-300 z-70"
                  onClick={(e) => handleZoom(e, 'in')}
                />
                <ZoomOut 
                  size={24}
                  className="text-white cursor-pointer hover:text-gray-300 z-70"
                  onClick={(e) => handleZoom(e, 'out')}
                />
                <Share2 
                  size={24}
                  className="text-white cursor-pointer hover:text-gray-300 z-70"
                  onClick={handleShare}
                />
                {isFullScreen ? (
                  <Minimize2 
                    size={24}
                    className="text-white cursor-pointer hover:text-gray-300 z-70"
                    onClick={toggleFullScreen}
                  />
                ) : (
                  <Maximize2 
                    size={24}
                    className="text-white cursor-pointer hover:text-gray-300 z-70"
                    onClick={toggleFullScreen}
                  />
                )}
                <X 
                  size={24}
                  className="text-white cursor-pointer hover:text-gray-300 z-70"
                  onClick={closeModal}
                />
              </div>

              {/* Image with Dynamic Zoom */}
              <div 
                ref={imageContainerRef}
                className="flex-grow flex items-center justify-center overflow-auto relative"
              >
                <div 
                  style={{ 
                    transform: `scale(${zoomLevel})`,
                    transition: 'transform 0.3s ease',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Image 
                    src={selectedImage} 
                    alt="Enlarged Image" 
                    width={1200}
                    height={800}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}