// import pages and components to be rendered to screen
import './styles/App.css';
import NavBar from './components/NavBar/NavBar.js';
import Main from './pages/main.js'
import About from './pages/about.js';
import Strengths from './pages/whatIdo/whatIdo.js';
import Projects from './pages/projects/Projects.js';
import Contact from './pages/contact.js';
import Footer from './components/Footer.js'
import icons from './icons';


function App() {
  return (
    <div className="App">
      <NavBar />

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
               if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {             
                 mybutton.style.display = "block";           
                } else {             
                  mybutton.style.display = "none";           
                }         
                }                  
                // When the user clicks on the button, scroll to the top of the document         
                function topFunction() {          
                 document.body.scrollTop = 0;           
      document.documentElement.scrollTop = 0;      
         }          */}
      <a href='#main' className='arrow'><img alt='arrow up' id='arrow' src={icons.arrow}></img></a>
    </div>
  );
}

export default App;

