"use client";
import React from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

function Intro({
  name,
  about,
  resume,
  links,
}: {
  name: string;
  about: string;
  resume: string;
  links: SocialLink[];
}) {
  return (
    <div className="h-full w-full flex flex-col gap-20">
      <div className="grid-container">
        <div className="plane">
          <div className="grid"></div>
          <div className="glow"></div>
        </div>
      </div>
      {/* Intro */}
      <div className="min-h-screen flex flex-col justify-center ">
        <div className="mb-10 md:text-left text-center z-10">
          <h1 className="md:text-5xl text-4xl font-bold my-5">
            Hi! I&apos;m {name}
          </h1>
          <p className="text-white/50 md:w-3/4">{about}</p>
        </div>

        <div className="flex gap-5 md:justify-start justify-center z-10">
          <ul className="flex items-center gap-5">
            {links.map((l, index) => (
              <a key={index} href={l.url} target="_blank">
                <p className="text-2xl hover:text-[#008000]">
                  {l.name == "Github" ? (
                    <FaGithub />
                  ) : l.name == "Linkedin" ? (
                    <FaLinkedinIn />
                  ) : l.name == "Leetcode" ? (
                    <SiLeetcode />
                  ) : (
                    <FaXTwitter />
                  )}
                </p>
              </a>
            ))}
          </ul>

          <a
            className="text-base text-white font-bold border-2 border-[#008000] rounded-full py-1 px-4 hover:bg-[#008000] hover:text-white cursor-pointer"
            href={resume}
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
