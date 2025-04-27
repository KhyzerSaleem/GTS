'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// Import your images here
import westPennantHills1 from './Images/ProjectGallary/1.jpg';
import westPennantHills2 from './Images/ProjectGallary/2.jpg';
import arcadia1 from './Images/ProjectGallary/3.jpg';
import arcadia2 from './Images/ProjectGallary/4.jpg';
import stanmore1 from './Images/ProjectGallary/5.jpg';
import stanmore2 from './Images/ProjectGallary/6.jpg';
import chatswood1 from './Images/ProjectGallary/7.jpg';
import chatswood2 from './Images/ProjectGallary/8.jpg';
import lindfield1 from './Images/ProjectGallary/9.jpg';
import lindfield2 from './Images/ProjectGallary/10.jpg';
import cherrybrook1 from './Images/ProjectGallary/11.jpg';
import cherrybrook2 from './Images/ProjectGallary/12.jpg';
import mosman1 from './Images/ProjectGallary/13.jpg';
import mosman2 from './Images/ProjectGallary/14.jpg';
import naremburn1 from './Images/ProjectGallary/15.jpg';
import naremburn2 from './Images/ProjectGallary/16.jpg';
import beecroft1 from './Images/ProjectGallary/17.jpg';
import beecroft2 from './Images/ProjectGallary/18.jpg';

const projectsData = [
  {
    name: 'West Pennant Hills',
    image1: westPennantHills1,
    image2: westPennantHills2,
    span: 'md:col-span-1 md:row-span-2'
  },
  {
    name: 'Arcadia',
    image1: arcadia1,
    image2: arcadia2,
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    name: 'Stanmore',
    image1: stanmore1,
    image2: stanmore2,
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    name: 'Chatswood',
    image1: chatswood1,
    image2: chatswood2,
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    name: 'Lindfield',
    image1: lindfield1,
    image2: lindfield2,
    span: 'md:col-span-1 md:row-span-2'
  },
  {
    name: 'Cherrybrook',
    image1: cherrybrook1,
    image2: cherrybrook2,
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    name: 'Mosman',
    image1: mosman1,
    image2: mosman2,
    span: 'md:col-span-1 md:row-span-2'
  },
  {
    name: 'Naremburn',
    image1: naremburn1,
    image2: naremburn2,
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    name: 'Beecroft',
    image1: beecroft1,
    image2: beecroft2,
    span: 'md:col-span-1 md:row-span-1'
  }
];

export default function HProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="container mx-auto px-4 md:py-12 py-4">
      <div className='flex gap-5 py-8 justify-center items-center'>
      <div className="items-center w-[35%]   border-b-2 border-[#37b629] "></div>
     <div > <h2 className="text-3xl text-gray-700 text-center ">Our Latest Projects</h2></div>
      <div className="items-center w-[35%] border-b-2  border-[#37b629]  "></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[300px] gap-4">
        {projectsData.map((project) => (
          <div 
            key={project.name}
            className={`relative overflow-hidden rounded-lg shadow-lg shadow-gray-950 group ${project.span}`}
          >
            <div 
              className="absolute cursor-pointer inset-0"
              onMouseEnter={(e) => {
                const target = e.currentTarget;
                const rect = target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const isInsideTarget = 
                  x >= 0 && x <= rect.width && 
                  y >= 0 && y <= rect.height;
                
                if (isInsideTarget) {
                  setHoveredProject(project.name);
                }
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget;
                const rect = target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const isInsideTarget = 
                  x >= 0 && x <= rect.width && 
                  y >= 0 && y <= rect.height;
                
                if (!isInsideTarget) {
                  setHoveredProject(null);
                }
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={project.image1}
                  alt={`${project.name} first image`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className={`absolute object-cover transition-opacity duration-1000 ease-in-out 
                    ${hoveredProject === project.name ? 'opacity-0' : 'opacity-100'}`}
                  priority
                />
                <Image
                  src={project.image2}
                  alt={`${project.name} second image`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className={`absolute object-cover transition-opacity duration-1000 ease-in-out 
                    ${hoveredProject === project.name ? 'opacity-100' : 'opacity-0'}`}
                  priority
                />
              </div>
              <div className="absolute bottom-10 left-10 right-0 text-white p-2">
                <h3 className=" md:text-3xl text-xl tracking-widest ">{project.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}