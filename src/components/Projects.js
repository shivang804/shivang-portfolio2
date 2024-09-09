import React from 'react';
import '../styles/Projects.scss'

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>PROJECTS</h2>
            <p className="after_contact">
            Some of my project which I made during my Engineering.
          </p>
            <div className="project__content">
          <div className="about__content-main">
            <div className="about__content-details">
              <p className="about__content-details-para">
              <div className='project_background1'></div>
              <img src='./1.jpg' alt= 'projectimage' className='project_image1'></img>
              </p>
             <img src='./2.jpg' alt= 'projectimage' className='project_image2'></img>
              </div>
        
          </div>
          <div className="about__content-skills" id="">
            <div className="project_skills">
            <h3 class="project__content-title1">Portfolio Website</h3>
            <p className='description1'>A simple portfolio website about me.</p>
            <a href='https://github.com/shivang804/shivang-portfolio' className="btn-project">ProjectLink</a>
            <h3 class="project__content-title2">FreeBookPost</h3>
            <p className='description2'>An online books downloading platform.</p>
            <a href='https://github.com/shivang804/Shivang_freebookpost'className="btn-project">ProjectLink</a>
            </div>
          </div>
        </div>
    
        </section>
    );
};

export default Projects;
