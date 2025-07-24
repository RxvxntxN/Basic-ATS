"use client";
import React from "react";
import ScrollTriggeredAnimation from "@/app/components/ScrollTriggeredAnimation";
import Image from "next/image";
import Tick from "@/app/images/blogs/tick.avif";
import Boarding from "@/app/images/blogs/boarding.avif";
import Bias from "@/app/images/blogs/bias.avif";
import Player from "@/app/images/blogs/player.avif";

const blogData = [
  {
    image: Tick,
    title: "Behavioral Interview Scoring Matrix: A Template & Simple Guide",
    description:
      "Use the behavioral interview scoring matrix to offer a fair, unbiased hiring experience and find the best person for the job.",
    date: "August 8, 2023",
  },
  {
    image: Bias,
    title: "How to Overcome (and Recognize) First Impression Bias When Hiring",
    description:
      "Find out how to identify and overcome first impression bias when hiring (spoiler alert: using a hiring platform to reduce bias and create a fairer hiring process)",
    date: "March 14, 2023",
  },
  {
    image: Player,
    title: "A Definitive Guide to Employee Turnover and How to Reduce It",
    description:
      "High employee turnover affects your team's morale and your business's bottom line. Avoid high turnover with these strategies.",
    date: "July 4, 2023",
  },
  {
    image: Boarding,
    title: "What is Employee Onboarding? A Definitive Guide",
    description:
      "Our actionable guide and step-by-step templates will help you build an onboarding strategy that makes people want to work for you.",
    date: "February 28, 2023",
  },
];

const BlogContents = () => {
  return (
    <section className="relative bg-white p-4">
      {blogData.map((blog, index) => (
        <div
          key={index}
          className={`bg-gray-100 p-6 flex flex-col md:flex-row justify-center items-center gap-8 
            ${index === 0 ? "rounded-t-xl" : ""} 
            ${index === blogData.length - 1 ? "rounded-b-xl" : ""}`}
        >
          {/* Image Section */}
          <div className="max-w-lg">
            <div className="rounded-xl h-full">
              <section className="flex flex-col gap-4">
                <Image
                  src={blog.image}
                  alt={`blog-${index}`}
                  className="rounded-lg"
                />
              </section>
            </div>
          </div>

          {/* Content Section */}
          <ScrollTriggeredAnimation animationClass="animate-fade-left animate-once animate-duration-[3000ms] animate-ease-in-out">
            <div className="w-full">
              <div className="p-6 h-full">
                <section className="flex flex-col gap-4">
                  <h3 className="font-extrabold text-2xl relative">
                    {blog.title}
                  </h3>
                  <p>{blog.description}</p>
                  <div>
                    <p className="inline-block text-sm text-grey-400">
                      Posted on {blog.date}
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </ScrollTriggeredAnimation>
        </div>
      ))}
    </section>
  );
};

export default BlogContents;
