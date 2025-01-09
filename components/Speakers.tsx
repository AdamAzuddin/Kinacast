"use client";
import { forwardRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { speakers } from "@/constants/Speakers";

const Speakers = forwardRef<HTMLDivElement>((props, ref) => {
  const router = useRouter(); // Initialize router

  // Function to handle the button click and navigate to /episodes
  const navigateToSpeakers = () => {
    router.push("/speakers");
  };

  // Get the last 3 speakers from the list
  const lastThreeSpeakers = speakers.slice(-3);

  return (
    <div ref={ref} className="episodes-section flex flex-col p-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl">Speakers</h2>
      <div className="flex flex-wrap gap-2 pt-5">
        {lastThreeSpeakers.map((speaker) => (
          <div
            key={speaker.id}
            className="flex flex-col w-[30%] md:w-[25%] lg:w-[15%] p-2"
          >
            <div className="relative w-full h-[16vh] md:h-[20vh] lg:h-[25vh] overflow-hidden rounded-lg flex-shrink-0">
              <Image
                src={speaker.imagePath}
                alt={speaker.name}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="absolute inset-0"
              />
            </div>
            <div className="text-center mt-3">
              <span className="block text-lg md:text-xl font-semibold">
                {speaker.name}
              </span>
              <span className="block text-gray-500 text-sm md:text-base">
                {speaker.title}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={navigateToSpeakers}
        className="bg-[#273DAC] text-white rounded-lg p-2 m-5 self-center hover:bg-[#1f2f8e] transition"
      >
        See more speakers
      </button>
    </div>
  );
});

Speakers.displayName = "Speakers";

export default Speakers;
