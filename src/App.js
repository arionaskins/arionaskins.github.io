// import pages and components to be rendered to screen
import './styles/App.css';
import { useEffect, useState } from 'react'
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Main from './pages/main.js'
import About from './pages/about.js';
import Strengths from './pages/whatIdo/whatIdo.js';
import Projects from './pages/projects/Projects.js';
import Contact from './pages/contact.js';
import Footer from './components/Footer.js';
import ScrollUpButton from "react-scroll-up-button";
import icons from './icons';


export default function App() {
  
  const { scrollY } = useWindowScrollPositions();
    
  const NavLinkTracking = () => {
    // Get all sections that have an ID defined
    const pages = document.querySelectorAll("div[id]");
  
  // Now we loop through sections to get height, top and ID values for each
  pages.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const pageId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use pageId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".nav-menu a[href*=" + pageId + "]").classList.add("active");
    } else {
      document.querySelector(".nav-menu a[href*=" + pageId + "]").classList.remove("active");
    }
  });
}

  

    console.log("CurrY: " + scrollY);
    return ( 
    <div className="App-Container">
    
      <div className='rotate'>
        <h3>Please excuse my development..</h3>
            <img alt='rotate phone lanscape mode diagram' className='rotate-img'
                 id='rotate-img' src={icons.rotate}></img>
        <p id = 'rotate-text'>Rotate your device to landscape mode to view my current work :)</p>
      </div>

      <div className="App" >
        <NavBar   />

        <div className='pages-wrapper'>
          {/* Pages
          every 550 ish px change .
          */}
          <Main />
          <br />
          <About />
          <br />
          <Strengths />
          <br />
          <Projects />
          <br />
          <Contact />
          <br /> 
          <Footer />
         
        </div>
         <ScrollUpButton 
            EasingType="easeOutBounce"
            AnimationDuration={2}
            ContainerClassName='arrow'
            ShowAtPosition={111} />
      </div>
    </div>
  );
};


// util function to grab Y position of screen window => for nav tracking

export const useWindowScrollPositions = () => {

   const [scrollPosition, setPosition] = useState({ scrollY: 0 })

   useEffect(() => {
    const pages = document.querySelectorAll("section[id]");
    function updatePosition() {
        setPosition({ scrollY: window.scrollY })
        console.log("offsetScroll: " + window.scrollY );
        console.log(pages);
        pages.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 50;
          console.log(current + ' ' + current.getAttribute("id"));
          const pageId = current.getAttribute("id");
          const id = "'#" + pageId + "'";
          
          /*
          - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
          - To know which link needs an active class, we use pageId variable we are getting while looping through sections as an selector
          */
          if (
            scrollPosition.scrollY > sectionTop &&
            scrollPosition.scrollY <= sectionTop + sectionHeight
          ){
            console.log(document.querySelector("span.nav-link-div.nav-link[to='" + pageId + "']"));
            document.querySelector("a[to=" + id + "]").classList.add(".viewing");
          } else {
            document.querySelector("a[to=" + id + "]").classList.remove("viewing");
          }
          // doesnt add viewong class to navbar span, restyling also
        });


    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
   }, [])

   return scrollPosition
}