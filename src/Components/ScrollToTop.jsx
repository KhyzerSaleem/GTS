"use client";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-4 right-4 bg-[#2a7d2e] text-white z-50 p-3 rounded-full cursor-pointer shadow-lg hover:bg-[#37b629] transition-all"
          onClick={scrollToTop}
        >
          <FaChevronUp />
        </div>
      )}
    </>
  );
}
