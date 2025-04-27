/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Image from 'next/image';
import teamImage from '@/Components/Images/Our Team/1.jpeg';
import BG1 from '@/Components/Images/Our Team/TeamMembers/BG1.jpg';
import TM1 from '@/Components/Images/Our Team/TeamMembers/1.jpeg';
import TM2 from '@/Components/Images/Our Team/TeamMembers/2.jpeg';
import TM3 from '@/Components/Images/Our Team/TeamMembers/3.jpeg';
import ScrollToTop from '@/Components/ScrollToTop';
import Link from 'next/link';

const teamMembers = [
  { 
    id: 1, 
    name: 'JOAKIM', 
    role: 'Construction Manager', 
    image: TM1,
    description: 'Joakim joined the SSL team in 2015. Formerly a cabinet maker, Joakim brings to the team his exceptional skills in timber work and his incredible eye for detail, ensuring all our work is completed to a high standard every time. A highly skilled member of the team, Joakim is well respected by both clients and his team.'
  },
  { 
    id: 2, 
    name: 'MATT', 
    role: 'Head of Maintenance', 
    image: TM2,
    description: 'Matt joined the team in early 2017 to take up the new role of Head of Maintenance. Matt is a Qualified Greenskeeper by trade and has undertaken both certificate 3 and 4 in Sports Turf Management. Matt enjoys working closely with the construction team and takes great pride in producing and maintaining high quality lawns, gardens and landscapes.'
  },
  { 
    id: 3, 
    name: 'NIKLAS', 
    role: 'Head of Construction', 
    image: TM3,
    description: 'Nik began his career in landscaping in 2004 working for several landscaping companies in Sydney and London before joining Luke as part of the growing SSL team in 2011. Nik is an integral part of the construction team and a driving force on the jobsite. His experience and set of skills in both design and construction make him an invaluable asset to the team. He ensures the smooth running of projects on a day-to-day basis and enjoys the responsibility that comes with his role.'
  },
  { 
    id: 4, 
    name: 'MATT', 
    role: 'Head of Maintenance', 
    image: TM2,
    description: 'Matt joined the team in early 2017 to take up the new role of Head of Maintenance. Matt is a Qualified Greenskeeper by trade and has undertaken both certificate 3 and 4 in Sports Turf Management. Matt enjoys working closely with the construction team and takes great pride in producing and maintaining high quality lawns, gardens and landscapes.'
  },
  { 
    id: 5, 
    name: 'NIKLAS', 
    role: 'Head of Construction', 
    image: TM3,
    description: 'Nik began his career in landscaping in 2004 working for several landscaping companies in Sydney and London before joining Luke as part of the growing SSL team in 2011. Nik is an integral part of the construction team and a driving force on the jobsite. His experience and set of skills in both design and construction make him an invaluable asset to the team. He ensures the smooth running of projects on a day-to-day basis and enjoys the responsibility that comes with his role.'
  },
  { 
    id: 6, 
    name: 'JOAKIM', 
    role: 'Construction Manager', 
    image: TM1,
    description: 'Joakim joined the SSL team in 2015. Formerly a cabinet maker, Joakim brings to the team his exceptional skills in timber work and his incredible eye for detail, ensuring all our work is completed to a high standard every time. A highly skilled member of the team, Joakim is well respected by both clients and his team.'
  },
  
  { 
    id: 8, 
    name: 'JOAKIM', 
    role: 'Construction Manager', 
    image: TM1,
    description: 'Joakim joined the SSL team in 2015. Formerly a cabinet maker, Joakim brings to the team his exceptional skills in timber work and his incredible eye for detail, ensuring all our work is completed to a high standard every time. A highly skilled member of the team, Joakim is well respected by both clients and his team.'
  },
  { 
    id: 9, 
    name: 'NIKLAS', 
    role: 'Head of Construction', 
    image: TM3,
    description: 'Nik began his career in landscaping in 2004 working for several landscaping companies in Sydney and London before joining Luke as part of the growing SSL team in 2011. Nik is an integral part of the construction team and a driving force on the jobsite. His experience and set of skills in both design and construction make him an invaluable asset to the team. He ensures the smooth running of projects on a day-to-day basis and enjoys the responsibility that comes with his role.'
  },
  { 
    id: 7, 
    name: 'MATT', 
    role: 'Head of Maintenance', 
    image: TM2,
    description: 'Matt joined the team in early 2017 to take up the new role of Head of Maintenance. Matt is a Qualified Greenskeeper by trade and has undertaken both certificate 3 and 4 in Sports Turf Management. Matt enjoys working closely with the construction team and takes great pride in producing and maintaining high quality lawns, gardens and landscapes.'
  },
];
 

