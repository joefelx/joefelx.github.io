import React from "react";
import { IconType } from "react-icons";

function Link({
  name,
  url,
  icon,
  className,
}: {
  name: string;
  url?: string;
  icon: IconType;
  className?: string;
}) {
  return (
    <li className="hover:text-red-500">
      <a href={url} className="text-xl">
        {icon}
      </a>
    </li>
  );
}

export default Link;
