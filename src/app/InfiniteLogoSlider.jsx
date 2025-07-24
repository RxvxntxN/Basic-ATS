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

const logos = [
  { src: Cala, alt: "Cala" },
  { src: Campfire, alt: "Campfire" },
  { src: Eetwell, alt: "Eetwell" },
  { src: Filebase, alt: "Filebase" },
  { src: Helio, alt: "Helio" },
  { src: Helium, alt: "Helium" },
  { src: Leland, alt: "Leland" },
  { src: Makelog, alt: "Makelog" },
  { src: Piratewires, alt: "Piratewires" },
  { src: Tixel, alt: "Tixel" },
];

const InfiniteLogoSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-[#F4F4F4]">
      <div className="flex animate-slide-right py-4">
        {[...logos, ...logos].map((logo, index) => (
          <div key={`right-${index}`} className="flex-shrink-0 w-[200px] mx-4">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={150}
              height={150}
              className="object-contain"
              loading={index < 10 ? "eager" : "lazy"}
              priority={index < 5}
            />
          </div>
        ))}
      </div>
      <div className="flex animate-slide-left py-4">
        {[...logos, ...logos].map((logo, index) => (
          <div key={`left-${index}`} className="flex-shrink-0 w-[200px] mx-4">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={150}
              height={150}
              className="object-contain"
              loading={index < 10 ? "eager" : "lazy"}
              priority={index < 5}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLogoSlider;