function TeamPage() {
  return (
    <>
    <ScrollToTop/>
    <div className="bg-white container min-h-screen">
      {/* Team Header Section */}
      <div className=" mx-auto px-4 py-12">
      
        
        {/* Team Group Photo */}
        <div className='grid md:grid-cols-2 grid-cols-1 gap-8'> 
          <div className=''>
            <h1 className="text-4xl md:text-5xl text-gray-800 font-medium md:text-start text-center mb-8">OUR TEAM</h1>
            <div className="items-center mx-auto md:mx-0 w-[45%] border-b-2 border-[#37b629]"></div>
            
            {/* Team Description */}
            <p className="text-center md:text-start py-8 max-w-3xl mx-auto text-gray-600 mb-12">
              Take a moment to browse the profiles of the Sand & Stone Landscapes team. 
              We are proud to introduce one of the most highly-skilled, individually talented team of 
              professionals in Sydney. A carefully selected group of individuals who <b className='text-gray-800'> approach every project 
              with passion and dedication </b> to collectively deliver an exceptional result every time.
            </p>
          </div>
          <div className="max-w-4xl shadow-lg shadow-gray-950 mx-auto mb-12">
            <Image 
              src={teamImage} 
              alt="Sand & Stone Landscapes Team" 
              className="w-full h-full object-cover  "
            />
          </div>
        </div>
        
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 shadow-lg shadow-gray-950 lg:grid-cols-3 md:grid-cols-2 gap-4">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-gray-100 cursor-pointer   overflow-hidden  transition-all duration-300 relative group" 
            >
              <Image 
                src={member.image} 
                alt={member.name} 
                className=" object-cover w-full object-center  h-[500px] grayscale group-hover:grayscale-0 transition-all duration-300" 
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#2a7d2e] flex flex-col justify-center items-center leading-7 tracking-normal p-4 transition-all duration-1000 opacity-0 group-hover:opacity-90">
                <h3 className="font-semibold text-lg text-black mb-2">{member.name}</h3>
                <p className="text-white font-semibold text-lg mb-3">{member.role}</p>
                <p className="text-white text-md text-center">{member.description}</p>
              </div>
              
             
            </div>
          ))}
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div className="bg-cover shadow-lg shadow-gray-950  bg-center py-16 md:py-48" style={{backgroundImage: `url(${BG1.src})`}}>
        <div className="container mx-auto px-4">
          <div className="max-w-full py-16 md:py-48 mx-auto bg-black bg-opacity-30 p-8 rounded-lg shadow-lg">
            <blockquote className="text-center font-semibold italic  text-white mb-4">
              "From the initial meetings through to completion, Sand and Stone exceeded our expectations every 
              step of the way. The team worked rain and shine to put together a pool and yard that is the envy of the 
              neighbourhood. I couldn't recommend Sand and Stone enough! Thank you!"
            </blockquote>
            <p className="text-center  text-white">- Maya</p>
            <p className="text-center  text-[#37b629]">Roseville Chase</p>
            <div className="text-center mt-6">
              <Link href='/Contact'>
              <button className="bg-[#2a7d2e] text-white px-6 py-3 rounded-full hover:bg-[#37b629] transition-colors">
                GET IN TOUCH
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default TeamPage;