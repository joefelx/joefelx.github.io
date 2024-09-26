import React from "react";

function Link({
  name,
  url,
  className,
  children,
}: {
  name: string;
  url?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <li
      className={`hover:text-red-500 cursor-pointer ${className}`}
      title={name}
    >
      <a href={url} className="text-xl">
        {children}
      </a>
    </li>
  );
}

export default Link;
