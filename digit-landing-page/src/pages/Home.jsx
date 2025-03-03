import React from "react";
import Header from "../section/Header";
import Hero from "../section/Hero";
import Logos from "../section/Logos";
import About from "../section/About";
import Portfolio from "../section/Portfolio";
import Cards from "../section/Cards";
import Cta from "../section/Cta";

export default function Home() {
  return (
    <div>
      <Hero />
      <Logos />
      <About />
      <Portfolio />
      <Cards />
      <Cta />
    </div>
  );
}
