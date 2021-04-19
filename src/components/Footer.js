import React from 'react'
import icons from '../icons.js'

const Footer = () => {
    return (
        <footer>
            <div id='footer-link-line'>
                <a href='https://www.linkedin.com/in/arionaskins2021/' className='footer-link' id='linkedin'>
                    <img alt='linkedin icon' className='footer-icon' 
                         id='linkedin-icon' src={icons.linkedin}></img>
                </a>

                <a href='https://github.com/arionaskins' className='footer-link' id='github'>
                     <img alt='github icon' className='footer-icon'
                          id='github-icon' src={icons.github}></img>
                </a>
               
            </div>
            <p>written from scratch entirely in react by me :)</p> 
            <i><p>icons retrieved from <a href="https://www.flaticon.com/" id='flaticon' title="Flaticon">Flaticon</a></p></i>
            <p>A. Askins 2021 ©</p>
        </footer>
    )
}

export default Footer;

