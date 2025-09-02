"use client";
import React from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import jsonData from "../config/Data.json";

function Footer() {
  const data = jsonData;

  return (
    <div>
      <div className="min-h-screen relative flex flex-col justify-center items-center">
        <div className="flex flex-col text-center items-center gap-2">
          <h1 className="text-[70px] font-black">Keep In Touch!</h1>
          <span className="text-lg italic">
            Mail @{" "}
            <a
              className="cursor-pointer hover:text-[#008000]"
              href={`mailto:${data["contact"].email}`}
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

export default Footer;
