import React from 'react';
import '../styles/Header.css'
const Header = () => {
    return (
        <header>
            <headerlogo>
            <nav>
                <a href='#hero'> <img src='./SHIVANGphoto.jpg' alt = "SHIVANG" className='header_logo'></img></a>
            </nav>
            </headerlogo>
               <a href='#hero'><h3 className='header_name'>SHIVANG</h3></a> 
            <headercontent>
            <nav >
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#about">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            </headercontent>
        </header>
    );
};

export default Header;
