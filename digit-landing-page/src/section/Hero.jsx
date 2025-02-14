import React from "react";
import Button from "../components/Button";
import Graphic from "../assets/Graphic.png";
const Hero = () => {
  return (
    <section className="bg-gradient-to-t from-[#f2f9ff] to-[#ffffff] pt-[144px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-blue-color font-medium w-[100%] mb-[27px] text-center text-3xl md:text-[56px] md:w-[40%]">
          Good design meets great user experience
        </h1>
        <p className="text-blue-color mb-[27px]">
          For everyone, from beginners to experts
        </p>
        <div className="flex gap-5 pb-[32px]">
          <Button title="Buy digits" color="text-white" bg="bg-button-blue" />
          <Button
            title="See the Features"
            color="text-white"
            bg="bg-button-blue"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={Graphic} className="w-[60%]" alt="" />
      </div>
    </section>
  );
};

export default Hero;
