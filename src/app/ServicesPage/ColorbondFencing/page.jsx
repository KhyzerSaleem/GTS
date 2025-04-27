/* eslint-disable react/no-unescaped-entities */            
import React from 'react';
import Image from 'next/image';

export default function FenceInstallation() {
  return (
    <div className="bg-white text-green-900 p-6 md:p-10 rounded-xl max-w-4xl mx-auto shadow-lg">
          <div>
            <h1 className=' md:text-5xl text-3xl font-bold my-12 font-bricolage text-green-800 text-center'>Color Bond Fencing</h1>
           
        </div>
      <div className="w-full h-[300px] relative mb-6 rounded-lg overflow-hidden">
        <Image
          src="/assets/Services/2.jpeg" // <-- replace with your actual image path
          alt="Fence Installation"
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4 text-green-800 text-center">
        Why We Take Pride in Building Strong and Beautiful Fences
      </h1>

      <div className="space-y-5 text-justify text-lg">
        <p>
          It takes more than simply installing posts and panels to build a sturdy, straight fence; you also need to make sure that your yard looks great and remains that way for many years to come. We know how crucial it is for your fence to be level and durable, therefore we take great care during the installation process.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Keeping Your Fence Level</h2>
        <p>
          Have you ever observed that certain fences appear rather uneven or shaky? This is frequently the result of their installation without sufficient attention to detail. We occasionally place retaining boards below your fence to ensure that it remains straight and attractive. Your yard will look even nicer thanks to these planks, which help level the ground. A well-kept garden with a sturdy fence will also attract more purchasers if you ever decide to sell your house!
        </p>

        <h2 className="text-2xl font-semibold text-green-700">We Avoid Using Quick Concrete Mix</h2>
        <p>
          Did you know that quick concrete mix can actually be bad for your fence? It has chemicals that can damage steel over time, which could lead to your fence becoming weak. That’s why we stay away from quick concrete mix and use materials that will keep your fence strong and secure.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Making Sure Your Fence Stays Standing</h2>
        <p>
          We drill holes for the posts that are 200 mm broad and 600 mm deep to guarantee your fence stays in place. Your fence will have a solid base thanks to this additional work, which lowers the possibility of it collapsing in the future. We think it's worth it to provide you a fence that lasts, even if it does take a bit longer.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Conclusion: A Fence You Can Trust</h2>
        <p>
          You receive more than simply a rudimentary framework when you choose us to construct your fence. You'll be getting a fence that has been carefully made to last for generations. We like what we do because we recognize the value of your home and want to collaborate with you to make it as secure and appealing as we can.
        </p>
      </div>
    </div>
  );
}
