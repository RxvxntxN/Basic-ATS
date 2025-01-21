import React from "react";
import NavigationBar from "@/app/NavigationBar";
import BlogContents from "@/blogStuffs/BlogContents";
import SectionFour from "@/app/Sectionfour";
import FooterSection from "@/app/Footersection";


const BlogPage = () => {
  return (
    <>
      <div className="relative min-h-min bg-white p-4">
        <div className="relative min-h-min bg-gradient-to-br from-pink-100 via-pink-100 to-orange-100 p-6 rounded-xl">
          <NavigationBar />
          <div className="mt-24 items-center max-w-4xl mx-auto text-center">
            <h1 className="text-black text-6xl font-bold mb-6">Blog</h1>
            <p className="text-base text-gray-700 mb-8 max-w-2xl mx-auto">
              Level up your recruitment game with our library of articles for HR
              professionals and startup founders.
            </p>
          </div>
        </div>
      </div>
      <BlogContents />
      <SectionFour />
      <FooterSection />
    </>
  );
};

export default BlogPage;
