"use client";

import { memo } from "react";

const flagMap = {
  0: "🇺🇸",
  1: "🇪🇸",
  2: "🇫🇷",
  3: "🇩🇪",
  4: "🇷🇺",
};

function Flag({ options }) {
  console.log("Rendering Flag");
  return (
    <span role="img" aria-label="hand waving">
      {flagMap[options.index]}
    </span>
  );
}

export default memo(Flag);
