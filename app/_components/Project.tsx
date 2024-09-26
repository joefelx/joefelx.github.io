import Image from "next/image";
import React from "react";

import engineer from "../assets/engineer.jpg";

function Project() {
  const development = new Array<string>("html", "css");
  return (
    <div className="border-2 border-gray-500 rounded-xl max-w-64 p-2 overflow-hidden">
      <div className="flex h-48 justify-center items-center">
        <Image
          draggable={true}
          className="w-full h-full object-cover"
          src={engineer}
          alt="image"
        ></Image>
      </div>

      <h1 className="text-2xl my-2">title</h1>
      <p>description</p>

      <div className="flex justify-between items-center">
        {/* tags */}
        <div className="flex gap-3 mt-2">
          {development.map((d, index) => (
            <span
              className="text-sm text-yellow-200 bg-yellow-600 border border-yellow-300 py-1 px-2 rounded-xl"
              key={index}
            >
              {d}
            </span>
          ))}
        </div>

        <p>
          <a href="">Github</a>
        </p>
      </div>
    </div>
  );
}

export default Project;
