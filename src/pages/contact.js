import React, { Component } from 'react'
import ContactForm from '../components/ContactForm.js'

export default class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div id='contact' className='contact'>
                <h2 id='contact-hdr'>Leave Me A Message!</h2>
                <p id='contact-subhdr'>I like constructive feedback :)</p>

                    <ContactForm />

                
            </div>
        )
    }
}
