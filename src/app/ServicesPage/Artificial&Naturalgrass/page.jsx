/* eslint-disable react/no-unescaped-entities */  
import React from 'react';
import Image from 'next/image';

export default function GrassChoice() {
  return (
    <div className="bg-white text-green-900 p-6 md:p-10 rounded-xl max-w-4xl mx-auto shadow-lg">
       <div>
            <h1 className=' md:text-5xl text-3xl font-bold my-12 font-bricolage text-green-800 text-center'>Artificial & Natural Grass</h1>
           
        </div>
      <div className="w-full h-[300px] relative mb-6 rounded-lg overflow-hidden">
        <Image
          src="/assets/Services/3.jpeg" // <-- Update with your actual image path
          alt="Artificial and Natural Grass"
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4 text-green-800 text-center">
        Artificial and Natural Grass: Choosing the Right One for You
      </h1>

      <div className="space-y-5 text-justify text-lg">
        <h2 className="text-2xl font-semibold text-green-700">Problem</h2>
        <p>
          Are you tired of constantly maintaining your lawn? Whether it’s mowing, watering, or dealing with patchy spots, traditional grass can be a hassle. You want a lush, green yard, but the upkeep feels overwhelming. On the other hand, artificial grass offers a low-maintenance option, but is it the right choice for your space?
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Agitation</h2>
        <p>
          Let’s face it – natural grass can be demanding. From seasonal changes to unexpected weather, keeping your lawn looking good can feel like a full-time job. If you're living in a dry or harsh climate, getting that picture-perfect lawn seems nearly impossible. Not to mention, maintaining natural grass can be costly with ongoing water bills, fertilizers, and repairs for any damage.
        </p>
        <p>
          On the flip side, while artificial grass promises to solve these issues, you may worry that it won’t have the same natural feel or could end up looking too synthetic.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Solution</h2>
        <p>
          Here’s the deal: the right choice depends on your needs. Artificial grass offers durability and ease of care, making it perfect for busy homeowners or those living in areas with challenging climates. You won’t have to worry about mowing, watering, or patchy spots, and it stays green year-round. Plus, modern artificial grass looks more realistic than ever before.
        </p>
        <p>
          On the other hand, if you love the feel of real grass underfoot, enjoy gardening, and don’t mind putting in the work, natural grass might be for you. It’s environmentally friendly, supports local ecosystems, and adds a natural beauty to your yard that’s hard to replicate.
        </p>

        <h2 className="text-2xl font-semibold text-green-700">Conclusion</h2>
        <p>
          In the end, your choice with GTS Landscaping comes down to balancing convenience, cost, and personal preference. Both artificial and natural grass have their perks – it’s all about finding what works best for you!
        </p>
      </div>
    </div>
  );
}
