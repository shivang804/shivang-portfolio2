import React from 'react';
import '../styles/Hero.css'
import {FaGithub, FaHome,  FaLinkedinIn, FaMailBulk, FaPhone} from 'react-icons/fa'

const Hero = () => {
    return (
        <section id="hero" className="hero">
             <ul className='hero_icons'>
                <li><FaHome size={30} /></li>
                <li><a href='https://www.linkedin.com/in/shivang-741b781aa/'><FaLinkedinIn size={30} /></a></li>
                <li><FaPhone size={30} /></li>
                <li><a href='https://github.com/shivang804'><FaGithub size={30} /></a></li>
                <li><a href='mailto:sharmashivang804@gmail.com'><FaMailBulk size={30} /></a></li>
            </ul>  
            <div className="hero-content">
                <h1 className='heading-primary'>Hi, I'm SHIVANG</h1>
                <p className='text-primary'>A passionate Software Devloper with a passion of building web applications</p>
                <a href="#projects" className="btn-hero">View My Work</a>
            </div>
           
        </section>
    );
};

export default Hero;
 {/*
<div>
<FaHome size={30} style={{marginLeft:'75rem'}}/>
<a href='https://www.linkedin.com/in/shivang-741b781aa/'><FaLinkedinIn size={30} style={{marginLeft:'75rem'}}/></a>
</div>
<div className='phone'>
<FaPhone size={30} style={{marginLeft:'75rem'}}/>
<a href='https://github.com/shivang804'><FaGithub size={30} style={{marginLeft:'75rem'}}/></a>
</div>
<div className='mail'>
<a href='mailto:sharmashivang804@gmail.com'><FaMailBulk size={30} style={{marginLeft:'75rem'}}/></a>
</div>*/}