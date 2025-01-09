"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { heroImages } from "@/constants/HeroImages";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[40vh] md:min-h-[60vh] lg:min-h-screen overflow-hidden">
      {/* Rotating Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Hero image ${index + 1}`}
            layout="fill"
            className="object-cover"
            quality={100}
            priority
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 md:p-8 lg:p-12 max-w-3xl lg:max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 lg:mb-4">
          Welcome to Kinacast
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white mb-6 lg:mb-8">
          Discover amazing podcasts and stay inspired
        </p>
      </div>
    </div>
  );
}
