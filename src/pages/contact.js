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
                <h2>Leave Me A Message!</h2>
                <p>I like constructive feedback :)</p>


                {/* aside (flex? center jsutify/align)
                    h2 cardTitle
                    div social-btns-container (flex column mobile)
                        <SocialMediaBtn
                            icon={'iconPath'}
                            name={'SM'}> />
                        <SocialMediaBtn
                            icon={'iconPath'}
                            name={'SM'}> />
                        <SocialMediaBtn
                            icon={'iconPath'}
                            name={'SM'}> />
                    (handle form stuff at top of contact  */}
                    <ContactForm />

                


            </div>
        )
    }
}
