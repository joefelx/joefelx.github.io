import Image from "next/image";
import React from "react";

import engineer from "../assets/engineer.jpg";

function Project({
  title,
  description,
  github,
  live,
  tools,
}: {
  title: string;
  description: string;
  github: string;
  live: string;
  tools: Array<string>;
}) {
  return (
    <div className="border-b-2 border-gray-500 min-w-64 overflow-hidden my-5">
      <div className="flex h-64 justify-center items-center">
        <Image
          draggable={true}
          className="w-full h-full object-cover"
          src={engineer}
          alt="image"
        ></Image>
      </div>

      {/* Title, Description and Tools */}
      <div className="flex flex-col gap-5 my-12">
        <h1 className="text-5xl">{title}</h1>
        <p className="text-md text-gray-500">{description}</p>
        <div className="flex justify-between items-center ">
          {/* tags */}
          <div className="flex flex-wrap gap-3 mt-2 flex-1">
            {tools.map((d, index) => (
              <span
                className="text-sm text-gray-100 border-2 border-gray-100 py-1 px-4 rounded-full"
                key={index}
              >
                {d}
              </span>
            ))}
          </div>

          <div className="mt-4 flex gap-5 flex-1 justify-end">
            <a href={github}>Github</a>
            <a href={live}>Live</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
