"use client";
import React, { useState, useEffect } from "react";
import InfiniteLogoSlider from "@/app/InfiniteLogoSlider";

const SectionOne = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-min bg-white p-2 sm:p-4">
      <div className="bg-[#F4F4F4] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] rounded-xl w-full flex items-center justify-center">
        <div className="px-6 w-full">
          <h2
            className="text-gray-600 font-bold text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 text-center"
            data-aos="fade-right"
          >
            Helping to grow the next generation of companies
          </h2>
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <InfiniteLogoSlider />
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
