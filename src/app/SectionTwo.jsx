import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";

const SectionTwo = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="bg-gradient-to-br from-pink-100 via-pink-100 to-orange-100 rounded-xl min-h-screen relative">
        <div
          className="py-24 px-8"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="50"
          data-aos-offset="0"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl font-extrabold flex mt-3 animate-in fade-in zoom-in">
            Everything you need to
            <br className="hidden sm:inline" /> grow your team
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {/* Card 1 */}
          <Card className="py-4 w-full md:max-w-[300px] md:flex-col">
            <div className="flex flex-row md:flex-col w-full h-full">
              <CardBody className="overflow-visible p-0 flex-none w-1/3 md:w-full md:p-2">
                <div className="relative w-full h-full md:h-36">
                  <Image
                    alt="Card 1"
                    src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-l-xl md:rounded-xl"
                  />
                </div>
              </CardBody>
              <div className="flex-grow">
                <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny pb-2 uppercase font-bold text-black">
                    Instant job board
                  </p>
                  <small className="text-[#555555] font-medium">
                    You'll have a branded job board as a centralized place to
                    display all the open positions at your organization.
                  </small>
                </CardHeader>
              </div>
              <div className="px-4 mt-2 md:block hidden">
                <Button className="w-auto md:w-auto text-left justify-start bg-pink-100 text-gray-700 rounded-md hover:bg-pink-200 text-sm py-1">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="py-4 w-full md:max-w-[300px] md:flex-col">
            <div className="flex flex-row md:flex-col w-full h-full">
              <CardBody className="overflow-visible p-0 flex-none w-1/3 md:w-full md:p-2">
                <div className="relative w-full h-full md:h-36">
                  <Image
                    alt="Card 2"
                    src="https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-l-xl md:rounded-xl"
                  />
                </div>
              </CardBody>
              <div className="flex-grow">
                <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny pb-2 uppercase font-bold text-black">
                    Team collaboration
                  </p>
                  <small className="text-[#555555] font-medium">
                    Hiring is a team sport and Polymer is set up to support it.
                    With no limit on your user-count, you can invite all the
                    help you need.
                  </small>
                </CardHeader>
              </div>
              <div className="px-4 mt-2 md:block hidden">
                <Button className="w-auto md:w-auto text-left justify-start bg-pink-100 text-gray-700 rounded-md hover:bg-pink-200 text-sm py-1">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="py-4 w-full md:max-w-[300px] md:flex-col">
            <div className="flex flex-row md:flex-col w-full h-full">
              <CardBody className="overflow-visible p-0 flex-none w-1/3 md:w-full md:p-2">
                <div className="relative w-full h-full md:h-36">
                  <Image
                    alt="Card 3"
                    src="https://autopremiumgroup.ru/m/_versions/info/chevrolet/camaro/10_banner.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-l-xl md:rounded-xl"
                  />
                </div>
              </CardBody>
              <div className="flex-grow">
                <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny pb-2 uppercase font-bold text-black">
                    Candidate relationship management
                  </p>
                  <small className="text-[#555555] font-medium">
                    As they apply, new candidates automatically show up in the
                    Polymer applicant tracking system for efficient review and
                    management.
                  </small>
                </CardHeader>
              </div>
              <div className="px-4 mt-2 md:block hidden">
                <Button className="w-auto md:w-auto text-left justify-start bg-pink-100 text-gray-700 rounded-md hover:bg-pink-200 text-sm py-1">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
