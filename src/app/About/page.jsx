/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import Link from 'next/link';
import A1 from '@/Components/Images/About/1.jpg';
import A2 from '@/Components/Images/About/2.jpg';
import A3 from '@/Components/Images/About/3.jpg';
import A4 from '@/Components/Images/About/4.jpg';
import ScrollToTop from '@/Components/ScrollToTop';


export default function About() {
    return (
        <>
         <ScrollToTop/>
        <main className="container mt-16 ">
       
            {/* First section - One image on left, text on right */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Single image on left */}
                <div>
                    <div className=" ">
                        <Image
                            src={A1}
                            alt="Garden landscape"
                            className="h-80 object-cover shadow-lg shadow-gray-950 object-center lg:h-[600px] w-full"
                        />
                    </div>
                </div>

                {/* Text on right */}
                <div>
                    <h1 className="text-3xl font-semibold lg:mt-10 text-gray-800 uppercase mb-4">ABOUT US</h1>
                    <div className="w-full h-px bg-[#37b629] mb-6"></div>
                    <p className="text-gray-700 text-justify">
                        GTS Landscaping has been assisting clients in creating lovely gardens and outdoor areas they adore since 2008. 
                        We are a team that can design, construct, and maintain your garden so that it is a space you love every day. 
                        We are more than just a landscaping firm.
                    </p>
                </div>
            </div>

            {/* Second section - Text on left, image on right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Text on left */}
                <div className='items-center flex'>
                    <p className="text-gray-700 text-justify lg:mt-20">
                        We at GTS Landscaping collaborate with excellent plumbers, electricians, and bore contractors. 
                        This means that we can handle various tasks, such as hard-wiring controllers, adding new bores, 
                        and maintaining old ones. We go above and beyond to ensure that everything in your outdoor 
                        environment functions flawlessly. Have a browse through our and 
                        see how we can transform your outdoor space.
                    </p>
                </div>

                {/* Image on right */}
                <div className="relative">
                    <div className="absolute lg:top-[-100%] lg:right-0 lg:w-full lg:h-[800px] w-full h-80">
                        <Image
                            src={A2}
                            alt="Stone pavers with garden"
                            layout="fill"
                            objectFit="cover"
                            className="object-center shadow-lg shadow-gray-950"
                        />
                    </div>
                </div>
            </div>


            {/* Third section - Full width green background with image and text */}
            <div className="w-full mt-[350px] lg:[350px] lg:[100px] py-32 relative bg-[#2a7d2e]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                        {/* Image on left */}
                        <div className="relative top-[-60%] h-80 lg:h-auto w-full">
                            <Image
                                src={A3}
                                alt="GTS Landscaping professional"
                                layout="fill"
                                objectFit="cover"
                                className="shadow-lg shadow-gray-950 object-center"
                            />
                        </div>

                        {/* Text on right */}
                        <div className="lg:col-span-2 text-white lg:my-0 md:my-[-15%] my-[-30%] lg:p-8">
                            <h2 className="text-2xl font-semibold mb-2">EXPERT SERVICES</h2>
                            <h3 className="text-xl mb-6">FOR EVERY NEED</h3>
                            <div className="w-full h-px bg-[#37b629] mb-6"></div>

                            <p className="mb-6 text-justify">
                                We can install a new, green lawn for you if you require one. We can also add mulch, 
                                enrich the soil, and do much more to make your garden better. We can take care of 
                                everything your garden needs to look its best.
                            </p>

                            <p className='text-justify'>
                                Our mission is to reflect as closely as possible the styling, decoration and colour palette 
                                of the client's home so that there is a strong visual relationship between the inside and 
                                outside spaces. We regularly work closely with architects and interior designers to ensure 
                                that this is achieved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
           
            {/* Testimonial section with background image */}
            <section 
                className="w-full h-auto py-12 text-center italic relative"
                style={{
                    backgroundImage: `url(${A4.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    position: 'relative'
                }}
            >
                {/* White overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                
                {/* Text overlay */}
                <div className="max-w-4xl container mx-auto relative z-10">
                    <p className="my-8 text-white text-justify leading-relaxed">
                        We genuinely adore our customers and are proud of the job we provide. Our objective is straightforward: 
                        to make sure you have an outside area that you like being in and are proud of. We want any outdoor space, 
                        be it your backyard, garden, or wherever else outside, to make you feel content and at ease.
                    </p>
                    <p className="mb-6 text-white text-justify leading-relaxed">
                        At GTS Landscaping, we're passionate about designing outdoor areas that improve your life with beauty 
                        and delight. We're here to bring your ideal garden to life with our skilled staff and dedication to 
                        excellence. Together, let's design a space you'll enjoy for many years to come!
                    </p>
                    <p className="font-bold text-white">GTS LANDSCAPING</p>
                    <p className="font-semibold text-white">Making Your Dream Garden a Reality</p>

                    {/* Call to action button */}
                    <div className="text-center my-16">
                        <Link href="/Contact" className="inline-block bg-[#2a7d2e] hover:bg-[#37b629] text-white font-semibold py-2 px-8 uppercase transition duration-300">
                            GET IN TOUCH
                        </Link>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}