"use client";
import { forwardRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Sponsors = forwardRef<HTMLDivElement>((props, ref) => {
  const router = useRouter(); // Initialize router

  const navigateToContactUs = () => {
    router.push("/contact-us");
  };

  return (
    <div ref={ref} className="episodes-section flex flex-col">
      <h2 className="text-2xl">Sponsors</h2>

      <Image src={"/sponsors.png"} alt="sponsor" width={1000} height={300} />

      <button
        onClick={navigateToContactUs}
        className="bg-[#273DAC] rounded-lg self-center p-2 m-5"
      >
        Contact Us
      </button>
    </div>
  );
});

Sponsors.displayName = "Sponsors";

export default Sponsors;
