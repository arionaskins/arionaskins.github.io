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
      <About />
      <Strengths />
      <br />
      <Projects />
      <br />
      <Contact />
      <br /> 
      <Footer />

      <button className='arrow'><img alt='arrow up' id='arrow' src={icons.arrow}></img></button>
    </div>
  );
}

export default App;

