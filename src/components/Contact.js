import React from 'react';
import '../styles/Contact.css'

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <p>Email: <a href='mailto:sharmashivang804@gmail.com'>Gmail</a></p>
            <p>LinkedIn: <a href='https://www.linkedin.com/in/shivang-741b781aa/'>LinkedIn</a></p>
            <p>GitHub: <a href='https://github.com/shivang804'>GitHub</a></p>
            <a href='resume.pdf' download className="btn-resume">Download Resume</a>
        </section>
    );
};

export default Contact;
