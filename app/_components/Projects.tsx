import React from "react";

function Projects({ children }: { children: React.ReactNode }) {
  return <div className="w-full grid gap-5 max-w-5xl">{children}</div>;
}

export default Projects;
