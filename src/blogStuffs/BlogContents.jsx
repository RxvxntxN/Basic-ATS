import React from "react";
import Tick from "@/app/images/blogs/tick.avif";
import Turnover from "@/app/images/blogs/turnover.avif";
import Boarding from "@/app/images/blogs/boarding.avif";
import Bias from "@/app/images/blogs/bias.avif";
import Player from "@/app/images/blogs/player.avif";
import Image from "next/image";

const BlogContents = () => {
  return (
    <>
      <section className="relative bg-white p-4">
        <div className="bg-gray-100 p-6 rounded-xl flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Card 1 */}
          <div className="w-full md:w-64 max-w-sm">
            <div className="rounded-xl h-full">
              <section className="flex flex-col gap-4">
                <Image src={Tick} alt="tick" className="rounded-lg" />
              </section>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-64 max-w-sm">
            <div className="p-6 rounded-lgh-full">
              <section className="flex flex-col gap-4">
                <h3 className="font-extrabold text-4xl relative">
                  Behavioral Interview Scoring Matrix: A Template & Simple Guide
                </h3>
                <p>
                  Use the behavioral interview scoring matrix to offer a fair,
                  unbiased hiring experience and find the best person for the
                  job.
                </p>
                <div>
                  <p className="inline-block text-sm text-grey-400">
                    Posted on August 8, 2023
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Card 1 */}
          <div className="w-full md:w-64 max-w-sm">
            <div className="rounded-xl h-full">
              <section className="flex flex-col gap-4">
                <Image src={Turnover} alt="turnover" className="rounded-lg" />
              </section>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-64 max-w-sm">
            <div className="p-6 rounded-lgh-full">
              <section className="flex flex-col gap-4">
                <h3 className="font-extrabold text-4xl relative">
                  Behavioral Interview Scoring Matrix: A Template & Simple Guide
                </h3>
                <p>
                  Use the behavioral interview scoring matrix to offer a fair,
                  unbiased hiring experience and find the best person for the
                  job.
                </p>
                <div>
                  <p className="inline-block text-sm text-grey-400">
                    Posted on August 8, 2023
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Card 1 */}
          <div className="w-full md:w-64 max-w-sm">
            <div className="rounded-xl h-full">
              <section className="flex flex-col gap-4">
                <Image src={Bias} alt="bias" className="rounded-lg" />
              </section>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-64 max-w-sm">
            <div className="p-6 rounded-lgh-full">
              <section className="flex flex-col gap-4">
                <h3 className="font-extrabold text-4xl relative">
                  Behavioral Interview Scoring Matrix: A Template & Simple Guide
                </h3>
                <p>
                  Use the behavioral interview scoring matrix to offer a fair,
                  unbiased hiring experience and find the best person for the
                  job.
                </p>
                <div>
                  <p className="inline-block text-sm text-grey-400">
                    Posted on August 8, 2023
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Card 1 */}
          <div className="w-full md:w-64 max-w-sm">
            <div className="rounded-xl h-full">
              <section className="flex flex-col gap-4">
                <Image src={Player} alt="player" className="rounded-lg" />
              </section>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-64 max-w-sm">
            <div className="p-6 rounded-lgh-full">
              <section className="flex flex-col gap-4">
                <h3 className="font-extrabold text-4xl relative">
                  Behavioral Interview Scoring Matrix: A Template & Simple Guide
                </h3>
                <p>
                  Use the behavioral interview scoring matrix to offer a fair,
                  unbiased hiring experience and find the best person for the
                  job.
                </p>
                <div>
                  <p className="inline-block text-sm text-grey-400">
                    Posted on August 8, 2023
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Card 1 */}
          <div className="w-full md:w-64 max-w-sm">
            <div className="rounded-xl h-full">
              <section className="flex flex-col gap-4">
                <Image src={Boarding} alt="boarding" className="rounded-lg" />
              </section>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-64 max-w-sm">
            <div className="p-6 rounded-lgh-full">
              <section className="flex flex-col gap-4">
                <h3 className="font-extrabold text-4xl relative">
                  Behavioral Interview Scoring Matrix: A Template & Simple Guide
                </h3>
                <p>
                  Use the behavioral interview scoring matrix to offer a fair,
                  unbiased hiring experience and find the best person for the
                  job.
                </p>
                <div>
                  <p className="inline-block text-sm text-grey-400">
                    Posted on August 8, 2023
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogContents;
