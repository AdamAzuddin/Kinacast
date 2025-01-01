"use client"
import { forwardRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Episodes = forwardRef<HTMLDivElement>((props, ref) => {
  const router = useRouter(); // Initialize router

  // Function to handle the button click and navigate to /episodes
  const navigateToEpisodes = () => {
    router.push("/episodes");
  };

  return (
    <div ref={ref} className="episodes-section flex flex-col">
      <h2 className="text-2xl">Episodes</h2>
      <div className="bg-[#273DAC] flex rounded-lg mt-5">
        <Image
          src={"/thumbnail-2.jpg"}
          alt="thumbnail-2-img"
          width={300}
          height={300}
          className="p-5"
        />
        <div className="pt-5 flex flex-col">
          <span className="text-xl text-bold">
            EP 2 | UM Bukan Nerd! ft. Ariff Wafiy & Nabil Alwani — UM Athletes and
            Future National Reps
          </span>
          <span className="pt-5 pr-5 text-base">
            In this episode features UM second year students and athletes- Nabil & Wafiy. This episode highlights their journey together as best friends since high school, how they got into their sports as well as their impressive achievements.
          </span>
        </div>
      </div>

      <div className="flex mt-5">
        <Image
          src={"/thumbnail-1.jpg"}
          alt="thumbnail-1-img"
          width={300}
          height={300}
          className="p-5"
        />
        <div className="pt-5 flex flex-col">
          <span className="text-xl text-bold">
            EP 1 | The Untold Story of KK8, UM’s Alumni, Principal of KK8
          </span>
          <span className="pt-5 pr-5 text-base">
            In this episode, features Ustaz Mizra, the principal of Kolej Kinabalu also known as a UM alumni. This episode is an all rounder uncovering his personal life including how he met his wife, hobbies and the history of KK8 & how it all began.
          </span>
        </div>
      </div>
      {/* Button to navigate to /episodes */}
      <button
        onClick={navigateToEpisodes} // Attach the click handler
        className="bg-[#273DAC] rounded-lg self-center p-2 m-5"
      >
        See more episodes
      </button>
    </div>
  );
});

Episodes.displayName = "Episodes";

export default Episodes;
