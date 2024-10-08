import React from 'react';
import '../styles/Header.scss'
const Header = () => {
    return (
        <header>
            <headerlogo>
            <nav>
                <a href='#hero'> <img src='./SHIVANGphotobg.jpg' alt = "SHIVANG" className='header_logo'></img></a>
               <a href='#hero'><h3 className='header_name'>SHIVANG</h3></a> 
            </nav>
            </headerlogo>
            <headercontent>
            <nav className='header_contents'>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    {/*<li><a href="#about">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#education">Education</a></li>*/}
                </ul>
            </nav>
            </headercontent>
        </header>
    );
};

export default Header;
