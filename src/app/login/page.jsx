import React from "react";
import Link from "next/link";
import Image from "next/image";
import Carlogo from "@/app/images/footericon.png";
import Head from "next/head";
import FormPage from "@/formDesign/FormPage";

const LogIn = () => {
  return (
    <>
      <div className="relative min-h-min bg-white p-4">
        <div className="relative min-h-screen bg-zinc-900 p-6 rounded-xl">
          <div className="flex object-contain items-center justify-center border-b border-pink-200 pb-4">
            <Link href="/" className="text-xl font-bold text-gray-800">
              <Image
                src={Carlogo}
                className="object-contain"
                alt="carlogo"
                width={40}
                height={40}
              />
            </Link>
            <a href="/" className="font-extrabold pl-2 text-white">
              Sport Cars
            </a>
          </div>
          <div className="flex items-center justify-center mt-16">
            <FormPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
