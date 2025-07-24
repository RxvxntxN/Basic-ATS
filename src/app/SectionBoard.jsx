import React from "react";
import Image from "next/image";
import Boarding from "@/app/images/settings.webp";

const SectionBoard = () => {
  return (
    <>
      <div className="min-h-min bg-white p-4">
        <div className="relative min-h-max bg-[#f4f4f4] p-6 rounded-xl flex flex-col pt-24 pb-48">
          <h1 className="font-extrabold text-4xl">Build before you buy</h1>
          <p className="text-gray-700 text-left max-w-xl pt-4">
            Explore our applicant tracking software, build out your job board,
            and invite your team. Take all the time you need to evaluate the
            platform.
          </p>
          <div className="relative w-full flex justify-center mt-10 top-0 px-5 pb-10">
            <Image
              src={Boarding}
              alt="Sport Car"
              className=" absolute z-10 mx-auto rounded-lg object-contain" //absolute z-10
              layout="responsive"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionBoard;
