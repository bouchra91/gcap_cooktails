import React from 'react'
import {ScrollTrigger ,SplitText } from 'gsap/all';
import gsap from 'gsap';
import NavBar from "./component/NavBar";
import Hero from "./component/hero";
gsap.registerPlugin(ScrollTrigger, SplitText); // <- register GSAP plugins it makes sure that the plugins are loaded globally

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
    </main>
  );
}

export default App