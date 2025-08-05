"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className="w-full z-50 bg-[#004040] text-white relative">
      <div className="container mx-auto flex items-center py-2 px-4 relative">
        {/* Logo */}
        <div className="lg:w-1/5 w-full">
          <Link href="/">
            <Image src="/assets/logo.png" alt="Logo" height={300} width={300} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex text-white space-x-8 mx-auto">
            <li className="py-2">
              <Link
                href="/"
                className={`hover:text-green-400 transition-all duration-300 ${isActive("/") ? "text-green-400" : ""}`}
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/About"
                className={`hover:text-green-400 transition-all duration-300 ${isActive("/About") ? "text-green-400" : ""}`}
              >
                About Us
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/Services"
                className={`hover:text-green-400 transition-all duration-300 ${isActive("/Services") ? "text-green-400" : ""}`}
              >
                Services
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/Quote"
                className={`hover:text-green-400 transition-all duration-300 ${isActive("/Quote") ? "text-green-400" : ""}`}
              >
                Get a Quote
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/blog"
                className={`hover:text-green-400 transition-all duration-300 ${isActive("/Blog") ? "text-green-400" : ""}`}
              >
                Blog
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/Contact"
                className={`hover:text-green-400 transition-all duration-300 ${isActive("/Contact") ? "text-green-400" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Phone Number */}
        <div className="hidden lg:flex text-[15px] items-center lg:w-1/5 justify-end">
          <span className="mr-3">
            <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-green-400" />
          </span>
          <a href="tel:+61449900001">
            <span>(+61) 449-90-0001</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex justify-end flex-1 lg:hidden">
          <button
            className="text-2xl z-30"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed z-50 transition-all duration-300 top-0 right-0 h-full w-64 bg-[#004040] shadow-lg lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-2xl text-white"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </div>
          <ul className="flex flex-col space-y-4 p-4">
            {[
              { href: "/", label: "Home" },
              { href: "/About", label: "About Us" },
              { href: "/Services", label: "Services" },
              { href: "/Quote", label: "Get a Quote" },
              { href: "/blog", label: "Blog" },
              { href: "/Contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href} className="border-b border-gray-700 pb-2">
                <Link
                  href={item.href}
                  className={`block transition-all duration-300 ${isActive(item.href) ? "text-green-400" : "hover:text-green-400"}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center text-sm pt-4">
              <span className="mr-3">
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-green-400" />
              </span>
              <a href="tel:+61449900001">
                <span>(+61) 449-90-0001</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
}