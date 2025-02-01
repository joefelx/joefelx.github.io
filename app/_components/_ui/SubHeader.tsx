import React from "react";

function SubHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={`text-6xl my-2 ${className}`}>{children}</h2>;
}

export default SubHeader;
