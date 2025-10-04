import React from 'react'
import {ScrollTrigger ,SplitText } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText); // <- register GSAP plugins it makes sure that the plugins are loaded globally

function App() {
  return (
    <div className='flex-center'>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p className="text-lg text-gray-600">
        This is a sample React application using Tailwind CSS and GSAP.
      </p>
    </div>
  )
}

export default App