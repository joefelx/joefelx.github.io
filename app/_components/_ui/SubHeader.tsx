import React from "react";

function SubHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={`text-lg my-2 font-bold ${className}`}>{children}</h2>;
}

export default SubHeader;
