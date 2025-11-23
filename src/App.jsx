import React from 'react'
import {ScrollTrigger ,SplitText } from 'gsap/all';
import gsap from 'gsap';
import NavBar from "./component/NavBar";
import Hero from "./component/hero";
import Cocktails from "./component/cocktails";
import Art from "./component/art";
import Jus from "./component/jus";
import { About } from "./component/about";
import Contact from "./component/contact";
gsap.registerPlugin(ScrollTrigger, SplitText); // <- register GSAP plugins it makes sure that the plugins are loaded globally

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Jus />
      <Contact />
    </main>
  );
}

export default App