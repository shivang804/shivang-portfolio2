import React from 'react';
import '../styles/Hero.css'

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1 className='heading-primary'>Hi, I'm SHIVANG</h1>
                <p className='text-primary'>A passionate Software Devloper with a passion of building web applications</p>
                <a href="#projects" className="btn-hero">View My Work</a>
            </div>
        </section>
    );
};

export default Hero;
