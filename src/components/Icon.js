import React from "react";
import paths from "./paths";

export default function Icon({
  width = 24,
  height = 24,
  color = "currentColor",
  className,
  iconType,
}) {
  const { iconClass, path } = paths[iconType];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      className={`bi ${iconClass} ${className}`}
      viewBox="0 0 16 16"
    >
      <path d={path} />
    </svg>
  );
}
