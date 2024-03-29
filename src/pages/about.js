import React from 'react';
import icons from '../icons'

export default class About extends React.Component {

    render() { 
        return ( 
            <section className='about-container' id='about'>
                <br />
                <h2>About Me</h2>
                    <br />
                <div className='about-sections-container'>
                    <article className='about-section' id='about-left' >
                        <p>Hi, I'm Arion!</p>

                        <p>I am a graduating senior at the University of Maryland majoring in Information Science with a minor 
                            in Human Development & Quantitative Methodology. Currently I am working Research Intern
                            at Project RISE Research Institute where I am enhancing my knowledge in conducting research,
                            as well as developing a Qualitative Systematic Review on the implications of technology integration
                            within high school math and history courses!</p>
                    
                        <p>I became intrigued by computers and technology from a young age and I always found myself attempting to
                            solving a problem or issue using technology. As the logical thinker that I am, I am able to use this
                            to make and draw conclusions from information derived from data.</p>

                        <p>When I am not coding, you can find me painting canvases
                         or tie-dying old fabric :) I also enjoy relaxing by the beach and a new hobby I've discovered is hiking!</p>

                        <div className='about-resume-btm'>
                            <span><a href='https://drive.google.com/file/d/1C-yaYxSavCBDiRV2lfIz4wFldKgJzipL/view?usp=sharing'><button id='resume'
                                                                                        className='btn button'
                                                                                         ><img src={icons.download} 
                                                                                            id='download' alt='download'></img>résumé</button></a></span>
                        </div>
                    </article>

                    <aside className='about-section' id='about-right' >
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
                                        University of Maryland, College Park</p> 
                            </li>
                            
                                <ul>
                                    <li>
                                        <p><span className='about-list-titles'>Major: </span>Information Science—Data Science</p> 
                                    </li>
                                    <li>
                                        <p><span
                                            className='about-list-titles'>Minor: </span>
                                            Human Development & Quantitative Methodology</p> 
                                    </li>
                                </ul>
                            
                            <li>
                            <p><span className='about-list-titles'>Interests: </span></p> 
                            </li>
                            <ul>
                                    <li>
                                        <p>Painting</p> 
                                    </li>
                                    <li>
                                        <p>Photography</p> 
                                    </li>
                                </ul>
                        </ul>
                    </aside> 
                </div>
                
                <br />
            </section>
         );
    }
}
 





