"use client";
import React, { useState } from "react";
import Carlogo from "@/app/images/carlogo.png";
import Image from "next/image";
import Car1 from "@/app/images/car1.jpg";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative min-h-screen bg-white p-4">
      <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-pink-100 to-orange-100 p-6 rounded-xl">
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
                      href="/"
                      className="text-gray-600 font-bold hover:text-gray-900"
                    >
                      Features
                    </Link>
                    <Link
                      href="/about"
                      className="text-gray-600 font-bold hover:text-gray-900"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/services"
                      className="text-gray-600 font-bold hover:text-gray-900"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/contact"
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
                    className="text-gray-600 hover:text-gray-900"
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
                    href="/"
                    className="text-gray-600 font-bold hover:text-gray-900"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-600 font-bold hover:text-gray-900"
                  >
                    About
                  </Link>
                  <Link
                    href="/services"
                    className="text-gray-600 font-bold hover:text-gray-900"
                  >
                    Services
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-600 font-bold hover:text-gray-900"
                  >
                    Contact
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
        <div className="mt-24 items-center relative max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-4">Introducing Sport Cars</p>
          <h1 className="text-black text-6xl font-bold mb-6">
            Hiring made simple
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Sport Cars gives you a beautiful site to display your job openings
            and powerful applicant tracking software for candidate relationship
            management.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
              Sign up for free
            </button>
            <button className="px-6 py-3 bg-pink-100 text-gray-700 rounded-md hover:bg-pink-200">
              Contact us
            </button>
          </div>
        </div>
        <div className="relative w-full mt-10 top-0 md:top-32 px-5 pb-10">
          <Image
            src={Car1}
            alt="Sport Car"
            className="mx-auto rounded-lg object-contain"
            layout="responsive"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
