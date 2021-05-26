// import pages and components to be rendered to screen
import './styles/App.css';
import NavBar from './components/NavBar/NavBar.js';
import Main from './pages/main.js'
import About from './pages/about.js';
import Strengths from './pages/whatIdo/whatIdo.js';
import Projects from './pages/projects/Projects.js';
import Contact from './pages/contact.js';
import Footer from './components/Footer.js';
import ScrollUpButton from "react-scroll-up-button";


function App() {


  return (
    <div className="App">
      <NavBar />

      <div className='pages-wrapper'>
      {/* Pages */}
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

      {/* fixed scroll to top arrow */}
      {/* // When the user scrolls down 20px from the top of the document, show the button
               window.onscroll = function() {scrollFunction()};                  
               function scrollFunction() {           
               
                }                  
                // When the user clicks on the button, scroll to the top of the document         
                function topFunction() {          
                 document.body.scrollTop = 0;           
      document.documentElement.scrollTop = 0;      

         }          */}
         
      {/* <a href='#main' className='arrow'><img alt='arrow up' id='arrow' src={icons.arrow}></img></a> */}
        </div>
         <ScrollUpButton 
            StopPosition={0}
            ShowAtPosition={111}
            EasingType='easeOutCubic'
            AnimationDuration={250}
            ContainerClassName='arrow' />
      
    </div>
  );
}

export default App;

