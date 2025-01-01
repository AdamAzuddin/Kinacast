"use client"
import { useRef } from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Episodes from "@/components/Episodes";
import Speakers from "@/components/Speakers";

export default function Home() {
  const episodesRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#1F1F1F] min-h-screen">
      <Header episodesRef={episodesRef} />
      <Hero />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div ref={episodesRef}>
          <Episodes />
        </div>
        <div ref={speakersRef}>
          <Speakers/>
        </div>
      </main>
    </div>
  );
}
