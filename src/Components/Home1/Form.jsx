'use client'
import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telephone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", formData);
      setSubmitMessage('Thanks! Your message has been sent successfully.');
      
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        telephone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section with Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-10">
              {/* Left Column - Text */}
             {/* Left Column - Text */}
<div className="lg:w-1/2">
  <h1 className="text-left text-4xl font-bricolage md:text-6xl font-bold mb-6">
    <span className="text-green-950">Fill the Form to </span>
    <span className="text-green-500">get<br />a free consultation</span>
  </h1>
  <p className="text-gray-700 mb-6 text-justify ">
    Let us know your project requirements, and our team will get in touch <br></br> with you for a free consultation session. We offer tailored solutions for<br></br> web development, branding, digital marketing, and more.
  </p>
</div>


              {/* Right Column - Form */}
              <div className="lg:w-1/2 w-full">
                <div className="bg-white rounded-lg shadow-lg transition-shadow p-8">
                  {submitMessage && (
                    <div className={`mb-4 p-3 rounded ${submitMessage.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                      {submitMessage}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="col-span-1">
                        <label htmlFor="fullName" className="sr-only text-green-950">Full name</label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          placeholder="Full name"
                          className="w-full border-b border-gray-300 py-2 focus:border-green-500 focus:outline-none"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="email" className="sr-only text-green-950">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          className="w-full border-b border-gray-300 py-2 focus:border-green-500 focus:outline-none"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="telephone" className="sr-only text-green-950">Telephone</label>
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          placeholder="Telephone"
                          className="w-full border-b border-gray-300 py-2 focus:border-green-500 focus:outline-none"
                          value={formData.telephone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-span-1">
                        <label htmlFor="service" className="sr-only text-green-950">Service</label>
                        <input
                          type="text"
                          id="service"
                          name="service"
                          placeholder="Service Interested In"
                          className="w-full border-b border-gray-300 py-2 focus:border-green-500 focus:outline-none"
                          value={formData.service}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-8">
                      <label htmlFor="message" className="sr-only text-green-950">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Briefly describe your project or inquiry"
                        rows="3"
                        className="w-full border-b border-gray-300 py-2 focus:border-green-500 focus:outline-none resize-none"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="bg-green-500 text-white rounded-full py-3 px-6 w-full hover:bg-green-600 transition duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Get Started'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  )
}
