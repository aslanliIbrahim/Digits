import React from "react";
import Graphic1 from "../assets/Graphic1.png";
import Icon from "../assets/Icon.png";
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
const details = [
  {
    id: 1,
    icon: Icon,
    heading: "Design and Assets",
    title:
      "Make your brand stand out with pixel-perfect design crafted to perfection.",
  },
  {
    id: 2,
    icon: Icon1,
    heading: "Easy Content",
    title:
      "Import your demos or build pages visually. Bonus: All images and illustrations included!",
  },
  {
    id: 3,
    icon: Icon2,
    heading: "Fast and Reliable",
    title:
      "No heavy-weight plugins. No builders. No unneccesary file loading. Pure WordPress.",
  },
];

export default function About() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <h2 className="text-blue-color text-6xl md:w-[50%] text-center">
          Whatever work you do, we're able to help
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-28">
        <div className="w-[50%] flex items-center justify-center">
          <img className="object-contain" src={Graphic1} alt="about-img" />
        </div>
        <div>
          {details.map((detail) => (
            <ul>
              <li key={detail.id} className="flex mt-8">
                <div className="mr-14">
                  <img src={detail.icon} alt="" />
                </div>
                <div>
                  <p className="text-blue-color text-[22px] font-medium mb-3">
                    {detail.heading}
                  </p>
                  <p className=" w-[50%] text-gray-soft pb-2.5 ">
                    {detail.title}
                  </p>
                </div>
              </li>
              <hr className="w-[50%] ml-[13%] inline-block" />
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
