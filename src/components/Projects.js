import React from 'react';
import '../styles/Projects.css'

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="about__content">
          <div className="about__content-main">
            <div className="about__content-details">
              <p className="about__content-details-para">
              <h3 className="project1">Portfolio Website</h3>
              <img src='./1.png' alt= 'projectimage' className='portfolio_image'></img>
              </p>
              <h3 className="project2">FreeBookPost an E-commerce Platform</h3>
              <img src='./21.png' alt= 'projectimage' className='portfolio_image'></img>

            </div>
        
          </div>
          <div className="about__content-skills" id="">
            <div className="project_skills">
            <p className='description1'>A simple portfolio website about me.</p>
            <a href='https://github.com/shivang804/shivang-portfolio' className="btn-resume">ProjectLink</a>
            <p className='description2'>An online books downloading platform.</p>
            <a href='https://github.com/shivang804/Shivang_freebookpost'className="btn-resume">ProjectLink</a>
            </div>
          </div>
        </div>
    
        </section>
    );
};

export default Projects;
