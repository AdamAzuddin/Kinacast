"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { episodes } from "@/constants/Episodes";
import { Episode } from "@/types/types";

// Function to get the first sentence from the description
const getFirstSentence = (text: string) => {
  const firstSentence = text.split(".")[0]; // Split at the first period
  return firstSentence.endsWith(".") ? firstSentence : firstSentence + "."; // Add period if missing
};

const Episodes = forwardRef<HTMLDivElement>((props, ref) => {
  const router = useRouter();

  // Take the last two episodes with the latest one on top
  const latestEpisodes = [...episodes].slice(-2).reverse();

  // Function to navigate to /episodes
  const navigateToEpisodes = () => {
    router.push("/episodes");
  };

  return (
    <div ref={ref} className="episodes-section flex flex-col p-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Episodes</h2>
      {latestEpisodes.map((episode: Episode, index) => (
        <div
          key={episode.id}
          className={`flex rounded mt-5 ${index === 0 ? "bg-[#273DAC]" : ""}`}
        >
          <div className="relative flex-shrink-0 w-[40%] md:w-[30%] lg:w-[20%]">
            <Image
              src={episode.thumbnail}
              alt={`thumbnail-${episode.id}`}
              layout="responsive"
              width={4}
              height={3}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-4 w-[70%]">
            <span className="text-md md:text-xl lg:text-2xl font-bold">
              {episode.title}
            </span>
            <span className="text-xs md:text-base lg:text-lg mt-2">
              {getFirstSentence(episode.description)}
            </span>
          </div>
        </div>
      ))}
      {/* Button to navigate to /episodes */}
      <button
        onClick={navigateToEpisodes}
        className="bg-[#273DAC] text-white rounded-lg p-2 mt-5 self-center md:self-end lg:self-center hover:bg-[#1f2f8e] transition"
      >
        See more episodes
      </button>
    </div>
  );
});

Episodes.displayName = "Episodes";

export default Episodes;
