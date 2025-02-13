import React from "react";

export default function Button({ title, color }) {
  return (
    <button className={`${color} rounded-full hover:bg-sky-600 hover:cursor-pointer bg-button-blue py-2.5 px-5`}>
      {title}
    </button>
  );
}
