"use client";
import Image from "next/image";
import C1 from "@/Components/Images/Contact/1.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import ScrollToTop from "@/Components/ScrollToTop";
import { useState } from "react";

const Contact = () => {
  // Add state management
  const [formData, setFormData] = useState({
    senderEmail: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ success: null, message: "Sending..." });

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      // Use the local API endpoint with the trailing slash included
      const response = await fetch(
        "https://www.landscapinggts.com.au/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.senderEmail, // This maps your frontend field to what the API expects
            subject: formData.subject,
            message: formData.message,
          }),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      // Handle non-JSON responses (important for error handling)
      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(`Unexpected response: ${text}`);
      }

      if (!response.ok) {
        throw new Error(
          data.message ||
            data.errors?.join(", ") ||
            `Server error: ${response.status} ${response.statusText}`
        );
      }

      setFormData({ senderEmail: "", subject: "", message: "" });
      setStatus({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      setStatus({
        success: false,
        message:
          error.name === "AbortError"
            ? "Request timed out. Please try again."
            : error.message || "Network error. Check your connection.",
      });
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ScrollToTop />
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Image with full height */}
          <div className="lg:w-1/2">
            <div className="h-full">
              <Image
                src={C1}
                alt="Succulent plant in grey pot"
                className="object-cover object-center w-full h-full shadow-lg shadow-gray-950"
                style={{ minHeight: "600px" }}
              />
            </div>
          </div>

          {/* Right side - Contact form with full height */}
          <div className="lg:w-1/2">
            <div className="h-full flex flex-col">
              <h2 className="text-4xl md:text-start text-center md:text-5xl font-medium text-gray-800 mb-6">
                CONTACT
              </h2>
              <div className="w-60 h-0.5 flex justify-center mx-auto md:justify-start md:mx-0 bg-[#37b629] mb-6"></div>

              <p className="text-gray-600 mb-6">
                Please fill out the contact form with your requirements and we
                will get back to you as soon as possible.
              </p>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Call Us: (+61) 0449-900-001
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span className="text-gray-700">
                    landscaping.gts@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Pridham Ave, Box Hill NSW 2765
                  </span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex md:justify-start justify-center gap-8 mb-24">
                <a
                  href="#"
                  className="text-blue-600 hover:text-[#37b629] transition"
                >
                  <FaFacebook size={24} />
                </a>
                <a href="#" className=" text-pink-500  transition">
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-red-600 hover:text-[#37b629] transition"
                >
                  <FaYoutube size={24} />
                </a>
                <a
                  href="#"
                  className="text-blue-950 hover:text-[#37b629] transition"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </div>

              {/* Form takes up the rest of the space */}
              <div className="flex-grow">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email"
                      value={formData.senderEmail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          senderEmail: e.target.value,
                        })
                      }
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#37b629] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#37b629] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Your message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-[#37b629] focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#37b629] text-white py-3 px-6 rounded-lg hover:bg-[#2a7d2e] transition-colors disabled:opacity-50"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>

                  {status.message && (
                    <p
                      className={`text-sm mt-4 ${
                        status.success === true
                          ? "text-green-600"
                          : status.success === false
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {status.message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 pb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-[#2a7d2e]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Find Us
        </h2>
        <div className="w-full rounded-xl shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.2502800901925!2d150.88052397500277!3d-33.650676307792985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129e179a54ecc7%3A0x3e9cdcac966d9055!2sPridham%20Ave%2C%20Box%20Hill%20NSW%202765%2C%20Australia!5e0!3m2!1sen!2s!4v1744805255168!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
