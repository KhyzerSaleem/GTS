/* eslint-disable react/no-unescaped-entities */ 

import React from 'react';
import Image from 'next/image';

export default function FenceInstallation() {
  return (
    <div className="bg-white text-green-900 p-6 md:p-10 rounded-xl max-w-4xl mx-auto shadow-lg">
          <div>
            <h1 className=' md:text-5xl text-3xl font-bold my-12 font-bricolage text-green-800 text-center'>Excavation</h1>
           
        </div>
      <div className="w-full h-[300px] relative mb-6 rounded-lg overflow-hidden">
      
        <Image
          src="/assets/Services/6.jpg" // Replace with your actual image path
          alt="Ground Preparation"
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4 text-green-800 text-center">
        Why Ground Preparation is the Key to a Successful Outdoor Project
      </h1>

      <div className="space-y-5 text-justify text-lg">
        <p>
          When you’re starting a big project in your yard, like building a patio, driveway, or even just making your garden look better, it’s really important to prepare the ground first. Think of it like building a sandcastle—if the sand isn’t flat or sturdy, your castle won’t stand up for long! That’s why most projects need some digging, moving dirt around, or even adding more soil to make sure everything is ready for what comes next.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Why is Leveling the Ground Important?</h2>
        <p>
          Leveling the ground means making the surface smooth and even. This is important because if the ground is bumpy or sloped, your project might not turn out the way you want. For example, if you’re building a patio and the ground isn’t level, the patio stones might shift or crack over time. By leveling the ground first, you’re creating a strong and stable base that will help your project last longer and look better.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">What is Drainage, and Why Does it Matter?</h2>
        <p>
          Drainage is all about making sure water flows away from your project and doesn’t pool up in one spot. Imagine a big rainstorm—if water collects around your patio or garden, it could cause damage, like making the ground too soft or even causing flooding. That’s why building good drainage is super important. It’s like giving water a clear path to follow so it doesn’t mess up all your hard work.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Excavation: The First Step to a Great Project</h2>
        <p>
          Excavation is a big word that simply means digging or removing soil to prepare the ground. Sometimes you need to dig down to make space for things like drainage pipes or to remove old, uneven soil. Other times, you might need to add more soil to build up low areas. This is all part of getting the ground ready for your project. Think of it as creating a clean, flat canvas before you start painting.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Why the Right Foundation is Key</h2>
        <p>
          Just like a strong foundation is important for building a house, the same goes for your outdoor projects. The foundation is what everything else sits on, so it needs to be done right. If you skip this step or rush through it, your project might not last as long as you’d like. By taking the time to level the ground, add proper drainage, and do any necessary excavation, you’re setting yourself up for success. Your patio, driveway, or garden will be more durable and look amazing for years to come.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">How We Can Help</h2>
        <p>
          We understand that all this talk about excavation, drainage, and leveling might sound complicated, but don’t worry—we’re here to help! Our team knows exactly what needs to be done to make sure your project has a strong foundation. We’ll take care of the digging, soil addition, and drainage so that you can focus on enjoying your new space. Whether you’re building a cozy patio to relax on, a smooth driveway for your car, or a beautiful garden, we’ll make sure the groundwork is done right.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">A Strong Start Leads to a Great Finish</h2>
        <p>
          In the end, the key to a successful project is starting with a strong foundation. By taking the time to properly prepare the ground, you’re making sure your project not only looks great but also lasts a long time. So whether you’re planning a big transformation or just a small improvement, remember that a little extra effort in the beginning can make all the difference in the final result.
        </p>

        <p>
          Let us help you get started on the right foot—we’ll handle the groundwork, and you can look forward to a fantastic finished project!
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Our Services Include:</h2>
        <ul className="list-disc list-inside">
          <li>Colorbond Fencing</li>
          <li>The Drainage</li>
          <li>Artificial & Natural Grass</li>
          <li>Using Irrigation</li>
          <li>Excavation</li>
          <li>Composite Decking</li>
          <li>Structural Retaining Wall</li>
        </ul>
      </div>
    </div>
  );
}
