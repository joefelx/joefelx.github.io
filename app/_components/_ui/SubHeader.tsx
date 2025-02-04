import React from "react";

function SubHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={`text-5xl mb-10 ${className}`}>{children}</h2>;
}

export default SubHeader;
