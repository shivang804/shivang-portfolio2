import React from 'react';
import '../styles/Hero.css'
import {FaGithub, FaHome,  FaLinkedinIn, FaMailBulk, FaPhone} from 'react-icons/fa'

const Hero = () => {
    return (
        <section id="hero" className="hero">
            
             <ul className='hero_icons'>
                <li className='home_icon'><FaHome size={30} /></li>
                <li className='linked_icon'><a href='https://www.linkedin.com/in/shivang-741b781aa/'><FaLinkedinIn size={30} /></a></li>
                <li className='phone_icon'><FaPhone size={30} /></li>
                <li className='git_icon'><a href='https://github.com/shivang804'><FaGithub size={30} /></a></li>
                <li className='mail_icon'><a href='mailto:sharmashivang804@gmail.com'><FaMailBulk size={30} /></a></li>
            </ul>  
            <div className="hero-content">
                <h1 className='heading-primary'>Hi, I'm SHIVANG</h1>
                <p className='text-primary'>A passionate Software Devloper with a passion of building web applications</p>
                <a href="#projects" className="btn-hero">Projects</a>
            </div>
            <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
           
        </section>
    );
};

export default Hero;