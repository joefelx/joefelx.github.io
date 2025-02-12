import Image from "next/image";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa6";

// import engineer from "../assets/engineer.jpg";

function Project({
  title,
  description,
  github,
  live,
  tools,
  image,
}: {
  title: string;
  description: string;
  github: string;
  live: string;
  tools: Array<string>;
  image: string;
}) {
  return (
    <div className=" min-w-64 overflow-hidden my-10">
      <div className="flex h-80 justify-center items-center relative object-contain">
        {/* <iframe className="w-full h-full" src={live}></iframe> */}
        <Image
          src={image}
          fill
          className="w-full h-full object-cover"
          alt="placeholder"
        />
      </div>

      {/* Title, Description and Tools */}
      <div className="flex flex-col gap-5 my-12">
        <h1 className="text-5xl">{title}</h1>
        <p className="text-md text-gray-500">{description}</p>
        <div className="flex justify-between items-center ">
          {/* tags */}
          <div className="flex flex-wrap gap-3 mt-2 flex-[2]">
            {tools.map((d, index) => (
              <span
                className="text-sm text-gray-100 border-2 border-gray-100 py-1 px-4 rounded-full"
                key={index}
              >
                {d}
              </span>
            ))}
          </div>

          <div className="mt-4 text-2xl flex gap-5 flex-1 justify-end">
            <a href={github}>
              <FaGithub />
            </a>
            <a href={live}>
              <FaLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
