import React from 'react'
  
  export default class ContactForm extends React.Component {
    

      render() {
        return (
            <form className='myForm' onSubmit={event => this.props.handleSubmit(event)} >
              <fieldset className='dob-input-container' style={{border: "5px"}}>
                
                    <div className='form-item'>
                      <label htmlFor="name-input">Name<span className='req'>*</span></label>
                      <input  type='text' 
                              id='name-input'
                              className='name-input'
                              placeholder='ex: Arion Askins'
                              minLength={3}
                              value={this.props.formData.name}
                              onChange={e => this.props.handleNameChange(e)}
                              required />
                    </div>

                    <div className='form-item'>
                      <label htmlFor="email-input">Email<span className='req'>*</span></label>
                      <input type='text' 
                              placeholder='ex: askinsarion@gmail.com'
                              minLength={3}
                              value={this.props.formData.email}
                              onChange={e => this.props.handleEmailChange(e)}
                              className='email-input'
                              id='email-input' 
                              required />
                    </div>

                    <div className='form-item'>
                      <label htmlFor="phone-input">Phone</label>
                      <input type='tel' 
                              placeholder='XXX-XXX-XXXX'
                              minLength={10}
                              value={this.props.formData.phone}
                              onChange={e => this.props.handlePhoneChange(e)}
                              className='phone-input'
                              id='phone-input' />
                    </div>

                    <div className='form-item'>
                      <label htmlFor="textarea">Message</label>
                      <textarea className='form-item'
                                rows={5}
                                cols={5} 
                                placeholder="Cool portfolio! When are you available to talk more?"
                                onChange={e => this.props.handleMessageChange(e)}
                                value={this.props.formData.message}
                                />
                    </div>

              </fieldset>

            <div>
             <button className='btn' id='submit' type="submit">SUBMIT</button> 
            </div>      
        </form>
        )
      }

    }