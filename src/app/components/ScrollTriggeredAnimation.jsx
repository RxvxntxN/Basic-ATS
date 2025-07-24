"use client";
import React, { useEffect, useState, useRef } from "react";

const ScrollTriggeredAnimation = ({ children, animationClass }) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when in view
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={targetRef}
      className={`${
        isVisible ? animationClass : "opacity-0"
      } transition-all duration-700`}
    >
      {children}
    </div>
  );
};

export default ScrollTriggeredAnimation;
