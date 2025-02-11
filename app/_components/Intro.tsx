"use client";
import React, { useEffect, useState } from "react";
import SubHeader from "./_ui/SubHeader";
import Link from "./_ui/Link";
import Projects from "./Projects";
import Project from "./Project";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import jsonData from "../config/Data.json";

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

  interface Project {
    title: string;
    description: string;
    github: string;
    live: string;
    image: string;
    tools: string[];
    timeline: string;
  }

  interface Education {
    degree: string;
    college: string;
    year: string;
    gpa: string;
  }

  interface Certification {
    name: string;
    provider: string;
    date: string;
  }

  interface Experience {
    role: string;
    organization: string;
    duration: string;
    description: string;
  }

  interface Contact {
    email: string;
    linkedin: string;
    github: string;
    portfolio: string;
  }

  interface SocialLink {
    name: string;
    icon: string;
    url: string;
  }

  interface Data {
    name: string;
    title: string;
    about: string;
    resume: string;
    projects: Project[];
    skills: string[];
    education: Education;
    certifications: Certification[];
    experience: Experience[];
    contact: Contact;
    links: SocialLink[];
  }

  const [data, setData] = useState<Data>(jsonData);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div className="h-full w-full flex flex-col gap-20">
      <div className="grid-container">
        {/* <div className="plane">
          <div className="grid"></div>
          <div className="glow"></div>
        </div> */}
        <div className="plane">
          <div className="grid"></div>
          <div className="glow"></div>
        </div>
      </div>
      {/* Intro */}
      <div className="min-h-screen flex flex-col justify-center ">
        <div className="mb-10 md:text-left text-center z-10">
          <h1 className="md:text-5xl text-4xl font-bold my-5">
            Hi! I&apos;m Joe Felix
          </h1>
          <p className="text-white/50 md:w-3/4">{data["about"]}</p>
        </div>

        <div className="flex gap-5 md:justify-start justify-center z-10">
          <ul className="flex gap-2 items-center">
            {links.map((l, index) => (
              <Link key={index} name={l.name}>
                {l.icon}
              </Link>
            ))}
          </ul>

          <a
            className="text-base text-white font-bold border-2 border-[#008000] rounded-full py-1 px-4 hover:bg-[#008000] hover:text-white cursor-pointer"
            href={data["resume"]}
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Projects */}
      <div>
        <SubHeader>Works</SubHeader>
        <Projects>
          {data["projects"].map((p) => (
            <Project
              key={p.title}
              title={p.title}
              description={p.description}
              github={p.github}
              live={p.live}
              tools={p.tools}
              image={p.image}
            />
          ))}
        </Projects>
      </div>

      {/* Skills */}
      <div className="my-20">
        <SubHeader>Skills</SubHeader>
        <div className="my-5 flex flex-wrap gap-5 justify-center items-center">
          {data["skills"].map((s) => (
            <span
              className="border-2 border-white py-3 px-6 rounded-full text-xl"
              key={s}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <SubHeader>Experience</SubHeader>
        <div>
          {data["experience"].map((e) => (
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
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="min-h-screen relative flex flex-col justify-center items-center">
        <div className="flex flex-col text-center items-center gap-2">
          <h1 className="text-[70px] font-black">Keep In Touch!</h1>
          <span className="text-lg italic">
            Mail @{" "}
            <a
              className="cursor-pointer hover:text-[#008000]"
              href="mailto:joefelixdev@gmail.com"
            >
              {data["contact"].email}
            </a>
          </span>
          <ul className="flex items-center gap-10 my-5">
            {data["links"].map((l, index) => (
              <a key={index} href={l.url}>
                <p className="text-3xl hover:text-[#008000]">
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
        </div>
      </div>
      <span className="text-sm text-white/50 flex items-center justify-center py-5">
        Designed & Developed By Felix
      </span>
    </div>
  );
}

export default Intro;
