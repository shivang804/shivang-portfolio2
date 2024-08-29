import React from 'react';
import '../styles/Contact.css'

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <form>
             <label>NAME</label> 
             <input type='text'></input>  
             <label>EMAIL</label> 
             <input type='email'></input>  
             <label>MESSAGE</label> 
             <textarea rows='6' placeholder='Message'/>  
            </form>
            <button className='form_btn'>Submit</button>
        </section>
    );
};

export default Contact;
