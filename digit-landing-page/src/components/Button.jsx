import React, { useState } from "react";

export default function Button({ title, color, bg, hoverColor }) {
  return (
    <button
      className={`w-fit ${color} ${bg} ${hoverColor} rounded-full  hover:cursor-pointer  py-2.5 px-5`}
    >
      {title}
    </button>
  );
}
