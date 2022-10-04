// import pages and components to be rendered to screen
import './styles/App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Main from './pages/main.js'
import About from './pages/about.js';
import Strengths from './pages/whatIdo/whatIdo.js';
import Projects from './pages/projects/Projects.js';
import Contact from './pages/contact.js';
import Footer from './components/Footer.js';
import ScrollUpButton from "react-scroll-up-button";


export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = { y: 0 }
 

  
  }
 
  NavTracking = (yPos) => {
    // if yPos > get window.screenYSize
  }


  render() { 
    
    return ( 
    <div className="App" onScroll={this.trackScroll}>
      <NavBar scrollPos={this.state.y} />

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
         
        </div>
         <ScrollUpButton 
            
            EasingType="easeOutBounce"
            AnimationDuration={2}
            ContainerClassName='arrow'
            ShowAtPosition={111} />
      
    </div>
  );
};
}
