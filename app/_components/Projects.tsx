import React from "react";

function Projects({ children }: { children: React.ReactNode }) {
  return <div className="my-5 w-full grid gap-5 max-w-5xl">{children}</div>;
}

export default Projects;
