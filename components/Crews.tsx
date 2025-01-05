"use client";
import { forwardRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Crews = forwardRef<HTMLDivElement>((props, ref) => {
  const router = useRouter(); // Initialize router

  // Function to handle the button click and navigate to /episodes
  const navigateToSpeakers = () => {
    router.push("/crews");
  };

  return (
    <div ref={ref} className="episodes-section flex flex-col">
      <h2 className="text-2xl">Crews</h2>
      <div className="flex pt-5">
        <div className="pr-5 flex flex-col py-2">
          <Image
            src={"/high_comm/Afzal.JPG"}
            alt="afzal"
            width={100}
            height={300}
          />
          <span>Afzal</span>
          <span className="text-gray-500 text-sm">Director</span>
        </div>
        <div className="pr-5 flex flex-col py-2">
          <Image
            src={"/high_comm/Sayyid.jpeg"}
            alt="sayyid"
            width={100}
            height={300}
          />
          <span>Sayyid</span>
          <span className="text-gray-500 text-sm">Vice Director</span>
        </div>
        <div className="pr-5 flex flex-col py-2">
          <Image
            src={"/high_comm/Eunice.JPG"}
            alt="eunice"
            width={100}
            height={300}
          />
          <span>Eunice</span>
          <span className="text-gray-500 text-sm">Secretary</span>
        </div>
        <div className="pr-5 flex flex-col py-2">
          <Image
            src={"/high_comm/Hidnee.JPG"}
            alt="hidnee"
            width={100}
            height={300}
          />
          <span>Hidnee</span>
          <span className="text-gray-500 text-sm">Vice Secretary</span>
        </div>
        <div className="pr-5 flex flex-col py-2">
          <Image
            src={"/high_comm/Zaf.jpeg"}
            alt="zaf"
            width={100}
            height={300}
          />
          <span>Zaf</span>
          <span className="text-gray-500 text-sm">Treasurer</span>
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

Crews.displayName = "Crews";

export default Crews;
