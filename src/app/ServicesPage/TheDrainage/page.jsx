/* eslint-disable react/no-unescaped-entities */            
import React from 'react';
import Image from 'next/image';

export default function TheDrainage() {
  return (
    <div className="bg-white text-green-900 p-6 md:p-10 rounded-xl max-w-4xl mx-auto shadow-lg">
      <div>
            <h1 className=' md:text-5xl text-3xl font-bold my-12 font-bricolage text-green-800 text-center'>The Drainage</h1>
           
        </div>
      <div className="w-full h-[300px] relative mb-6 rounded-lg overflow-hidden">
        <Image
          src="/assets/Services/1.jpeg" // <-- replace with your actual image path
          alt="Backyard Drainage"
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4 text-green-800 text-center">
        Keep Your Backyard Dry and Happy with Proper Drainage!
      </h1>

      <div className="space-y-5 text-justify text-lg">
        <p>
          When it has rained, have you ever gone outside to find your backyard in a large, wet mess? When your lovely landscape devolves into a mud pit, it may be really irritating. Now, though, what do you know? Appropriate drainage is the easy fix!
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Why is Drainage Important?</h2>
        <p>
          Drainage is important for your landscaping, even if it might not be your first priority! If there is inadequate drainage, your yard might become muddy and unhealthy for your plants. I take it that you want your grass and plants to grow well? It is essential to provide a means for water to drain away because of this.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">It’s Not as Expensive as You Think!</h2>
        <p>
          The cost of installing drainage is a typical worry, but the good news is that it's usually not as expensive as you may think, and it's a little investment to make sure your garden looks beautiful all year round.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Enjoy Your Garden Anytime!</h2>
        <p>
          You may use your garden even after it has rained if you have enough drainage. Say goodbye to days of anticipation while the earth dries out! No more worries about treading in mud while you play outside, have barbecues, or just lounge in your yard.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Simple Solutions for a Better Garden</h2>
        <p>
          There are several methods for making your backyard's drainage better. Sometimes all it takes is a little sand or gravel added to the soil. In other cases, a basic drainage system installation could be necessary. In any case, the end product will be a year-round, happy, and dry garden.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Conclusion: A Dry Garden is a Happy Garden!</h2>
        <p>
          Save your outdoor pleasure from being ruined by inadequate drainage. You can maintain your garden's dryness, health, and beauty by following a few easy actions. You'll be able to enjoy your outside space come rain or shine, and your plants will be grateful!
        </p>
      </div>
    </div>
  );
}
