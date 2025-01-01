"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {heroImages} from "@/constants/HeroImages"

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Hero image ${index + 1}`}
            style={{ objectFit: "cover" }}
            quality={100}
            priority
            fill
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="absolute inset-0 flex flex-col justify-center items-start p-6 sm:p-12 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Welcome to Kinacast
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8">
          Discover amazing podcasts and stay inspired
        </p>
      </div>
    </div>
  );
}
