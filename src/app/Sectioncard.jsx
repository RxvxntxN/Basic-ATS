import Image from "next/image";
import Robin from "@/app/images/robin.jpeg";
import React from "react";

const Sectioncard = () => {
  /**
   * first create 2 cards
   * 1. card will take full width of the screen and it would be a row
   */

  return (
    //{/* absolute rounded-lg z-10 right-32 -top-12 bg-black min-h-min p-4 w-[35%] */}
    <div className="max-md:min-h-min max-md:bg-white max-md:p-4">
      <div
        className="bg-black rounded-xl min-h-min p-4 
                      maxmd:relative
                      md:absolute md:z-10 md:right-12 md:-top-12 md:w-[35%]"
      >
        <div className="flex items-start space-x-4 text-white">
          <div className="rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={Robin}
              alt="robin"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="space-y-2">
            <p className="text-sm">
              "Beautifully simple. Incredibly easy to use but can be customized
              to your hiring workflow and needs."
            </p>
            <cite className="block text-xs text-gray-400">
              Muhammad Musabbir, Internship and F.Developer, EWN Limited
            </cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectioncard;
