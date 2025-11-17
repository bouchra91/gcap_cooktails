import React, { useState ,useRef  } from "react";
import { allCocktails } from "/src/constants/index.js";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const Jus = () => {

  

  const contentRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

useGSAP(()=>{
    gsap.fromTo('#title',
      {opacity:0},
      {opacity:1,duration:1}
      );
      gsap.fromTo('.cocktail img' ,
      {opacity:0 ,xPercent:-110},
      {opacity:1 ,xPercent:0 ,duration:1 ,}
      );
      gsap.fromTo('.details h2, .details p' ,
      {opacity:0 ,yPercent:100},
      {opacity:1 ,yPercent:0 ,duration:1 ,delay:1}
      );
  },[currentIndex])
 

  const goToSlide = (index) => {
    const newIndex = (index + allCocktails.length) % allCocktails.length;
    setCurrentIndex(newIndex);
    
  };
  const getCocktail = (indexOffSet) => {
    return allCocktails[(indexOffSet + currentIndex + allCocktails.length) % allCocktails.length];
  };
  const currentCocktail = getCocktail(0);
  const prevCocktail = getCocktail(-1);
  const nextCocktail = getCocktail(1);
  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/src/assets/public/images/slider-left-leaf.png"
        id="m-left-leaf"
      />
      <img
        src="/src/assets/public/images/slider-right-leaf.png"
        id="m-right-leaf"
      />
      <h2 id="menu-heading" className="sr-only">
        Cocktail menu
      </h2>
      <nav aria-label="Cocktail Navigation" className="cocktail-tabs">
        {allCocktails.map((cocktail, index) => {
          const isActive = index == currentIndex;
          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >

             <span>{prevCocktail.name}</span>
            <img
              src="/src/assets/public/images/right-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
          <button
            className="text-right"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
         
          
            <img
              src="/src/assets/public/images/left-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" />
        </div>
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipes for :</p>
            <p id="title">{currentCocktail.name}</p>

          </div>
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jus;
