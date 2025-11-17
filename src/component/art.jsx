import React, { use } from 'react'
import { featureLists ,goodLists } from '/src/constants/index.js';
import { useMediaQuery } from '@mui/material';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
const Art = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  useGSAP(() => {
    const startValue = isMobile ? 'top 20%' : 'top top';
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        startValue ,
        end: 'bottom center',
        scrub: 1.5,
        pin: true,}
      });

      maskTimeline.to('.will-fade',{
        opacity:0 ,stagger:0.2 ,ease:'power1.inOut', 
      }).to('.masked-img',{scale:1.3,maskPosition:'center',maskSize:'400%' ,
      duration:1 ,ease:'power1.inOut',
      }, '-=0.5').to('#masked-content',{opacity:1 ,duration:1 ,ease:'power1.inOut',
      } );
    });
  return (
    <div id="art">
       <div className='container mx-auto h-full pt-20'>
        <h2 className='will-fade'>The ART</h2>
        <div className='content'>
           <ul className='space-y-4 will-fade'>
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
               
            <img src="/src/assets/public/images/check.png" alt="check-icon" />
                 
                  <p className="">{feature}</p>
              
              </li>
            ))}
          </ul>
          <div className='cocktail-img'>
            <img src="/src/assets/public/images/under-img.jpg" alt="art-cocktail"
            className='abs-center masked-img size-full object-contain' />

          </div>
          <ul className='space-y-4 will-fade'>
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
               
            <img src="/src/assets/public/images/check.png" alt="check-icon" />
                 
                  <p className="">{feature}</p>
              
              </li>
            ))}
          </ul>
          </div>
          <div className='masked-container'>
            <h2 className='will-fade'>
            Sip-Worthy Perfection

            </h2>
            <div id="masked-content">
              <h3>
                Made with Craft, Poured with Passion
              </h3>
              <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
            </div>
           

          </div>


       </div>
    </div>
  )
}

export default Art