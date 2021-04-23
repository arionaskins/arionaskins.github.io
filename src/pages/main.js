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
            <div id ='main' className='main-container'>
                <div className='landing' id='landing'>
                    <h1 id='title'>Arion Askins</h1>
                    <TypistHeader />        
                    <div className='buttons-container'>
                        <button id='main-btn' className='btn' type="button" onClick={this}>View More!!</button> 
                        <button id='resume-btn' className='btn' type="button" onClick={this}><span id='download'><img src={icons.download} id='download' alt=''></img>
                                                                                                                    </span>  resume</button> 
                    </div>
                </div>

                <div class="mouse-icon">
                        <div class="mouseY">
                            <div class="mouse-scroller"></div>
                        </div>
                    </div>

            </div>
       );
    }
}
 
