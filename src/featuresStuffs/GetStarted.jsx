"use client";
import React from "react";
import ScrollTriggeredAnimation from "@/app/components/ScrollTriggeredAnimation";

const GetStarted = () => {
  return (
    <div className="relative min-h-min bg-white p-4 overflow-hidden">
      <div className="min-h-min bg-pink-100 p-4 rounded-xl md:pt-72">
        <div className="sm:mt-14 mt-8 items-center relative mx-auto text-center max-w-4xl md:pt-36">
          <ScrollTriggeredAnimation animationClass="animate-fade-up animate-once animate-duration-[1000ms] animate-delay-[200ms] animate-ease-in-out">
            <h1 className="text-black text-4xl font-bold mb-6">
              Get started with Sport Car today
            </h1>
          </ScrollTriggeredAnimation>

          <ScrollTriggeredAnimation animationClass="animate-fade-up animate-once animate-duration-[1000ms] animate-delay-[400ms] animate-ease-in-out">
            <p className="text-base font-normal text-gray-700 mb-8 max-w-2xl mx-auto">
              No matter what type of organization, from local brick-and-mortar
              shops to distributed tech startups, Polymer is the best way to
              grow a team.
            </p>
          </ScrollTriggeredAnimation>
          <div className="flex items-center justify-center space-x-4 mb-12">
            <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300">
              Sign up for free
            </button>
            <button className="px-6 py-3 bg-pink-100 text-gray-700 rounded-md hover:bg-pink-200 transition-colors duration-300">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
