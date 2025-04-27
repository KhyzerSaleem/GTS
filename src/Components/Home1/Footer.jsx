import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEnvelope, 
  faLocationDot, 
  faPhone 
} from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faFacebookF,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-green-950 text-white py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 - Logo and Info */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="pb-6">
                  <Link href="/">
                    <Image src='/assets/logo.png' alt='Logo' height={300} width={300} />
                  </Link>
                </div>
                <p>Sustainable Innovations | Smart Landscaping | Eco-Friendly Tech</p>
              </div>
              <div className="flex space-x-4 mt-6">
                <Link href="#" className="bg-white hover:bg-yellow-800 p-2 rounded-lg">
                  <span className="text-green-950">
                    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
                  </span>
                </Link>
                <Link href="#" className="bg-white hover:bg-pink-800 p-2 rounded-lg">
                  <span className="text-green-950">
                    <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
                  </span>
                </Link>
                <Link href="#" className="bg-white hover:bg-blue-800 p-2 rounded-lg">
                  <span className="text-green-950">
                    <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" />
                  </span>
                </Link>
                <Link href="#" className="bg-white hover:bg-red-800 p-2 rounded-lg">
                  <span className="text-green-950">
                    <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mt-2 mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="text-gray-300 hover:text-bright-green transition duration-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services" className="text-gray-300 hover:text-bright-green transition duration-300">
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/About" className="text-gray-300 hover:text-bright-green transition duration-300">
                      About Us 
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-300 hover:text-bright-green transition duration-300">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-6 md:mt-0">
                {/* This empty div helps with alignment */}
              </div>
            </div>

            {/* Column 3 - Contact Us */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mt-2 mb-6">Contact Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1">
                      <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-bright-green" />
                    </span>
                    <span>landscaping.gts@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1">
                      <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 text-bright-green" />
                    </span>
                    <span>Box Hill NSW 2765, Australia</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3">
                      <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-bright-green" />
                    </span>
                    <span>Call Us: (+61) 0449-900-001</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 md:mt-0">
                {/* This empty div helps with alignment */}
              </div>
            </div>
          </div>
          
          {/* White Border Line */}
          <div className="w-full border-t border-white my-8"></div>
          
          {/* Copyright Text */}
          <div className="text-center">
            <p>© 2025 Green Truf Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}