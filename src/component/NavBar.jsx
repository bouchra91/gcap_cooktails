import React from 'react'
import logoNav from '../assets/logoNav.svg'
import { navLinks } from '../constants'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

function NavBar() {
  useGSAP(() => {
    const links =gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'buttom top'}
    })

    links.fromTo('nav', {
      backgroundColor: 'transparent'}
      , {backgroundColor : '#00000050',
        backgroundFilter: 'blur(10px)',
        duration: 1, ease: 'power1.inOut'})
      
  
    
    
  });
  return (
    <nav>
      <div className='flex w-full justify-between items-center p-6'> 
        <a href="#home" className='flex items-center gap-2'>
          <img src={logoNav} alt="Velvet Pour Logo" />
        <p>Velvet Pour</p>
    
        </a>
        <ul className='flex items-center gap-8 justify-evenly'>
          {navLinks.map((link) => ( 
            <li key={link.title}><a href={link.id}>{link.title}</a></li>))}
          
        </ul>
      </div>
    </nav>
  )
}

export default NavBar