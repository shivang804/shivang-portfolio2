import React from 'react';
import '../styles/Contact.scss'

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>CONTACT</h2>
            <p className="after_contact">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
            <form className='form_content'>
             <label >NAME</label> 
             <input type='text' placeholder='Enter Your Name'></input>  
             <label>EMAIL</label> 
             <input type='email' placeholder='Enter Your Email'></input>  
             <label>MESSAGE</label> 
             <textarea rows='6' placeholder='Enter Your Message'/> 
             <div className="form-actions">
            <button className='form_btn'>Submit</button>
            </div> 
            </form>
        </section>
    );
};

export default Contact;
