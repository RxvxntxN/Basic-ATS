"use client";
import React, { useState } from "react";
import Carlogo from "@/app/images/carlogo.png";
import Image from "next/image";
import Car1 from "@/app/images/car1.jpg";
import Link from "next/link";
import NavigationBar from "@/app/NavigationBar";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative min-h-screen bg-white p-4">
      <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-pink-100 to-orange-100 p-6 rounded-xl">
        <NavigationBar />
        <div className="mt-24 items-center relative max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-4">Introducing Sport Cars</p>
          <h1 className="text-black text-6xl font-bold mb-6 animate-fade animate-once animate-duration-[3000ms]">
            Hiring made simple
          </h1>
          <p className="text-base text-gray-700 mb-8 max-w-2xl mx-auto">
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
