/* eslint-disable react/no-unescaped-entities */            
import React from 'react';
import Image from 'next/image';

export default function ProductFeature() {
  return (
    <div className="bg-white text-green-900 p-6 md:p-10 rounded-xl max-w-4xl mx-auto shadow-lg">
        <div>
            <h1 className=' md:text-5xl text-3xl font-bold my-12 font-bricolage text-green-800 text-center'>Composite Decking</h1>
           
        </div>
      <div className="w-full h-[300px] relative mb-6 rounded-lg overflow-hidden">
        <Image
          src="/assets/Services/5.jpeg" // <-- replace with your actual image path
          alt="Durable Product"
          fill
          className="object-cover object-center"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4 text-green-800 text-center">
        Strong, Stylish, and Easy to Maintain – A Product Built to Last
      </h1>

      <div className="space-y-5 text-justify text-lg">
        <p>
          When it comes to choosing the right product for your home or outdoor space, you want something that’s both strong and easy to maintain. That’s exactly what you get with this incredibly durable product. Whether you’re planning to use it on concrete or prefer a floating frame, this product is designed to fit your needs perfectly.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Easy Installation</h2>
        <p>
          One of the great things about this product is how simple it is to install. If you have a concrete surface, you can easily place it directly on top. But if you’re working with a different surface, like grass or dirt, you can use a floating frame to hold it in place. This gives you flexibility in where you want to use it. No matter where you install it, you can count on it staying put and doing its job.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Color Choices to Match Your Style</h2>
        <p>
          Another cool feature is the variety of colors available. Whether you like bright and bold or prefer something more neutral, there’s a color to match your style. You can even mix and match different colors to create a unique look. And it’s not just about color—this product also comes in different depths, so you can choose the thickness that works best for your space.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Strong and Long-Lasting</h2>
        <p>
          This product isn’t just about looking good—it’s made to last. It’s incredibly durable, which means it can handle heavy use and tough weather without wearing out. If you’re using it outside, you won’t have to worry about it getting damaged by rain, snow, or sunshine. Inside, it can handle lots of foot traffic without showing signs of wear and tear. That makes it a great choice for both busy areas and quiet corners of your home.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Low Maintenance</h2>
        <p>
          One of the best things about this product is that it doesn’t need a lot of upkeep. Once it’s installed, you can pretty much forget about it! You won’t need to spend time cleaning, polishing, or fixing it. Just a quick sweep or rinse every now and then is all it takes to keep it looking great. This makes it perfect for anyone who wants to enjoy their space without spending a lot of time on maintenance.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Perfect for All Kinds of Spaces</h2>
        <p>
          Whether you’re fixing up your backyard, adding a new look to your garage, or upgrading your basement, this product is versatile enough to work in any space. Its durability and ease of use make it a smart choice for both indoor and outdoor projects.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Conclusion: Built for Style and Strength</h2>
        <p>
          If you’re looking for something that’s strong, stylish, and simple to maintain, this product is the way to go. With easy installation, a variety of color and depth options, and low maintenance needs, it’s a great addition to any home or outdoor area. So why wait? Make your space look amazing and enjoy the benefits of a product that’s built to last!
        </p>
      </div>
    </div>
  );
}
