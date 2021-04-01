import React from 'react'
  

const ContactForm = () => { 
        return (
            <form className='myForm' onSubmit={event => this.props.handleSubmit(event)} >
              <fieldset className='dob-input-container' style={{border: "5px"}}>
                
                <h2>Leave Me A Message!</h2>
                <p>I like constructive feedback :)</p>

                    <div className='form-item'>
                      <label htmlFor="name-input">Name<span className='req'>*</span></label>
                      <input  type='text' 
                              id='name-input'
                              className='name-input'
                              placeholder='ex: Arion Askins'
                              minLength={3}
                              onChange={event => this.props.handleYearChange(event)}
                              required />
                    </div>

                    <div className='form-item'>
                      <label htmlFor="email-input">Email<span className='req'>*</span></label>
                      <input type='text' 
                              placeholder='ex: askinsarion@gmail.com'
                              minLength={3}
                              onChange={event => this.props.handleYearChange(event)}
                              className='email-input'
                              id='email-input' 
                              required />
                    </div>

                    <div className='form-item'>
                      <label htmlFor="phone-input">Phone</label>
                      <input type='tel' 
                              placeholder='XXX-XXX-XXXX'
                              minLength={10}
                              onChange={event => this.props.handleYearChange(event)}
                              className='phone-input'
                              id='phone-input' />
                    </div>

                    <div className='form-item'>
                      <label htmlFor="textarea">Message</label>
                      <textarea className='form-item'
                                rows={5}
                                cols={5} />
                    </div>

              </fieldset>

            <div>
             <button className='btn' id='btn' type="submit">SUBMIT</button> 
            </div>      
        </form>
        )
      }

export default ContactForm;