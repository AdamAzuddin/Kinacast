import React from "react";
import Image from "next/image";
import { episodes } from "@/constants/episodes";
import { Episode } from "@/types/types";
import Header from "@/components/Header";

const EpisodesPage = () => {
  const reversedEpisodes = [...episodes].reverse();

  return (
    <>
      <Header />
      <div className="episodes-page max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-bold mb-8">All Episodes</h1>
        <div className="flex flex-col space-y-6">
          {reversedEpisodes.map((episode: Episode) => (
            <div
              key={episode.id}
              className="episode-card flex flex-col md:flex-row shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail */}
              <div className="thumbnail flex-shrink-0">
                <Image
                  src={episode.thumbnail}
                  alt={`Thumbnail for ${episode.title}`}
                  width={200}
                  height={200}
                  className="rounded-md"
                />
              </div>
              {/* Metadata */}
              <div className="episode-details flex flex-col md:ml-6 mt-4 md:mt-0 flex-grow">
                <h2 className="text-xl font-bold">{episode.title}</h2>
                <p className="text-gray-400 mt-2">{episode.description}</p>
                <div className="mt-4 flex flex-wrap items-center space-x-4 text-sm text-gray-600">
                  <span>
                    <strong>Duration:</strong> {episode.duration || "N/A"}
                  </span>
                  <span>
                    <strong>Published:</strong> {episode.publishDate}
                  </span>
                  <div className="watch-link mt-4 ml-6 md:mt-0 md:ml-auto flex items-center">
                    {episode.youtubeLink && (
                      <a
                        href={episode.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-[#CD322D] px-4 py-2 rounded-md hover:bg-red-600 transition"
                      >
                        <div className="w-0 h-0 my-1 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white -rotate-90"></div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {/* YouTube Link */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EpisodesPage;
