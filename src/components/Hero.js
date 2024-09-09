import React from 'react';
import '../styles/Hero.scss'
//import {FaGithub, FaHome,  FaLinkedinIn, FaMailBulk, FaPhone} from 'react-icons/fa'

const Hero = () => {
    return (
        <section id="hero" className="hero">
            
             <ul className='hero_icons'>
                <li className='home_icon'><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/shivang-741b781aa/'>
                <img className="hero__icon" src="./icons8-linkedin (1).svg" alt="Shivang insta"></img>
              </a></li>
                <li className='linked_icon'><a href='https://www.linkedin.com/in/shivang-741b781aa/'> <img className="hero__icon" src="./icons8-twitter.svg" alt="Shivang insta"></img></a></li>
                <li className='phone_icon'> <a href='https://www.linkedin.com/in/shivang-741b781aa/'><img className="hero__icon" src="./icons8-youtube.svg" alt="Shivang insta"></img></a></li>
                <li className='git_icon'><a href='https://github.com/shivang804'> <img className="hero__icon" src="./icons8-git.svg" alt="Shivang insta"></img></a></li>
                <li className='mail_icon'><a href='mailto:sharmashivang804@gmail.com'> <img className="hero__icon" src="./icons8-gmail.svg" alt="Shivang insta"></img></a></li>
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