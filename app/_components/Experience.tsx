"use client";
import React from "react";
import SubHeader from "./_ui/SubHeader";

interface Experience {
  role: string;
  organization: string;
  duration: string;
  description: string;
}

function Experience({ experience }: { experience: Experience[] }) {
  return (
    <div>
      <SubHeader>Experience</SubHeader>
      <div>
        {experience.map((e) => (
          <div key={e.organization}>
            <div>
              <h2 className="text-sm">{e.duration}</h2>
            </div>
            <div className="m-5 p-5 border-l-2 border-l-[#008000]">
              <h2 className="text-xl">{e.role}</h2>
              <p className="text-[#008000]">{e.organization}</p>
              <br />
              <span className="text-white/50">{e.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
