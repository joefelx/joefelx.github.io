import React from "react";

function SubHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h1 className={`text-5xl mb-10 ${className}`}>{children}</h1>;
}

export default SubHeader;
