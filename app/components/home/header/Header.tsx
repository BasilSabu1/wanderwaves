"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Travel", href: "/travel" },
    { name: "Blog", href: "/blog" },
    { name: "Contact ", href: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-[1350px] mx-auto">
        <div className="bg-white shadow-sm rounded-lg">
          <div className="flex justify-between items-center h-20 px-6 sm:px-8">
            {/* Logo Section - moved more to the right */}
            <div className="flex items-center space-x-2 ml-12 lg:ml-16">
              <div className="flex items-center">
                <Image
                  src="/headerlogo.png"
                  alt="Wander Wave Logo"
                  width={180}
                  height={50}  
                />
              </div>
            </div>

            {/* Desktop Navigation - moved more to the left */}
            <nav className="hidden md:flex space-x-4 mr-12 lg:mr-16">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-500 px-4 py-3 text-base font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-500 focus:outline-none"
              >
                <svg
                  className="w-8 h-8"  
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-4 pt-3 pb-4 space-y-2 bg-white border-t rounded-b-lg">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-500 block px-4 py-3 text-lg font-medium transition-colors duration-200" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;