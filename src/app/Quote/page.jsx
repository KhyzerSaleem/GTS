"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Quote() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
    captchaAnswer: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ success: null, message: "" });
  const [mounted, setMounted] = useState(false);
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });

  useEffect(() => {
    setMounted(true);
    generateCaptcha();
  }, []);

  useEffect(() => {
    if (status.success) {
      const timer = setTimeout(() => {
        router.push("/thanks");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status.success, router]);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: num1 + num2 });
    setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ success: null, message: "Sending..." });

    if (parseInt(formData.captchaAnswer) !== captcha.answer) {
      setStatus({
        success: false,
        message: "Incorrect CAPTCHA answer. Please try again.",
      });
      setIsLoading(false);
      generateCaptcha();
      return;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/consultation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname: formData.fullname,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            service: formData.service,
            message: formData.message,
          }),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || `Server error: ${response.status}`
          );
        } else {
          const errorText = await response.text();
          throw new Error(`Unexpected server response (${response.status})`);
        }
      }

      await response.json();
      setStatus({
        success: true,
        message: "Message sent successfully! Redirecting to thanks page...",
      });

      setFormData({
        fullname: "",
        email: "",
        phoneNumber: "",
        service: "",
        message: "",
        captchaAnswer: "",
      });

      generateCaptcha();
    } catch (error) {
      setStatus({
        success: false,
        message:
          error.name === "AbortError"
            ? "Request timed out. Please try again."
            : error.message || "Failed to send message. Please try again.",
      });
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-[#004040] text-center">
            Get a Quote
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Link
          href="/"
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
        >
          ✕
        </Link>
        <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-[#004040] text-center">
          Get a Quote
        </h2>
        <div className="w-24 h-0.5 bg-[#37b629] mb-6 mx-auto"></div>

        <p className="text-gray-600 mb-6 text-center">
          Please fill out the form with your requirements and we will get back
          to you as soon as possible.
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <a href="tel:+61449900001" className="text-gray-700">
              (+61) 449-90-0001
            </a>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <a href="mailto:landscaping.gts@gmail.com" className="text-gray-700">
              landscaping.gts@gmail.com
            </a>
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6 mb-6 justify-center">
          <a
            href="https://www.facebook.com/people/GTS-Landscaping-and-Fencing/100046942613889/"
            className="text-blue-600 hover:text-[#37b629] transition"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="https://www.instagram.com/gts_landscaping/"
            className="text-pink-500 hover:text-[#37b629] transition"
          >
            <FaInstagram size={18} />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <input
            type="text"
            name="fullname"
            placeholder="Your name"
            value={formData.fullname}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#37b629] focus:border-[#37b629] text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#37b629] focus:border-[#37b629] text-sm"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#37b629] focus:border-[#37b629] text-sm"
          />
          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 text-black rounded appearance-none focus:outline-none focus:ring-2 focus:ring-[#37b629] focus:border-[#37b629] text-sm"
            >
              <option value="" disabled>
                Please select the services required
              </option>
              <option value="fence">Fence</option>
              <option value="landscaping">Landscaping</option>
              <option value="decking">Decking</option>
              <option value="artificialgrass">Artficial Grass</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded h-20 sm:h-24 focus:outline-none focus:ring-2 focus:ring-[#37b629] focus:border-[#37b629] text-sm"
          />
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">
              What is {captcha.num1} + {captcha.num2}?
            </label>
            <input
              type="number"
              name="captchaAnswer"
              placeholder="Answer"
              value={formData.captchaAnswer}
              onChange={handleChange}
              required
              className="w-20 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#37b629] focus:border-[#37b629] text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#37b629] text-white py-2 px-4 rounded hover:bg-[#2a7d2e] transition-colors disabled:opacity-50 text-sm"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
          {status.message && (
            <p
              className={`text-xs mt-1 ${
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
  );
}
