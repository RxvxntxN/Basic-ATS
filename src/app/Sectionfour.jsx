import React from "react";
import { Flag } from "lucide-react";

const SectionFour = () => {
  return (
    <div className="min-h-min bg-white p-4">
      <div className="bg-[#F4F4F4] rounded-xl flex flex-col lg:flex-row">
        {/* Left Container */}
        <div className="flex-1 flex items-center justify-center pl-0 sm:pl-20 py-12 mx-4">
          <span className="bg-white mr-4 rounded-lg p-4 flex items-center justify-center">
            <Flag className="w-8 h-8  text-black" />
          </span>
          <h2 className="text-black">
            You'll have unlimited time to explore Sport Cars and a 14-day free
            trial when you publish your first job
          </h2>
        </div>

        {/* Right Container */}
        <div className="flex-1 flex items-center justify-center pb-4 sm:pb-4 md:pb-4">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2 animate-wiggle animate-infinite duration-3000 animate-ease-in">
            <span className="">Sign up for free</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
