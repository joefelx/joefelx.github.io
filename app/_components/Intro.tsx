/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SubHeader from "./_ui/SubHeader";
import Link from "./_ui/Link";
import Projects from "./Projects";
import Project from "./Project";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

function Intro() {
  const links = [
    {
      name: "Github",
      icon: <FaGithub />,
      url: "https://github.com/joefelx",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedinIn className="text-[23px]" />,
      url: "https://www.linkedin.com/in/joefelx",
    },
    {
      name: "Leetcode",
      icon: <SiLeetcode className="text-[20px]" />,
      url: "https://leetcode.com/u/joefelx",
    },
    {
      name: "X",
      icon: <FaXTwitter />,
      url: "https://x.com/joefelix_a",
    },
  ];

  return (
    <div className="p-5 ">
      {/* Intro */}
      <div className="my-20">
        <div className="mt-20 mb-10">
          <h1 className="text-5xl font-bold my-5">Hi! I'm Joe Felix</h1>
          <p className="text-white/50 w-3/4">
            I am an Engineer who is a Software Developer working towards new
            things and building projects that excites me. Working in Full Stack
            Projects. Learning Software development. Like to Tinkering with
            Linux. Believes in Web3 and Blockchain. Eager to explore various
            interests.
          </p>
        </div>
        <ul className="flex gap-2 items-center">
          {links.map((l, index) => (
            <Link key={index} name={l.name}>
              {l.icon}
            </Link>
          ))}
        </ul>
      </div>

      {/* Projects */}
      <div>
        <SubHeader>Projects</SubHeader>
        <Projects>
          <Project />
        </Projects>
      </div>

      {/* Links */}
      <div>
        <SubHeader>Socials</SubHeader>
        <ul className="flex gap-2">
          {links.map((l, index) => (
            <Link key={index} name={l.name} url={l.url}>
              {l.icon}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Intro;
