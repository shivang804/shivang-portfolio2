import React from 'react';
import '../styles/Footer.scss'
//import {FaGithub, FaHome,  FaLinkedinIn, FaMailBulk, FaPhone} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
            <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shivang-741b781aa/">
                <img className="main-footer__icon" src="./linkedin-ico.png" alt="ShivangLinkedin Profile"></img>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/shivang804">
                <img className="main-footer__icon" src="./github-ico.png" alt="Shivang Github Profile"></img>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/shivang804">
                <img className="main-footer__icon" src="./twitter-ico.png" alt="Shivang Twitter Profile"></img>
              </a>

              <a target="_blank" rel="noreferrer" href="https://github.com/shivang804">
                <img className="main-footer__icon" src="./insta-ico.png" alt="Shivang insta"></img>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/shivang804">
                <img className="main-footer__icon main-footer__icon--mr-none" src="./yt-ico.png" alt="Shivang yt"></img>
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h2 className="heading heading-sm text-lt">Shivang</h2>
            <p className="main-footer__short-desc">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
        </div>


        <div className="main-footer__lower">
          © Copyright. Made by
          <a rel="noreferrer" target="_blank" href="#hero"><h3 className='footer_name'>SHIVANG</h3></a>
        </div>
      </div>
    </footer>
    </>
    );
};

export default Footer;


