"use client";
import Image from "next/image";
import FooterImage from "@/app/images/footericon.png";
import Link from "next/link";
import { GitHub } from "lucide-react";
import { Button } from "@nextui-org/react";

const Footer = () => {
  return (
    <div className="min-h-min bg-white p-4">
      <div className="bg-black min-h-min rounded-xl pt-6 pb-20">
        <footer className="text-gray-400 py-4">
          <div className="container mx-auto px-6 flex flex-col items-center md:block">
            <div className="flex flex-col-reverse md: items-center md:flex-row md:items-start md:justify-between gap-4">
              {/* Left side - Logo and Title */}
              <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
                <Link href="/" className="text-xl font-bold flex items-center">
                  <Image
                    src={FooterImage}
                    className="object-contain"
                    alt="carlogo"
                    width={40}
                    height={40}
                  />
                  <span className="font-extrabold mt-2 md:mt-0 md:pl-4 pl-4">
                    Sport Cars
                  </span>
                </Link>
                <p className="text-xs text-center md:text-left mt-2">
                  Building coordination tools for organizations of all shapes
                  and sizes. Hiring is just the start.
                </p>
                <Button
                  variant="outline"
                  className="flex items-center gap-4 px-4 my-4 rounded-lg bg-rose-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white lucide lucide-rabbit"
                  >
                    <path d="M13 16a3 3 0 0 1 2.24 5" />
                    <path d="M18 12h.01" />
                    <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
                    <path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
                    <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />
                  </svg>

                  <div className="flex flex-col items-start">
                    <span className="text-xs text-white">Featured on</span>
                    <span className="text-sm font-bold text-white">
                      Product Hunt
                    </span>
                  </div>
                </Button>
                <p className="text-xs text-gray-500 sm:text-center dark:text-gray-400">
                  © 2024{" "}
                  <a href="#" className="hover:underline">
                    Inflow Hiring, Inc.
                  </a>
                </p>
              </div>

              {/* Right side - Navigation */}
              <div className="w-full md:w-2/3 md:pl-10 flex flex-col items-center md:block">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Feature Section */}
                  <div className="text-center md:text-left">
                    <h2 className="text-sm font-semibold mb-2 text-white">
                      Links
                    </h2>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-xs font-semibold hover:text-white transition-colors duration-200"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-xs font-semibold hover:text-white font transition-colors duration-200"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-xs font-semibold hover:text-white transition-colors duration-200"
                        >
                          API
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-xs font-semibold hover:text-white transition-colors duration-200"
                        >
                          Sign up
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-xs font-semibold hover:text-white transition-colors duration-200"
                        >
                          Log in
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Resource Section */}
                  <div className="text-center md:text-left">
                    <h2 className="text-sm font-semibold mb-2 text-white">
                      Services
                    </h2>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-xs font-semibold hover:text-white transition-colors duration-200"
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-xs font-semibold hover:text-white transition-colors duration-200"
                        >
                          Help docs
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-xs font-semibold hover:text-white transition-colors duration-200"
                        >
                          Quick start guide
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-xs font-semibold hover:text-white transition-colors duration-200"
                        >
                          Changelog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-xs font-semibold hover:text-white transition-colors duration-200"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Company Section */}
                  <div className="text-center md:text-left">
                    <h2 className="text-sm font-semibold mb-2 text-white">
                      About us
                    </h2>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-xs font-semibold hover:text-white transition-colors duration-200"
                        >
                          Privacy policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-xs font-semibold hover:text-white transition-colors duration-200"
                        >
                          Terms of service
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-xs font-semibold hover:text-white transition-colors duration-200"
                        >
                          Terms of Service
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-xs font-semibold hover:text-white transition-colors duration-200"
                        >
                          Contact us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-xs font-semibold hover:text-white transition-colors duration-200"
                        >
                          Discord
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-xs font-semibold hover:text-white transition-colors duration-200"
                        >
                          Twitter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
