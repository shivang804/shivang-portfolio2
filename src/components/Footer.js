import React from 'react';
import '../styles/Footer.scss'
import {FaGithub,  FaLinkedinIn, FaMailBulk} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
        <div className='footer'>
            <div className='footer_container'>
                <div className='right'>
                    <nav className='footer_nav'>
                 <ul className='footer_ul'>
                    <li className='footer_li'><a href='https://www.linkedin.com/in/shivang-741b781aa/'><FaLinkedinIn size={30} /></a></li>
                    <li className='footer_li'><a href='https://github.com/shivang804'><FaGithub size={30} /></a></li>
                    <li className='footer_li'><a href='mailto:sharmashivang804@gmail.com'><FaMailBulk size={30}/></a></li>
                 </ul>
                 </nav>
             </div>
                <a href='resume.pdf' download className="btn-resume">Download Resume</a>
        </div>
            <p>&copy; {new Date().getFullYear()} SHIVANG All rights reserved.</p>
      </div>
        
    </>
    );
};

export default Footer;
