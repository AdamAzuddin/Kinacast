import React from "react";
import { speakers } from "@/constants/Speakers";
import Image from "next/image";
import Header from "@/components/Header";

const SpeakersPage = () => {
  const reversedSpeakers = [...speakers].reverse();

  return (
    <>
      <Header />
      <div className="episodes-page max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-bold mb-8">All Speakers</h1>
        <div className="flex flex-wrap gap-6">
          {reversedSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="speaker-card shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col items-center w-48"
            >
              <div className="flex items-center justify-center h-[300px] w-[150px] overflow-hidden">
                <Image
                  src={speaker.imagePath}
                  alt={speaker.name}
                  width={150}
                  height={300}
                />
              </div>

              <div className="speaker-details text-center mt-4">
                <h2 className="text-lg font-bold">{speaker.name}</h2>
                <p className="text-gray-400 text-sm">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpeakersPage;
