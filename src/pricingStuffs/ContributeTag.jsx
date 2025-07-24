"use client";
import React from "react";
import { CigaretteOff } from "lucide-react";

const SectionFour = () => {
  return (
    <div className="min-h-min bg-white p-4">
      <div className="bg-[#F4F4F4] rounded-xl flex flex-col lg:flex-row">
        {/* Left Container */}
        <div className="flex-1 flex items-center justify-center pl-0 sm:pl-20 py-12 mx-4">
          <span className="bg-white mr-4 rounded-lg p-4 flex items-center justify-center">
            <CigaretteOff className="w-8 h-8  text-teal-800" />
          </span>
          <h2 className="text-black">
            Polymer contributes 1% of every payment to remove CO₂ from the
            atmosphere through Stripe Climate.
          </h2>
        </div>

        {/* Right Container */}
        <div className="flex-1 flex items-center justify-center pb-4 sm:pb-4 md:pb-4">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2">
            <span className="">Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
