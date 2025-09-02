"use client";
import React from "react";
import SubHeader from "./_ui/SubHeader";

function Skills({ skills }: { skills: string[] }) {
  return (
    <div className="py-32">
      <SubHeader>Skills</SubHeader>
      <div className="my-5 flex flex-wrap gap-5 justify-center items-center">
        {skills.map((s) => (
          <span
            className="border-2 border-white py-3 px-6 rounded-full text-xl"
            key={s}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
