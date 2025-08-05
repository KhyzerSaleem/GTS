"use client";

import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function CallButton() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex gap-4 md:hidden">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+61450743001?text=Hello!%20I%20need%20services%20from%20GTS."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all transform hover:scale-105 animate-pulse"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Call Buttons */}
      <div className="flex flex-col gap-2">
        <a
          href="tel:++61449900001"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
        >
          <FaPhone className="text-2xl" />
        </a>
      </div>
    </div>
  );
}
