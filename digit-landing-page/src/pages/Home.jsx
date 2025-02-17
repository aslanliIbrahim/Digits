import React from "react";
import Header from "../section/Header";
import Hero from "../section/Hero";
import Logos from "../section/Logos";
import About from "../section/About";
import Portfolio from "../section/Portfolio";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Logos />
      <About />
      <Portfolio />
    </div>
  );
}
