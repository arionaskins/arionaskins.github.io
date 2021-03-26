import React from 'react';
import TypistHeader from '../components/TypistHeader.js'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id ='main' className='main-container'>
                <h1 id='title'>Arion Askins</h1>
                <TypistHeader />            
        
                <div className='buttons-container'>
                    <button id='main-btn' className='btn' type="button" onClick={this}>View More!!</button> 
                    <button id='resume-btn' className='btn' type="button" onClick={this}>get resume</button> 
                </div>
            </div>
       );
    }
}
 
