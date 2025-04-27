'use client'

import React, { useState } from 'react';

export default function FormHandling() {

     // State to manage form inputs
     const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        suburb: '',
        service: '',
        message: ''
    });



     // Handle input changes
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };
    
        // Handle form submission
        const handleSubmit = (e) => {
            e.preventDefault();
            // Show alert message
            alert('Your Information has been submitted');
            // Reset form after submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                suburb: '',
                service: '',
                message: ''
            });
        };

  return (
    <>
    {/* Contact Form */}
    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a7d2e]"
                        />

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a7d2e]"
                        />

                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a7d2e]"
                        />

                        <input
                            type="text"
                            name="suburb"
                            value={formData.suburb}
                            onChange={handleChange}
                            placeholder="Suburb"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a7d2e]"
                        />

                        <div className="relative">
                            <select 
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full px-4 cursor-pointer py-3 border text-black border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#2a7d2e]"
                            >
                                <option value="" disabled>Please select the services required</option>
                                <option value="Consult">Consult</option>
                                <option value="Design">Design</option>
                                <option value="Construction">Construction</option>
                                <option value="Other">Other</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </div>

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            rows={5}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a7d2e]"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-[#2a7d2e] hover:bg-[#37b629] text-white font-medium py-3 rounded-md transition"
                        >
                            SEND
                        </button>
                    </form>
    </>
  )
}
