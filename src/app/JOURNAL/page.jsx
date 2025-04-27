// pages/blog.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import J1 from '@/Components/Images/Journal/1.png';
import J2 from '@/Components/Images/Journal/2.jpg';
import J3 from '@/Components/Images/Journal/3.jpg';
import J4 from '@/Components/Images/Journal/4.jpg';
import J5 from '@/Components/Images/Journal/5.jpg';
import J6 from '@/Components/Images/Journal/6.jpg';
import ScrollToTop from '@/Components/ScrollToTop';

export default function JOURNAL() {
  const blogPosts = [
    {
      id: 1,
      title: 'Gather Co. Sydney showroom',
      image: J1,
      slug: 'gather-co-sydney-showroom'
    },
    {
      id: 2,
      title: '9 Cheap And Natural Ways To Kill Weeds',
      image: J2,
      slug: 'natural-ways-to-kill-weeds'
    },
    {
      id: 3,
      title: 'We Won! 2015 Landscape Excellence Awards',
      image: J3,
      slug: 'landscape-excellence-awards'
    },
    {
      id: 4,
      title: 'Featured In Pool And Spa Review',
      image: J4,
      slug: 'pool-and-spa-review'
    },
    {
      id: 5,
      title: 'Benefits Of Working With Natural Stone',
      image: J5,
      slug: 'benefits-of-natural-stone'
    },
    {
      id: 6,
      title: 'Balmain Garden',
      image: J6,
      slug: 'balmain-garden'
    }
  ];

  return (
    <>
    <ScrollToTop/>
      <Head>
        <title>Landscaping Blog</title>
        <meta name="description" content="Landscaping tips, hints and latest news" />
      </Head>

      <div className="container mx-auto px-4 py-8 mb-[100px] max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-800 mb-6">LANDSCAPING BLOG</h1>
          <div className="w-full max-w-xl mx-auto border-t border-[#37b629] mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our landscaping blog contains hints, tips and latest news articles which we hope you find
            interesting and informative. If you have a suggestion for an article reach out to us, we
            would love to hear about it and may look to include it in a future write-up.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-[120px]">
          {blogPosts.map((post) => (
            <div key={post.id} className="relative h-96">
              {/* Full-height image container without cropping */}
              <div className="h-full w-full relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  priority={post.id <= 3}
                />
              </div>
              
              {/* Overlay content box with reduced width */}
              <div className="absolute bottom-[-22%]  left-0 right-0 flex justify-center">
                <div className="bg-white shadow-lg shadow-gray-900 p-6 w-10/12 mx-auto">
                  <h2 className="text-xl text-center text-gray-700 font-medium mb-4">{post.title}</h2>
                  <div className="w-full max-w-xs mx-auto border-t border-gray-300 mb-4"></div>
                  <div className="flex justify-center">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="bg-[#2a7d2e] hover:bg-[#37b629] text-white px-6 py-2 rounded inline-flex items-center transition-colors"
                    >
                      <span>READ MORE</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}