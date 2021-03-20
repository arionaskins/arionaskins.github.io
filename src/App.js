// import pages and components to be rendered to screen
import './styles/App.css';
import NavBar from './components/NavBar/NavBar.js';
import Main from './pages/main.js'
import About from './pages/about.js';
import Strengths from './pages/whatIdo.js';
import Projects from './pages/projects/Projects.js';
import Contact from './pages/contact.js';
import Footer from './components/Footer.js'


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
      
      <Footer />

    </div>
  );
}

export default App;

