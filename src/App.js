import './styles/App.css';
import NavBar from './components/NavBar/NavBar.js';
import Main from './pages/main.js'
import About from './pages/about.js';
import Strengths from './pages/whatIdo.js';
import Projects from './pages/projects.js';
import Contact from './pages/contact.js';


function App() {
  return (
    <div className="App">
      
      {/* Pages */}
      <NavBar />
      <Main />
      <About />
      <Strengths />
      <br />
      <Projects />
      <br />
      <Contact />
      

    </div>
  );
}

export default App;

