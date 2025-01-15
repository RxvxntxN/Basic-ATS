import React from "react";
import Image from "next/image";
import Cala from "@/app/images/cala.svg";
import Campfire from "@/app/images/campfire.svg";
import Eetwell from "@/app/images/eeetwell.svg";
import Filebase from "@/app/images/filebase.svg";
import Helio from "@/app/images/helio.svg";
import Helium from "@/app/images/helium.svg";
import Leland from "@/app/images/leland.svg";
import Makelog from "@/app/images/makelog.svg";
import Piratewires from "@/app/images/piratewires.svg";
import Tixel from "@/app/images/tixel.svg";

const SectionOne = () => {
  return (
    <div className="min-h-min bg-white p-4">
      <div className="bg-[#F4F4F4] min-h-[600px] rounded-xl w-full flex items-center justify-center">
        <div className="px-6 w-full">
          <h2 className="text-gray-600 font-bold text-xl mb-10 text-center">
            Helping to grow the next generation of companies
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center items-center w-full max-w-6xl mx-auto">
            <Image
              src={Piratewires}
              alt="Ford"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
            <Image
              src={Tixel}
              alt="Ferrari"
              width={150}
              height={150}
              className="object-contain"
            />
            <Image
              src={Campfire}
              alt="Lamborghini"
              width={150}
              height={150}
              className="object-contain"
            />
            <Image
              src={Filebase}
              alt="Chevrolet"
              width={150}
              height={150}
              className="object-contain"
            />
            <Image
              src={Eetwell}
              alt="Bentley"
              width={150}
              height={150}
              className="object-contain"
            />
            <Image
              src={Leland}
              alt="Mercedes"
              width={150}
              height={150}
              className="object-contain"
            />
            <Image
              src={Helio}
              alt="Mercedes"
              width={150}
              height={150}
              className="object-contain"
            />
            <Image
              src={Makelog}
              alt="Mercedes"
              width={150}
              height={150}
              className="object-contain"
            />
            <Image
              src={Helium}
              alt="Mercedes"
              width={150}
              height={150}
              className="object-contain"
            />
            <Image
              src={Cala}
              alt="Mercedes"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
