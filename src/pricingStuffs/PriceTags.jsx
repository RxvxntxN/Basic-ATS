import React from "react";

const PriceTags = () => {
  return (
    <section className="relative bg-white p-4">
      <div className="bg-gray-100 p-6 rounded-xl flex flex-col md:flex-row justify-center items-stretch gap-8">
        {/* Card 1 */}
        <div className="w-full md:w-96 max-w-sm">
          <div className="p-6 bg-white rounded-xl shadow-md h-full flex flex-col justify-between">
            <section className="flex flex-col gap-4">
              <h3 className="font-extrabold text-4xl h-16">Free</h3>
              <p className="flex-grow min-h-[80px]">
                Maybe the simplest thing about Sport Car. One subscription for
                unlimited jobs, candidates, and users.
              </p>

              <div className="mt-auto">
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900"
                >
                  Sign up for free
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-96 max-w-sm">
          <div className="p-6 bg-white rounded-lg shadow-md h-full flex flex-col justify-between">
            <section className="flex flex-col gap-4">
              <h3 className="font-extrabold text-4xl relative h-16">
                199$
                <span className="pl-4 font-normal text-sm absolute">
                  billed <br /> monthly
                </span>
              </h3>
              <p className="flex-grow min-h-[80px]">
                It's free to get started. No credit card required. Set up your
                company, create your job board, configure your jobs, and invite
                your team.
              </p>
              <div className="mt-auto">
                <a
                  href="#"
                  className="inline-block px-6 py-3 bg-gray-100 text-black font-bold rounded-md hover:bg-gray-300"
                >
                  Sign up for free
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceTags;
