// components/TestimonialSection.jsx
import Image from 'next/image';

const Customers = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Charlie Leuschke',
      avatar: '/assets/A1.jpg',
      rating: 5,
      text: 'The artificial turf installed by GTS has completely transformed our backyard. The quality is exceptional and it looks natural all year round. Our kids love playing on it and we no longer worry about mud or maintenance.'
    },
    {
      id: 2,
      name: 'Luke Glover',
      avatar: '/assets/A2.jpg',
      rating: 5,
      text: 'I was skeptical about artificial grass but GTS changed my mind. The installation was quick and professional. My lawn looks perfect in every season with zero watering required. Best investment for my property.'
    },
    {
      id: 3,
      name: 'Roderick Schumm',
      avatar: '/assets/A1.jpg',
      rating: 5,
      text: 'Our sports facility needed durable turf that could withstand heavy use. GTS delivered exactly what we needed. The surface performs excellently under all weather conditions with minimal maintenance required.'
    },
    {
      id: 4,
      name: 'Brandi Boyle',
      avatar: '/assets/A2.jpg',
      rating: 5,
      text: 'As a busy homeowner I wanted a beautiful lawn without the endless mowing and watering. GTS provided exactly that. The installation team was professional and the result looks amazing. Highly recommended.'
    },
    {
      id: 5,
      name: 'Scott Runolfsdottir',
      avatar: '/assets/A1.jpg',
      rating: 5,
      text: 'We installed GTS products at our community center last year. The turf has held up perfectly despite constant use. The drainage system works effectively even during heavy rain. Excellent product and service.'
    },
    {
      id: 6,
      name: 'Claire Witting',
      avatar: '/assets/A2.jpg',
      rating: 5,
      text: 'GTS transformed our patchy brown lawn into a lush green space that looks fantastic year round. The team was knowledgeable and efficient. We now enjoy our outdoor space more than ever before.'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-center text-5xl font-bricolage md:text-6xl font-bold text-green-950 mb-2">Listen to what our</h2>
          <h2 className="text-center text-5xl font-bricolage md:text-6xl font-bold text-green-500 mb-6">customers say</h2>
          <p className="text-gray-600 max-w-3xl text-justify mx-auto text-sm">
            Our customers love their new artificial turf installations. They enjoy beautiful green spaces year-round with minimal maintenance. Discover why so many homeowners businesses and sports facilities trust GTS for premium quality artificial grass and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 relative mr-4 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      width={48} 
                      height={48}
                      className="rounded-full object-cover w-12 h-12"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-green-950">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-justify text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;