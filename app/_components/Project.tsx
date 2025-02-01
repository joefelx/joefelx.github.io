import Image from "next/image";
import React from "react";

import engineer from "../assets/engineer.jpg";

function Project({
  title,
  description,
  github,
  live,
}: {
  title: string;
  description: string;
  github: string;
  live: string;
}) {
  const development = new Array<string>("html", "css");
  return (
    <div className="border-b-2 border-gray-500 min-w-64 py-14 overflow-hidden">
      <div className="flex h-64 justify-center items-center">
        <Image
          draggable={true}
          className="w-full h-full object-cover"
          src={engineer}
          alt="image"
        ></Image>
      </div>

      <div className="pt-5">
        <h1 className="text-5xl my-2">{title}</h1>
        <p className="text-md text-gray-500">{description}</p>
      </div>

      <div className="flex justify-between items-center">
        {/* tags */}
        {/* <div className="flex gap-3 mt-2">
          {development.map((d, index) => (
            <span
              className="text-sm text-yellow-200 bg-yellow-600 border border-yellow-300 py-1 px-2 rounded-xl"
              key={index}
            >
              {d}
            </span>
          ))}
        </div> */}

        <div className="mt-4 flex gap-5">
          <a href={github}>Github</a>
          <a href={live}>Demo</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
