import React, { Component } from 'react'
import ContactForm from '../components/ContactForm.js'
import icons from '../icons.js'

export default class Contact extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "Cool portfolio! When are you available to talk more?"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);    
    }
    

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        });
        console.log(this.state.name)

      }
    
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
        console.log(this.state.email)
    }
    
    handlePhoneChange = event => {
        this.setState({
            phone: event.target.value
        });
        console.log(this.state.phone)

    }

    handleMessageChange = event => {
        this.setState({
            message: event.target.value
        });
        console.log(this.state.message)
    }
      
    handleSubmit = event => {
        event.preventDefault();
        const user = this.state.name;
        console.log(user, 'submitted');
        alert('Hi, '+ user + "! I've received your message and I will reach out to you soon! Stay safe :)" + '\n' + '\n' + '-Arion A');
        
        this.setState({
            name: "",
            email: "",
            phone: "",
            message: ""
            });
        console.log(this.state, 'post submit')
    }


    
    render() {
        console.log(this.state);
        return (
            <div id='contact' className='contact'>
                <h2 id='contact-hdr'>Leave Me A Message! <span><img id='contact-icon' alt='' src={icons.contact}></img></span></h2>
                <p id='contact-subhdr'>I like constructive feedback :)</p>

                    <ContactForm 
                        formData={this.state}
                        handleSubmit = {this.handleSubmit}
                        handleNameChange = {this.handleNameChange}
                        handleEmailChange = {this.handleEmailChange}
                        handlePhoneChange = {this.handlePhoneChange}
                        handleMessageChange = {this.handleMessageChange} />

            </div>
        )
    }
}

