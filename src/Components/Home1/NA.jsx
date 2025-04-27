// components/ArticlesSection.jsx
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NA = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const articles = [
    {
      id: 1,
      title: "Creating a Pollinator Friendly Garden",
      date: "10 October 2024",
      excerpt: "Learn how to transform your yard into a haven for bees butterflies and other important pollinators with these practical landscaping tips and plant selections.",
      image: "/assets/Articles/A3.jpg",
      alt: "Garden archway with red door covered in green ivy",
      slug: "pollinator-friendly-garden",
      fullContent: "Learn how to transform your yard into a haven for bees, butterflies, and other important pollinators with these practical landscaping tips and plant selections. Creating a pollinator-friendly garden isn't just beneficial for the environment—it also brings vibrant colors and delightful movement to your outdoor space.\n\nStart by incorporating a diverse range of native flowering plants that bloom at different times throughout the growing season. This ensures a continuous food source for pollinators. Choose flowers in various shapes, sizes, and colors to attract different species of beneficial insects and birds.\n\nConsider including plants like coneflowers, bee balm, lavender, black-eyed Susans, and native milkweed. Group plants together in patches rather than isolated specimens to make them more visible to passing pollinators.\n\nReduce or eliminate pesticide use in your garden, as many chemicals harmful to pests also harm beneficial pollinators. Instead, focus on creating a balanced ecosystem where natural predators help control pest populations.\n\nProvide water sources like shallow bird baths or water features with landing spots. Also consider adding shelter options such as bee hotels, butterfly houses, or areas of undisturbed natural material for nesting.\n\nWith a bit of planning, you can create a beautiful, thriving garden that supports critical pollinator populations while enhancing your outdoor living space."
    },
    {
      id: 2,
      title: "Tips for Cost-Effective Projects",
      date: "16 October 2024",
      excerpt: "Discover budget-friendly strategies for your next landscaping project without sacrificing quality or beauty. Smart planning and resource management make all the difference.",
      image: "/assets/Articles/A1.jpg",
      alt: "Beautiful garden with various flowers and plants",
      slug: "cost-effective-projects",
      fullContent: "Discover budget-friendly strategies for your next landscaping project without sacrificing quality or beauty. Smart planning and resource management make all the difference when working with limited funds.\n\nBegin by creating a detailed plan and prioritizing elements based on importance and budget impact. Focus on high-impact areas first, such as entrances and primary viewing areas. Consider tackling your project in phases over multiple seasons to spread out costs.\n\nChoose plants that give you the most value for your investment. Look for perennials that will return year after year rather than annuals that need yearly replacement. Select native plants adapted to your local climate, as they typically require less water, fertilizer, and maintenance.\n\nSave on materials by shopping end-of-season sales, checking local buy-nothing groups, or repurposing existing elements. Consider alternatives to expensive hardscaping, such as using gravel instead of pavers for paths or mulch instead of ground cover plants in certain areas.\n\nInvest in proper soil preparation and amendment, which will save money in the long run by promoting plant health and reducing losses. Use compost from your own compost bin rather than purchasing pre-packaged soil amendments.\n\nFor larger projects, rent equipment instead of buying, or share costs with neighbors for deliveries of bulk materials. Consider DIY for simpler tasks while saving professional services for specialized work that requires expertise.\n\nWith careful planning and creative solutions, you can achieve a beautiful landscape that fits your budget while still meeting your aesthetic and functional goals."
    },
    {
      id: 3,
      title: "Landscaping for Increased Home Value",
      date: "29 October 2024",
      excerpt: "Explore proven landscaping techniques that can significantly boost your property value and curb appeal while creating an outdoor space you'll love to enjoy.",
      image: "/assets/Articles/A2.jpg",
      alt: "Modern house with well-maintained front yard landscaping",
      slug: "landscaping-home-value",
      fullContent: "Explore proven landscaping techniques that can significantly boost your property value and curb appeal while creating an outdoor space you'll love to enjoy. Well-designed landscaping isn't just about aesthetics—it's an investment that can yield substantial returns.\n\nFocus first on creating strong curb appeal with a well-maintained front yard. Real estate experts suggest that curb appeal can increase home values by 5-12%. Ensure your lawn is healthy, edges are clean, and incorporate structured plantings that frame your home's entrance.\n\nCreate functional outdoor living spaces that extend your usable square footage. Well-designed patios, decks, or outdoor kitchens can recover 80% or more of their installation costs at resale while providing enjoyment in the meantime.\n\nInstall energy-efficient landscaping elements such as strategically placed shade trees that can reduce cooling costs in summer. This appeals to environmentally conscious buyers and offers practical benefits.\n\nIncorporate appropriate lighting to highlight architectural features and landscaping elements while improving safety and security. Solar options can minimize energy costs while adding ambiance.\n\nConsider installing a proper irrigation system to protect your landscaping investment and appeal to buyers looking for low-maintenance options. Similarly, choose plants appropriate for your climate zone to ensure long-term success.\n\nMaintain appropriate plant scale and balance with your home's architecture. Overgrown plants can make a property look neglected, while properly scaled elements enhance architectural features.\n\nWith thoughtful design and proper maintenance, your landscape can provide enjoyment for years while significantly increasing your property's market value when it's time to sell."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-center text-5xl font-bricolage md:text-6xl font-bold mb-2">
              <span className="text-green-500">New Articles</span> 
              <span className="text-green-900"> and</span>
            </h2>
            <h2 className="text-center text-5xl font-bricolage md:text-6xl font-bold text-green-900 mb-6">Knowledge</h2>
            <p className="text-gray-600 text-justify max-w-3xl mx-auto">
              Stay informed with our latest landscaping insights tips and trends. Our expert team shares professional knowledge to help you create and maintain beautiful sustainable outdoor spaces for your home or business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl flex flex-col h-full">
                <div className="relative h-56 w-full">
                  <Image 
                    src={article.image}
                    alt={article.alt}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-green-500 text-sm font-medium mb-2">{article.date}</div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-justify mb-4 flex-grow">{article.excerpt}</p>
                  <div className="mt-auto">
                    <button 
                      className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300 w-full"
                      onClick={() => openModal(article)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && selectedArticle && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeModal}></div>
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 relative z-10 max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="mb-6">
              <div className="text-green-500 text-sm font-medium mb-2">{selectedArticle.date}</div>
              <h2 className="text-3xl font-bold text-green-900 mb-4">{selectedArticle.title}</h2>
              <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                <Image 
                  src={selectedArticle.image}
                  alt={selectedArticle.alt}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                />
              </div>
              <div className="text-gray-700 text-justify leading-relaxed">
                {selectedArticle.fullContent.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NA;