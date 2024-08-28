import React from 'react';
import '../styles/About.css'

const About = () => {
    return (
        <>
        <section id="about" className="about">
           
       
        <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span>
          <span class="heading-sec__sub">
          Hello! I'm SHIVANG, a Software Devloper. I have a passion for Website Development. I enjoy working on projects that challenge me and allow me to grow my skillset.
          In my free time, I love listening music. I'm constantly learning new things and looking for opportunities to apply my skills in meaningful ways.
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                I'm a <strong>Frontend Focused Web Developer</strong> building
                and managing the Front-end of Websites and Web Applications that
                leads to the success of the overall product. Check out some of
                my work in the <strong>Projects</strong> section.
              </p>
              <p className="about__content-details-para">
                I also like sharing content related to the stuff that I have
                learned over the years in <strong>Web Development</strong> so it
                can help other people of the Dev Community. Feel free to Connect
                or Follow me on my &nbsp;
                <a href='https://www.linkedin.com/in/shivang-741b781aa/'>Linkedin</a>
                &nbsp; and &nbsp;
                <a href='https://github.com/shivang804'>Github</a> &nbsp;
                where I post useful content related to Web Development and
                Programming
              </p>
              <p className="about__content-details-para">
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to
                <strong>contact</strong> me.
              </p>
            </div>
            <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr">Contact</a>
          </div>
          <div className="about__content-skills" id="">
            <h3 className="about__content-title" >My Skills</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">ReactJs</div>
              <div className="skills__skill">JAVA</div>
              <div className="skills__skill">OOPS</div>
            </div>
          </div>
        </div>
      </div>
      </section>
        
        </>
    );
};

export default About;