import React from "react";

function SubHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={`text-6xl mb-5 ${className}`}>{children}</h2>;
}

export default SubHeader;
