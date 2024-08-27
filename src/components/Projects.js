import React from 'react';
import '../styles/Projects.css'

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project">
                <h3>Portfolio Website</h3>
                <img src='./1.png' alt= 'projectimage' className='portfolio_image'></img>
                <p>A simple portfolio website about me.</p>
            </div>
            <div className="project">
                <h3>FreeBookPost an E-commerce Platform</h3>
                <img src='./21.png' alt= 'projectimage' className='portfolio_image'></img>
                <p>An online books downloading platform.</p>
            </div>
        </section>
    );
};

export default Projects;
