import React from "react";

const SectionFive = () => {
  return (
    <div className="min-h-min bg-white p-4">
      <div className="flex flex-col-reverse lg:flex-row overflow-hidden rounded-xl">
        <div className="flex-1 bg-black p-10">
          <div className="flex items-end sm:items-center justify-start sm:justify-center h-full">
            <h1 className="text-white flex items-center space-x-2 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 lucide lucide-twitch"
              >
                <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
              </svg>
              Hello Twitch
            </h1>
          </div>
        </div>
        <div className="flex-1 bg-[#000000] p-10">
          <footer className="footer text-white gap-16 lg:justify-center justify-center">
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
