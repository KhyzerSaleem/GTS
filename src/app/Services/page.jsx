/* eslint-disable react/no-unescaped-entities */            
import Image from 'next/image'
import S1 from '@/Components/Images/Services/1.jpg'
import S2 from '@/Components/Images/Services/2.jpeg'
import S3 from '@/Components/Images/Services/3.jpg'
import S4 from '@/Components/Images/Services/4.jpg'
import ScrollToTop from '@/Components/ScrollToTop'
import Link from 'next/link'


export default function Services() {
    // Service data with URLs for each service page
    const serviceData = [
        {
            title: "The Drainage",
            description: "Appropriate drainage is sometimes disregarded, yet it may prevent your backyard from becoming a wet mess!",
            image: '/assets/Services/1.jpeg',
            url: '/ServicesPage/TheDrainage'

        },
        {
            title: "Color Bond Fencing",
            description: "We take great pride in installing gates and fences that are level and straight! Most of the time, in order to keep the fence level, part of it has to have retaining boards placed beneath it.",
            image: '/assets/Services/2.jpeg',
            url: "/ServicesPage/ColorbondFencing"
        },
        {
            title: "Artificial & Natural Grass",
            description: "Are you tired of constantly maintaining your lawn? Whether it's mowing, watering, or other maintenance tasks, we offer solutions with both natural and artificial options.",
            image: '/assets/Services/3.jpeg',
            url: "/ServicesPage/Artificial&Naturalgrass"
        },
        {
            title: "Structural Retaining Wall",
            description: "For your retaining wall needs, we can provide a wide range of alternatives.",
            image: '/assets/Services/4.jpeg',	
            url: "/ServicesPage/StructuralRetainingwall"
        },
        {
            title: "Composite Decking",
            description: "You may install this incredibly durable product on concrete or on a floating frame. Available in various colors and depths to meet your needs.",
            image: '/assets/Services/5.jpeg',
            url: "/ServicesPage/CompositeDecking"
        },
        {
            title: "Excavation",
            description: "In order to level the ground, build drainage, or do a mix of these tasks, most conversions need some sort of excavation or soil addition.",
            image: '/assets/Services/6.jpg',	
            url: "/ServicesPage/Excavation"
        }
    ];

    return (
        <>
        <ScrollToTop/>
        <div className="min-h-screen">
            <main className="container pt-8 lg:mb-[50px]">
                {/* Services Header Section */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-12">
    <div className="w-full lg:w-1/2 mb-8 text-center lg:text-left lg:mt-[100px] lg:mb-0 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-medium text-gray-800 mb-4">SERVICES</h1>
        <div className="w-52 h-0.5 mx-auto lg:mx-0 bg-[#37b629] mb-8"></div>
        <p className="text-gray-700 max-w-lg mx-auto lg:mx-0 text-left lg:text-justify mb-6">
  As a full service landscaping company, we provide
  a high end all inclusive landscaping solution.
</p>
<p className="text-gray-700 max-w-lg mx-auto lg:mx-0 text-left lg:text-justify mb-6">
  Our dedicated team of professionals specializes in transforming outdoor spaces into beautiful, functional environments that enhance your property's value and your quality of life. From initial design consultation to ongoing maintenance, we handle every aspect of your landscaping needs with precision and care.
</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0 mb-8">
            <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#37b629] flex items-center justify-center mr-2">
                    <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-gray-700 text-sm">Landscape Design</span>
            </div>
            <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#37b629] flex items-center justify-center mr-2">
                    <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-gray-700 text-sm">Composite Decking</span>
            </div>
            <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#37b629] flex items-center justify-center mr-2">
                    <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-gray-700 text-sm">Structural Retaining Wall</span>
            </div>
            <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#37b629] flex items-center justify-center mr-2">
                    <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-gray-700 text-sm">Excavation</span>
            </div>
        </div>
       
    </div>
    <div className="w-full lg:w-1/2 relative px-4 sm:px-6 lg:px-0">
        <div className="relative">
            <Image
                src={S1}
                alt="Garden seating area with wooden fence and cushions"
                className="object-cover shadow-lg shadow-gray-950 w-full h-auto lg:h-[550px] object-center rounded-md"
                priority
            />
            <div className="absolute bottom-0 left-0 right-0 text-sm bg-black bg-opacity-60 text-white p-4 sm:p-6 rounded-b-md hidden sm:block">
                <h3 className="text-xl font-medium mb-2">Professional Landscaping</h3>
                <p className="text-sm text-gray-200">Transform your outdoor space with our expert services</p>
            </div>
        </div>
    </div>
</div>

                {/* Specialized Services Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-12">
                    {serviceData.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl flex flex-col h-full">
                            <div className="relative h-56 w-full">
                                <Image 
                                    src={service.image}
                                    alt={service.title}
                                    layout="fill"
                                    objectFit="cover"
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-green-900 mb-2">{service.title}</h3>
                                <div className="w-16 h-0.5 bg-green-500 mb-4"></div>
                                <p className="text-gray-600 text-justify mb-4 flex-grow">{service.description}</p>
                                <div className="mt-auto">
                                    <Link href={service.url}>
                                        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300 w-full">
                                            Read More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Landscape design */}
                <div className="w-full relative bg-[#2a7d2e] lg:mt-44 p-4 lg:p-8 mt-[280px] lg:py-40 text-white rounded flex flex-col lg:flex-row">
    {/* Left side - Image */}
    <div className="w-full lg:w-1/3 mb-8 lg:mb-0 absolute md:top-[-45%] top-[-26%] lg:top-[-13%] left-0 lg:left-5 z-10">
        <div className="relative h-64 lg:h-[300px] w-full lg:w-[450px]">
            <Image
                src={S2}
                alt="Landscape design sketch with colored pencils"
                fill
                className="object-cover shadow-lg shadow-gray-950 object-center"
            />
        </div>
    </div>

    {/* Right side - Text content */}
    <div className="w-full mt-4 lg:mt-0 lg:max-h-full lg:ml-auto">
        {/* Content container with proper spacing from image */}
        <div className="lg:pl-[400px] md:pl-40  pl-0">
            {/* Heading positioned at the right side of the picture */}
            <div className="flex justify-center mb-2">
                <h2 className="text-2xl font-semibold">LANDSCAPE DESIGN</h2>
            </div>
            <div className="w-full h-0.5 justify-end bg-[#37b629] mb-8"></div>
            
            {/* First paragraph starting from the right of the image */}
           
        </div>
        
        {/* Text below the image (remains in its original position) */}
        <div className='leading-7 lg:leading-8 tracking-wide text-sm lg:text-base'>
        <p className="mb-4 text-justify">
                Depending on your requirements, our landscape design team provide you with a complete design along with your quote. When you work with us, you'll have access to the skill, knowledge, and expertise needed to bring your landscape vision to life.
            </p>
            <p className="mb-4 text-justify">
                Whether you're after a recommendation for the design or set on a particular look, we're completely collaborative and hands-on with the project from start to finish. We work with you to understand your vision and conceptualize it according to your tastes and preferences. Our goal is to create a landscape design that will be beautiful, unique and functional.
            </p>
            <p className="mb-4 text-justify">
                The first step is for use to meet you on site to discuss your needs and requirements for the project. We will go over your goals for the space, design elements you want included, and of course, your budget.
            </p>
            <p className="text-justify">
                We specialize in a wide range of landscaping designs, such as natural and earthy or sleek and modern. We can produce a landscape design for entire backyard spaces including new pool surrounds, existing pool renovations as well as front entrances.
            </p>
        </div>
    </div>
</div>
                {/* Landscape Construction Section */}
                <div className="flex flex-col lg:flex-row my-16 lg:my-20 relative items-center mb-16">
                    <div className="w-full leading-7 tracking-wide lg:w-1/2 pr-0 lg:pr-12 order-2 lg:order-1 mt-64 lg:mt-0">
                        <h2 className="text-2xl font-semibold text-gray-800 lg:mt-0 mt-[-20px] mb-6">LANDSCAPE CONSTRUCTION</h2>
                        <p className="text-gray-700 mb-4 text-justify">
                            Our landscape construction team has been handpicked for their skill, experience, qualifications and attention to detail. They are thorough, careful and exceptional at what they do. Sand & Stone Landscapes takes pride in creating highly functional and aesthetically pleasing outdoor environments that can be enjoyed for years.
                        </p>
                        <p className="text-gray-700 mb-8 text-justify">
                            We have a solid reputation for delivering exceptional landscape construction. Our team are easy to deal with, flexible and always puts the customer at the centre of everything we do.
                        </p>
                        <div className='justify-center flex lg:justify-start'>
                            <Link href='/Contact'>
                                <button className="bg-[#2a7d2e] text-white px-6 py-3 rounded hover:bg-[#37b629] transition">
                                    CHAT WITH US
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="absolute left-0 lg:right-0 lg:left-auto top-[-10%] lg:top-[-50%] w-full lg:w-1/2 mb-8 lg:mb-0 order-1 lg:order-2">
                        <div className="h-64 lg:h-[700px] w-full">
                            <Image
                                src={S3}
                                alt="Modern swimming pool with landscaping"
                                fill
                                className="object-cover shadow-lg shadow-gray-950 object-center"
                            />
                        </div>
                    </div>
                </div>

                {/* Garden Maintenance Section */}
                <div className="container mx-auto px-4 my-16">
  {/* Full-width image section */}
  <div className="relative h-96 md:h-[500px] w-full mb-12">
    <Image
      src={S4}
      alt="Professional landscaping services in Sydney's northwest"
      fill
      className="object-cover object-center shadow-lg shadow-gray-400 rounded-lg"
    />
  </div>
  
  {/* Full-width text and table section */}
  <div className="w-full">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">LANDSCAPING SERVICES</h2>
    
    <p className="text-gray-700 leading-7 tracking-wide mb-8 text-justify max-w-4xl mx-auto">
      Our expert landscaping team specializes in transforming outdoor spaces across Sydney's northwest region. We provide comprehensive landscaping solutions for residential and commercial properties, delivering exceptional results tailored to each client's unique vision and requirements.
    </p>
    
    
    
    {/* Responsive table for locations - visible on medium screens and up */}
    <div className="hidden md:block overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md">
      
      <thead>
  <tr className="bg-gray-100 border-b">
    <th colSpan={4} className="py-3 px-4 text-center font-semibold text-lg">
    Areas We Service
    </th>
  </tr>
</thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Kellyville
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Quakers Hill
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Riverstone
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Oran Park
              </span>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Box Hill
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Acacia Gardens
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Melonba
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Austral
              </span>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Gabels
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Mt Druitt
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping North Kellyville
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Edmondson Park
              </span>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Glenhaven
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Seven Hills
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Ryde
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Catherine Field
              </span>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Castle Hill
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Glenwood
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Parramatta
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Cobbitty
              </span>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Pennant Hill
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Rouse Hill
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Epping
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Orchard Hills North
              </span>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Windsor
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping St Marys
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Liverpool
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Lappington
              </span>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Richmond
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Jordan Springs
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Campbelltown
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Bradfield
              </span>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Pitt Town
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Orchid Hills
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Marsden Park
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Bringelly
              </span>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Penrith
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Colbee
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Schofields
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Badgerys Creek
              </span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Blacktown
              </span>
            </td>
            <td className="py-2 px-4">
              <span className="flex items-center">
                <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
                Landscaping Oakville
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    {/* Mobile-only responsive table (shows on small screens only) */}
    <div className="md:hidden mt-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-100 py-3 px-4 border-b">
          <h4 className="font-semibold">Our Service Areas</h4>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Kellyville
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Box Hill
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Gabels
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Glenhaven
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Castle Hill
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Pennant Hill
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Windsor
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Richmond
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Pitt Town
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Penrith
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Blacktown
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Marsden Park
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Schofields
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Quakers Hill
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Acacia Gardens
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Mt Druitt
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Seven Hills
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Glenwood
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Rouse Hill
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping St Marys
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Jordan Springs
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Orchid Hills
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Colbee
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Oakville
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Riverstone
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Melonba
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping North Kellyville
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Ryde
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Parramatta
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Epping
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Liverpool
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Campbelltown
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Oran Park
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Austral
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Edmondson Park
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Catherine Field
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Cobbitty
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Orchard Hills North
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Lappington
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Bradfield
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Bringelly
            </div>
            <div className="flex items-center">
              <Image src='/assets/Services/98.svg' height={16} width={16} alt="Check mark" className="mr-3" />
              Landscaping Badgerys Creek
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            </main>
        </div>
        </>
    )
}