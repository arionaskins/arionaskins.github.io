import React from 'react';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='main-container'>
            <h1>Arion Askins</h1>
            <h2>Data Scientist / Data Analyst / Web Developer</h2>
            
      
            <br />
            {/* <Button
                    btnState={this.state}
                    handleClick={this.handleSubmit}
                    class=
                    id=
                     /> */}
            <button id='main-btn' className='btn' type="button" onClick={this}>View More!!</button> 
            <button id='resume-btn' className='btn' type="button" onClick={this}>get resume</button> 
            </div>
       );
    }
}
 
