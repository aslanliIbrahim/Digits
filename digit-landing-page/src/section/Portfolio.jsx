import React from "react";
import Button from "../components/Button";
import Graphic2 from "../assets/Graphic(2).png";
export default function Portfolio() {
  return (
    <section className="bg-[#FFF9EA]">
      <div className="flex flex-col items-center">
        <h2 className="text-blue-color text-5xl font-medium text-center md:mt-[138px]">
          Simplicity meets innovative design
        </h2>
        <p className="text-[#455880] text-center my-10 text-2xl md:w-[30%]">
          It's really easy to start using Digits. Install the theme, choose a
          demo and start designing the future of your business!
        </p>
        <Button title="Buy Digits" color="text-white" bg="bg-button-blue" />
      </div>
      <div>
        <img className="object-contain w-[100%]" src={Graphic2} alt="" />
      </div>
    </section>
  );
}
