import React from 'react'
import { cocktailLists ,mockTailLists} from "/src/constants/index.js";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const Cocktails = () => {
useGSAP(() => {
  // Animation code will go here
  const parallelTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: "#cocktails",
    start: "top 30%",
    end: "bottom 80%",
    scrub: true
  }
});
parallelTimeLine.from("#c-left-leaf", { x: -100 , y: 100 }).from("#c-right-leaf", { x: 100, y: 100 });

});

  return (
    <section id='cocktails' className='noisy'>
      <img src="/src/assets/public/images/cocktail-left-leaf.png" alt="l-leaf" id ="c-left-leaf" />
      <img src="/src/assets/public/images/cocktail-right-leaf.png" alt="r-leaf" id ="c-right-leaf" />
       <div className='list'>
         <div className='popular'>
            <h2>Most popular cocktails:</h2>
           <ul> {cocktailLists.map((cocktail, index) => (
              <li key={index}>
                <div className='md:me-28'>
                  
                     <h3>{cocktail.name}</h3>
                  <p>{cocktail.country}|{cocktail.detail}</p>
                  </div>
                 <span>{cocktail.price}</span>
                  
              </li>
            ))}
            </ul>
         </div>
         <div className='loved'>
          <h2>Most loved cocktails:</h2>
          <ul>
            {mockTailLists.map((cocktail, index) => (
              <li key={index}>
                <div className='me-28'>
                  <h3>{cocktail.name}</h3>
                  <p>{cocktail.country}|{cocktail.detail}</p>
                </div>
                <span>{cocktail.price}</span>
              </li>
            ))}
          </ul>
         </div>
        </div> 
    </section>
  )
}

export default Cocktails