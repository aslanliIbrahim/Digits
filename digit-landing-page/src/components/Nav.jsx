import React from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import { ChevronDown, Menu } from "lucide-react";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between md:justify-around h-20">
      <div className="flex items-center justify-around gap-16">
        <div className="logo-side">
          <img src={logo} alt="" />
        </div>

        <ul className="gap-5 hidden lg:flex">
          <li>Homepages</li>
          <li>Products</li>
          <li className=" hover:cursor-pointer flex items-center">
            Company <ChevronDown size={17} />
          </li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="hidden md:flex gap-5 items-center">
        <p>+994 (051) 334 2288</p>
        <Button color="text-white" bg='bg-button-blue' title="Contact Us" />
      </div>

      <div className=" block md:hidden">
        <Menu size={30} />
      </div>
    </nav>
  );
}
