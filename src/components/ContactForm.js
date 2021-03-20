import React from 'react'
  
const ContactForm = () => { 
        return (
            <form className='myForm' onSubmit={event => this.props.handleSubmit(event)} >
            <h4 id='dob-inputs-label'> Enter your birthday below </h4>

            <fieldset className='dob-input-container' style={{border: "5px"}}>

              <label htmlFor="name-input">Name<span className='req-astrick'>*</span></label>
              <input type='text' 
              id='name-input'
              className='name-input'
              placeholder='ex: Arion Askins'
              minLength={3}
              onChange={event => this.props.handleYearChange(event)}
              
              required />


            <label htmlFor="email-input">Email<span className='req-astrick'>*</span></label>
            <input type='text' 
              placeholder='ex: askinsarion@gmail.com'
              minLength={3}
              onChange={event => this.props.handleYearChange(event)}
              
              className='email-input'
              id='email-input' 
              required />


            <label htmlFor="phone-input">Phone</label>
            <input type='text' 
              placeholder='XXX-XXX-XXXX'
              minLength={10}
              onChange={event => this.props.handleYearChange(event)}
              
              className='phone-input'
              id='phone-input' />


            <label htmlFor="textarea">Message</label>
            <textarea
            
            rows={5}
            cols={5} />

            <input type="tel" id="phone" name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required />
        </fieldset>

            <div>
             <button id='btn' type="submit">SUBMIT</button> 
            </div>      
        </form>
        )
      }

export default ContactForm;