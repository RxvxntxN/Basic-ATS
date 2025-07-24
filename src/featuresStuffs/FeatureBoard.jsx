import React from "react";
import Image from "next/image";
import Board from "@/app/images/board.webp";
import { Smartphone } from "lucide-react";
import { SquarePen } from "lucide-react";
import { Briefcase } from "lucide-react";
import { LucideImage } from "lucide-react";
import { Zap } from "lucide-react";
import { Share } from "lucide-react";

const FeatureBoard = () => {
  return (
    <section className="relative bg-white p-4 overflow-hidden">
      <div className="bg-[#F4F4F4] p-6 rounded-t-xl flex flex-col md:flex-row justify-center items-stretch gap-8">
        {/* Card 1 */}
        <div className="">
          <div
            className="p-6 bg-white rounded-xl shadow-md flex flex-col justify-between"
            data-aos="fade-right"
          >
            <section className="flex flex-col gap-4">
              <Image
                src={Board}
                alt="bias"
                width={700}
                height={700}
                className="rounded-lg"
              />
            </section>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-96 max-w-sm">
          <div className="p-2 h-full flex flex-col justify-between">
            <section className="flex flex-col gap-4" data-aos="fade-left">
              <h2 className="font-extrabold text-3xl relative h-16">
                Instant job board
              </h2>
              <p>
                You'll have a branded job board as a centralized place to
                display all the open positions at your organization. Each job
                has its own dedicated page and customizable application form.
              </p>
              <p className="mb-4">
                With the ability to add additional content, you can build out an
                entire careers site.
              </p>
              <div className="flex-1 flex items-center justify-start pb-4 sm:pb-4 md:pb-4">
                <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2">
                  <span className="">Learn More</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <section className="relative bg-[#F4F4F4] p-6 rounded-b-xl ">
        <div className="container mx-auto overflow-x-hidden">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 place-items-center"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <div className="flex flex-col items-start w-full max-w-sm gap-4 mt-16 ">
              <Smartphone />
              <h3 className="font-bold text-lg">Mobile ready</h3>
              <p className="text-start">
                Your job board and job posts will display beautifully across all
                devices.
              </p>
            </div>

            <div className="flex flex-col items-start w-full max-w-sm gap-4 mt-16">
              <SquarePen />
              <h3 className="font-bold text-lg">Custom apply forms</h3>
              <p className="text-start">
                You can customize the form fields that display for each of your
                job posts.
              </p>
            </div>

            <div className="flex flex-col items-start w-full max-w-sm gap-4 mt-16">
              <Briefcase />
              <h3 className="font-bold text-lg">Custom job categories</h3>
              <p className="text-start">
                You can define job categories that fit the types of roles you're
                looking to fill.
              </p>
            </div>

            <div className="flex flex-col items-start w-full max-w-sm gap-4 mt-16">
              <LucideImage />
              <h3 className="font-bold text-lg">Social share images</h3>
              <p className="text-start">
                Upload your own social share images to ensure your posts stand
                out.
              </p>
            </div>

            <div className="flex flex-col items-start w-full max-w-sm gap-4 mt-16">
              <Zap />
              <h3 className="font-bold text-lg">Instant setup</h3>
              <p className="text-start">
                Your job board is created automatically as soon as you sign up.
              </p>
            </div>

            <div className="flex flex-col items-start w-full max-w-sm gap-4 mt-16">
              <Share />
              <h3 className="font-bold text-lg">Easy sharing</h3>
              <p className="text-start">
                Easy links to allow visitors to share your jobs posts to their
                networks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FeatureBoard;
