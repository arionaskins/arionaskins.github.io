import React from 'react';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='about-container' id='about'>
                <h2>About Me</h2>
                    <br />
                <div className='about-sections-container'>
                    <section className='about-section' id='about-left' >
                        <p>I am a graduating senior at the University of Maryland with a 
                        B.S. in Information Science and a minor in Human Development & Quantitative Methodology. </p>
                    
                        <p>I enjoy using technology in working with data to investigate and solve societal information problems. </p>
                        <img alt='yea' src='../components/md.png' ></img>
                    </section>

                    <section className='about-section' id='about-right' >
                        <ul>
                            <li>
                            <p><span className='about-list-titles'>Age: </span>21</p> 
                            </li>
                            <li>
                                <p><span 
                                    className='about-list-titles'>Hometown: </span>Eastern Shore, MD
                                </p> 
                            </li>
                            <li>
                                <p><span
                                    className='about-list-titles'>Education: </span>
                                        University of Maryland, College Park (College Park, MD)</p> 
                            </li>
                            
                                <ul>
                                    <li>
                                        <p><span className='about-list-titles'>Major: </span>Information Science</p> 
                                    </li>
                                    <li>
                                        <p><span
                                            className='about-list-titles'>Minor: </span>
                                            Human Development & Quantitative Methodology</p> 
                                    </li>
                                </ul>
                            
                            <li>
                            <p><span className='about-list-titles'>Hobbies: </span></p> 
                            </li>
                        </ul>
                    </section> 
                </div> {/* sections container */}

                <p className='about-resume-link'>
                        Resume: 
                        <span> <a href=' '> Word</a> </span>| 
                        <span> <a href=' '> PDF</a> </span>|
                        <span> <a href='https://go.umd.edu/arionaskins2021'>Drive</a></span>
                </p>

            </div>
         );
    }
}
 