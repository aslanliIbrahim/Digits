import React from "react";
import logo1 from "../assets/logo-1.png";
import logo2 from "../assets/logo-2.png";
import logo3 from "../assets/logo-3.png";
import logo4 from "../assets/logo-4.png";
import logo5 from "../assets/logo-5.png";
import logo6 from "../assets/logo-6.png";
import logo7 from "../assets/logo-7.png";

const LOGOS = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

export default function Logos() {
  return (
    <section className="py-14">
      <div className="mb-11">
        <h2 className="text-gray-soft font-medium text-center">
          Trusted by forward-thinking software teams around the world
        </h2>
      </div>
      <div className=" gap-10 flex flex-col md:flex md:flex-row md:gap-16 items-center justify-center">
        {LOGOS.map((logo, index) => (
          <img
            className="md:w-[102px] md:h-[34px] object-contain"
            src={logo}
            key={index}
            alt="logos"
          />
        ))}
      </div>
    </section>
  );
}
