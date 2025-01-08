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
    <div ref={ref} className="episodes-section flex flex-col">
      <h2 className="text-2xl">Speakers</h2>
      <div className="flex pt-5">
        {lastThreeSpeakers.map((speaker) => (
          <div key={speaker.id} className="pr-5 flex flex-col py-2">
            <div className="flex items-center justify-center h-[200px] w-[100px] overflow-hidden">
              <Image
                src={speaker.imagePath}
                alt={speaker.name}
                width={100}
                height={200}
              />
            </div>
            <span>{speaker.name}</span>
            <span className="text-gray-500 text-sm">{speaker.title}</span>
          </div>
        ))}
      </div>
      <button
        onClick={navigateToSpeakers}
        className="bg-[#273DAC] rounded-lg self-center p-2 m-5"
      >
        See more speakers
      </button>
    </div>
  );
});

Speakers.displayName = "Speakers";

export default Speakers;
