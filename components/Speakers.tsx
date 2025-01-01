"use client";
import { forwardRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Speakers = forwardRef<HTMLDivElement>((props, ref) => {
  const router = useRouter(); // Initialize router

  // Function to handle the button click and navigate to /episodes
  const navigateToSpeakers = () => {
    router.push("/speakers");
  };

  return (
    <div ref={ref} className="episodes-section flex flex-col">
      <h2 className="text-2xl">Speakers</h2>
      <div className="flex pt-5">
        <div className="pr-5 flex flex-col py-2">
          <Image src={"/person1.jpg"} alt="person1" width={100} height={300} />
          <span>John Persons</span>
          <span className="text-gray-500 text-sm">Author</span>
        </div>
        <div className="pr-5 flex flex-col py-2">
          <Image src={"/person2.jpg"} alt="person2" width={100} height={300} />
          <span>Jennifer Crawford</span>
          <span className="text-gray-500 text-sm">Entrepreneur</span>
        </div>
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
