"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      delay: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return null;
};

export default AOSInitializer;
