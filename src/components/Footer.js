import React from 'react'
import icons from '../icons.js'

const Footer = () => {
    return (
        <footer>
            <div>
                <img alt='hay' className='footer-link' id='github' src={icons.github}></img>
                <img alt='hay' className='footer-link' id='linkedin' src={icons.linkedin}></img>
            </div>
            <p>Designed in react (self-taught) by me :)</p> 
            <p>2021</p>
        </footer>
    )
}

export default Footer;