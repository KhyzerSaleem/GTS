"use client";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ success: null, message: "" });

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
            fullname: formData.name,
            email: formData.email,
            phoneNumber: formData.phone,
            service: formData.service,
            message: formData.message,
          }),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType?.includes("application/json")) {
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

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
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
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-10">
              <div className="lg:w-1/2">
                <h1 className="text-left text-4xl font-bricolage md:text-6xl font-bold mb-6">
                  <span className="text-green-950">Fill the Form to </span>
                  <span className="text-green-500">
                    get
                    <br />a free consultation
                  </span>
                </h1>
                <p className="text-gray-700 mb-6 text-justify">
                  Let us know your project requirements, and our team will get
                  in touch <br /> with you for a free consultation session. We
                  offer tailored solutions for
                  <br /> web development, branding, digital marketing, and more.
                </p>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="bg-white rounded-lg shadow-lg transition-shadow p-8">
                  {status.message && (
                    <div
                      className={`mb-4 p-3 rounded ${
                        status.success === true
                          ? "bg-green-100 text-green-700"
                          : status.success === false
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="col-span-1">
                        <input
                          type="text"
                          name="name"
                          placeholder="Full name"
                          className="w-full border-b border-gray-300 py-2 focus:border-green-500 focus:outline-none"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-span-1">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="w-full border-b border-gray-300 py-2 focus:border-green-500 focus:outline-none"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-span-1">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Telephone"
                          className="w-full border-b border-gray-300 py-2 focus:border-green-500 focus:outline-none"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-span-1 relative">
                        <select
                          name="service"
                          className="w-full border-b border-gray-300 py-2 focus:border-green-500 focus:outline-none appearance-none"
                          value={formData.service}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Service Interested In
                          </option>
                          <option value="fence">Fence</option>
                          <option value="landscaping">Landscaping</option>
                          <option value="decking">Decking</option>
                          <option value="artificialgrass">
                            Artificial Grass
                          </option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mb-8">
                      <textarea
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
                        className="bg-green-500 text-white rounded-full py-3 px-6 w-full hover:bg-green-600 transition duration-300 disabled:opacity-50"
                        disabled={isLoading}
                      >
                        {isLoading ? "Sending..." : "Send Message"}
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
  );
}
