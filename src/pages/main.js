import React from 'react';
import TypistHeader from '../components/TypistHeader.js'
import icons from '../icons.js';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return ( 
            <main id ='main' className='main-container'>
                <div className='landing' id='landing'>
                    <h1 id='title'>Arion Askins</h1>
                    <TypistHeader />        
                    <div className='buttons-container'>
                    <span><a href='#projects'>
                            <button id='main-btn' className='btn button'>View My Work</button>
                        </a></span>
                        
                        <a href='https://drive.google.com/file/d/1C-yaYxSavCBDiRV2lfIz4wFldKgJzipL/view?usp=sharing'>
                            <button id='resume-btn' className='btn' type="button" ><span id='download'>
                                <img src={icons.download} id='download' alt=''></img>
                                   </span>  resume</button> </a>
                    </div>

                    
                </div>

                <div className='social-container'>

                    <a href='mailto:askinsarion@gmail.com' className='main-link' id='main-email'>
                        <img alt='email icon' className='main-icon social'
                            id='main-main-email-icon' src={icons.email}></img>
                    </a>

                    
                    <a href='https://www.linkedin.com/in/arionaskins2021/' className='main-link' id='main-linkedin'>
                        <img alt='linkedin icon' className='main-icon social' 
                            id='main-linkedin-icon' src={icons.linkedin}></img>
                    </a>

                    <a href='https://github.com/arionaskins' className='main-link' id='main-github'>
                        <img alt='github icon' className='main-icon social'
                            id='main-github-icon' src={icons.github}></img>
                    </a>
                </div>

                <div className="mouse-icon">
                        <div className="mouseY">
                            <div className="mouse-scroller"></div>
                        </div>
                </div>

            </main>
       );
    }
}
 
