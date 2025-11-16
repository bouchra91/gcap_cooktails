import React from 'react'
import {ScrollTrigger ,SplitText } from 'gsap/all';
import gsap from 'gsap';
import NavBar from "./component/NavBar";
import Hero from "./component/hero";
import Cocktails from "./component/cocktails";
gsap.registerPlugin(ScrollTrigger, SplitText); // <- register GSAP plugins it makes sure that the plugins are loaded globally

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
    </main>
  );
}

export default App