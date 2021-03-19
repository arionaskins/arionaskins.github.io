import React, { Component } from 'react'
import ContactForm from '../components/ContactForm.js'

export default class Contact extends Component {
    render() {
        return (
            <div>
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
