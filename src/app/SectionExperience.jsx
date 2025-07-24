import React from "react";
import Image from "next/image";
import Experience from "@/app/images/careerXP.webp";
import { Moon } from "lucide-react";
import { Network } from "lucide-react";

const SectionExperience = () => {
  return (
    <>
      <div className="relative min-h-max bg-white p-4">
        <div className="relative min-h-max bg-black p-6 rounded-xl flex items-center justify-center flex-col">
          <h1 className="text-4xl font-extrabold text-pink-200 mb-4 pt-24">
            Tailor your experience
          </h1>
          <p className="text-gray-400 md:text-center max-w-lg ">
            Our customizations go deep. Polymer is applicant tracking software
            that can flex to fit your needs perfectly.
          </p>
          <div className="md:w-[90%] md:h-[90%] rounded-lg object-cover my-9">
            <Image
              src={Experience}
              //width={500}
              //height={500}
              alt="Picture of the author"
              objectFit="cover"
              layout="responsive"
            />
          </div>
          <div className="flex items-center justify-center md:flex-row md:gap-48 gap-16 pt-6 pb-24 overflow-hidden flex-col">
            <div className="flex items-center justify-center flex-row gap-4 max-w-sm">
              <span className="bg-gray-800 mr-4 rounded-lg p-4 flex items-center justify-center mb-8">
                <Moon className="w-8 h-8  text-white" />
              </span>
              <div>
                <h1 className="text-white font-bold mb-2">Dark mode enabled</h1>
                <p className="text-gray-400 font-medium">
                  With support for both light and dark themes, Sport Car fits in
                  perfectly with the rest of your productivity suite.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center flex-row gap-4 max-w-sm ">
              <span className="bg-gray-800 mr-4 rounded-lg p-4 flex items-center justify-center mb-8">
                <Network className="w-8 h-8  text-white" />
              </span>
              <div>
                <h1 className="text-white font-bold mb-2">Jobs API included</h1>
                <p className="text-gray-400 font-medium">
                  You can either use our ready-made job board or build your own
                  front-end using our developer API.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionExperience;
