import React from 'react';
import '../styles/About.css'

const About = () => {
    return (
        <>
        <section id="about" className="about">
            <h2>About Me</h2>
            <p>Hello! I'm SHIVANG, a Software Devloper. I have a passion for Website Development. I enjoy working on projects that challenge me and allow me to grow my skillset.</p>
            <p>In my free time, I love listening music. I'm constantly learning new things and looking for opportunities to apply my skills in meaningful ways.</p>
        
        </section>
        <section id="skills" className="skills">
            <h2>My Skills</h2>
            <ul className="skills-list">
                <li>JavaScript</li>
                <li>React.js</li>
                <li>HTML & CSS</li>
                <li>Git & GitHub</li>
                <li>Responsive Design</li>
                <li>Node.js</li>
            </ul>
        </section>

        
        </>
    );
};

export default About;
