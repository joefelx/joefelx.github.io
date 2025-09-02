import React from "react";
import Project from "./Project";
import SubHeader from "./_ui/SubHeader";

interface Project {
  title: string;
  description: string;
  github: string;
  live: string;
  image: string;
  tools: string[];
  timeline: string;
}

function Projects({ projects }: { projects: Project[] }) {
  return (
    <div>
      <SubHeader>Works</SubHeader>
      <div className="w-full grid gap-12 max-w-5xl">
        {projects.map((p) => (
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
      </div>
    </div>
  );
}

export default Projects;
