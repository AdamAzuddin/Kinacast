"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { episodes } from "@/constants/episodes";
import { Episode } from "@/types/types";

const Episodes = forwardRef<HTMLDivElement>((props, ref) => {
  const router = useRouter();

  // Take the last two episodes with the latest one on top
  const latestEpisodes = [...episodes].slice(-2).reverse();

  // Function to navigate to /episodes
  const navigateToEpisodes = () => {
    router.push("/episodes");
  };

  return (
    <div ref={ref} className="episodes-section flex flex-col">
      <h2 className="text-2xl">Episodes</h2>
      {latestEpisodes.map((episode: Episode, index) => (
        <div
          key={episode.id}
          className={`flex rounded-lg mt-5 ${
            index === 0 ? "bg-[#273DAC] text-white" : ""
          }`}
        >
          <Image
            src={episode.thumbnail}
            alt={`thumbnail-${episode.id}`}
            width={300}
            height={300}
            className="p-5"
          />
          <div className="pt-5 flex flex-col">
            <span className="text-xl font-bold">{episode.title}</span>
            <span className="pt-5 pr-5 text-base">{episode.description}</span>
          </div>
        </div>
      ))}
      {/* Button to navigate to /episodes */}
      <button
        onClick={navigateToEpisodes}
        className="bg-[#273DAC] text-white rounded-lg self-center p-2 m-5"
      >
        See more episodes
      </button>
    </div>
  );
});

Episodes.displayName = "Episodes";

export default Episodes;
