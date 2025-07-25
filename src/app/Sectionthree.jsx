import React from "react";
import Image from "next/image";
import Career from "@/app/images/career.jpg";
import { Check } from "lucide-react";

const SectionThree = () => {
  const features = [
    "Flexible applicant tracking",
    "Customizable workflows",
    "Rich candidate profiles",
    "Built-in candidate messaging",
    "Bulk messaging",
    "Message templates",
    "Shared notes & documentation",
  ];

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="bg-[#F4F4F4] rounded-xl min-h-screen relative overflow-x-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-8 p-6 md:p-12">
          {/* Left Container (Image) */}
          <div
            className="w-full lg:w-1/2 "
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-offset="0"
            data-aos-duration="2000"
          >
            <div className="relative group ">
              <Image
                src={Career}
                alt="Career Management Platform"
                className=" rounded-xl w-full h-auto shadow-lg transition-transform group-hover:scale-[1.02]"
                priority
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl pb-4 font-bold text-gray-900 leading-tight">
                Manage the entire hiring workflow
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed py-8">
                Sport Cars built with productivity at heart and is loaded with
                features to help you hire more effectively. It's quick to learn,
                fast to navigate, and empowering to use.
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 transition-colors duration-200"
                  data-aos="fade-left"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="50"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <Check className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
