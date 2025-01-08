import React from "react";
import Image from "next/image";
import {sections} from "@/constants/CrewsSections";

const CrewsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-8">All Crews</h1>
      {sections.map((section, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-xl font-semibold mb-6">{section.title}</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {section.members.map((member, idx) => (
              <div key={idx} className="text-center w-40">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    objectFit="cover"
                  />
                </div>
                <p className="font-medium mt-4">{member.name}</p>
                {member.title && (
                  <p className="text-sm text-gray-500 italic">{member.title}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CrewsPage;

