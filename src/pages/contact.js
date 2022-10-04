import React, { Component } from 'react'
import ContactForm from '../components/ContactForm.js'
import icons from '../icons.js'
import axios from 'axios';



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
      }
    
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    }
    
    handlePhoneChange = event => {
        this.setState({
            phone: event.target.value
        });
    }

    handleMessageChange = event => {
        this.setState({
            message: event.target.value
        });
    }
      
    handleSubmit = event => {
        event.preventDefault();
        const user = this.state.name;
        
                const urll = "localhost:5000/message";
// error from CORS:::: Access to XMLHttpRequest at 'https://t6ymzuwpzk.execute-api.us-east-1.amazonaws.com/default/message' from origin 'http://localhost:3000' has been blocked by CORS policy: Request header field access-control-allow-origin is not allowed by Access-Control-Allow-Headers in preflight response.
        const data = {name:this.state.name,
                    email:this.state.email,                   phone:this.state.phone,
                    message:this.state.message
        }
                
        axios.post(urll, {
            body: data
        })
          .then((response) => {
           
            console.log(response);
            console.log("****");
            console.log(response.config.body);
            console.log("****");
            console.log(response.config.body.email);
          })
          .then((error) => {
            console.log((error));
          });
        


        this.setState({
            name: "",
            email: "",
            phone: "",
            message: ""
            });

            // eslint-disable-next-line no-useless-concat
            alert('Hi, '+ user + "! I've received your message and I will reach out to you soon! Stay safe :)" + '\n' + '\n' + '-Arion A');

    }

    
    render() {
        return (
            <div id='contact' className='contact'>
                <br />
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


/////// downlaod SYSTS