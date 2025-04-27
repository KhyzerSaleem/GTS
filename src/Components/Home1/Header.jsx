'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if the current path matches the link
  const isActive = (path) => pathname === path;

  return (
    <header className="w-full z-50 bg-[#004040] text-white relative">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 relative">
        {/* <div className="">
          <Link href="/">
            <div className="text-white font-bold text-2xl">
              <span className="text-white">Ever</span>
              <span className="text-green-400">Green</span>
            </div>
          </Link>
        </div> */}
         <div className="">
          <Link href="/">
            <Image src='/assets/logo.png' alt='Logo' height={300} width={300} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex text-white space-x-8">
            <li className="py-2">
              <Link 
                href="/" 
                className={`
                  hover:text-green-400 
                  transition-all 
                  duration-300 
                  ${isActive('/') ? 'text-green-400' : ''}
                `}
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link 
                href="/About" 
                className={`
                  hover:text-green-400 
                  transition-all 
                  duration-300 
                  ${isActive('/About') ? 'text-green-400' : ''}
                `}
              >
                About Us
              </Link>
            </li>
            <li className="py-2">
              <Link 
                href="/Services" 
                className={`
                  hover:text-green-400 
                  transition-all 
                  duration-300 
                  ${isActive('/Services') ? 'text-green-400' : ''}
                `}
              >
               Services
              </Link>
            </li>
            <li className="py-2">
              <Link 
                href="/blog" 
                className={`
                  hover:text-green-400 
                  transition-all 
                  duration-300 
                  ${isActive('/Blog') ? 'text-green-400' : ''}
                `}
              >
                Blog
              </Link>
            </li>
            <li className="py-2 relative group">
              <Link 
                href="/Contact" 
                className={`
                  hover:text-green-400 
                  transition-all 
                  duration-300 
                  ${isActive('/Pages') ? 'text-green-400' : ''}
                `}
              >
                Contact
                {/* Pages <span className="inline-block ml-1">▼</span> */}
              </Link>
            </li>
          </ul>
        </nav>

      

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-2xl z-60 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        <div
          className={`
            fixed 
            z-50
            transition-all 
            duration-300
            top-0 
            right-0
            h-full 
            w-64
            bg-[#004040]
            shadow-lg
            lg:hidden
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
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
              { href: "/Services", label: " Services" },
              { href: "/blog", label: "Blog" },
              { href: "/Contact", label: "Contact"},
            ].map((item) => (
              <li 
                key={item.href}
                className="border-b border-gray-700 pb-2"
              >
                <Link 
                  href={item.href} 
                  className={`
                    block
                    transition-all 
                    duration-300 
                    ${isActive(item.href) ? 'text-green-400' : 'hover:text-green-400'}
                  `}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
        
          </ul>
        </div>
        
        {/* Overlay when mobile menu is open */}
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