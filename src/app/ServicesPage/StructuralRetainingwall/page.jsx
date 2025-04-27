/* eslint-disable react/no-unescaped-entities */            
import React from 'react';
import Image from 'next/image';

export default function FenceInstallation() {
  return (
    <div className="bg-white text-green-900 p-6 md:p-10 rounded-xl max-w-4xl mx-auto shadow-lg">
        <div>
            <h1 className=' md:text-5xl text-3xl font-bold my-12 font-bricolage text-green-800 text-center'>Structural Retaining Wall</h1>
           
        </div>
      <div className="w-full h-[300px] relative mb-6 rounded-lg overflow-hidden">
        <Image
          src="/assets/Services/4.jpeg" // <-- replace with your actual image path
          alt="Retaining Wall Installation"
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4 text-green-800 text-center">
        Building Strong and Long-Lasting Retaining Walls for Your Yard
      </h1>

      <div className="space-y-5 text-justify text-lg">
        <p>
          Your retaining wall should have a stunning appearance in addition to being strong. With so many alternatives to choose from, we can help you find what suits your needs and style!
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Different Types of Retaining Walls</h2>
        <p>
          We can install a wooden sleeper retaining wall, concrete sleepers, or a wall that resembles a Sydney stone block wall, depending on your preference. Every alternative has a distinct appearance and strength, so you may select the one that best suits your GtS Landscaping.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Why It’s Important to Build It Right</h2>
        <p>
          It's important that your retaining wall be straight and sturdy. Maintaining its strength over time is just as important as making it seem wonderful. You don't have to be concerned about the wall moving or collapsing in the future since we make sure the posts are positioned at the proper depth to sustain it.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Retaining Walls That Last</h2>
        <p>
          We prioritize quality regardless of the wall type you select. We construct walls that are meant to last, allowing you to enjoy your garden worry-free for many years to come.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Conclusion: A Retaining Wall You Can Trust</h2>
        <p>
          We are aware of the significance of having a retaining wall that is both elegant and robust. We go above and above to construct it correctly, with the greatest tools and materials. You'll obtain a wall that supports and accentuates the beauty of your garden with our assistance.
        </p>
      </div>
    </div>
  );
}
