"use client";
import React from "react";

const GetStarted = () => {
  return (
    <div className="relative min-h-min bg-white p-4">
      <div className="relative min-h-min bg-[#F4F4F4] p-6 rounded-xl">
        <div className="mt-24 items-center relative max-w-4xl mx-auto text-center">
          <h1 className="text-black text-6xl font-bold mb-6">
            Get started with Sport Car today
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            No matter what type of organization, from local brick-and-mortar
            shops to distributed tech startups, Polymer is the best way to grow
            a team.
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
      </div>
    </div>
  );
};

export default GetStarted;
