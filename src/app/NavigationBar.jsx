"use client";

import React, { useState } from "react";
import Carlogo from "@/app/images/carlogo.png";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="w-[95%] mx-auto bg-white mt-4 shadow-md rounded-lg">
      <div className="container mx-auto px-8">
        <header className="flex items-center justify-between py-3">
          <nav className="flex w-full items-center justify-between">
            {/* Logo */}
            <div className="flex items-center object-contain">
              <Link href="/" className="text-xl font-bold text-gray-800">
                <Image
                  src={Carlogo}
                  className="object-contain"
                  alt="carlogo"
                  width={40}
                  height={40}
                />
              </Link>
              <span className="font-extrabold pl-2">Sport Cars</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex space-x-6">
                <Link
                  href="/features"
                  className="text-gray-600 font-bold hover:text-gray-900"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-600 font-bold hover:text-gray-900"
                >
                  Pricing
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-600 font-bold hover:text-gray-900"
                >
                  Blog
                </Link>
                <Link
                  href="/changelog"
                  className="text-gray-600 font-bold hover:text-gray-900"
                >
                  Changelog
                </Link>
              </div>
            </div>

            {/* Desktop Log In and Sign Up Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-600 font-bold hover:text-gray-900"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="bg-black font-bold text-white px-4 py-2 rounded-lg hover:bg-gray-900"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </header>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden flex justify-center">
            <div className="flex flex-col space-y-4 pb-4">
              <Link
                href="/features"
                className="text-gray-600 font-bold hover:text-gray-900"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 font-bold hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 font-bold hover:text-gray-900"
              >
                Blog
              </Link>
              <Link
                href="/changelog"
                className="text-gray-600 font-bold hover:text-gray-900"
              >
                Changelog
              </Link>
              <Link
                href="/login"
                className="text-gray-600 font-bold hover:text-gray-900"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="bg-black text-white font-bold px-4 py-2 rounded hover:bg-gray-900 inline-block"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NavigationBar;
