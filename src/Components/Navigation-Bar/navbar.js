import React from 'react';
import './navbar.css'
import Logo from './Nav-Images/AS_logo.png';
import InstaIcon from './Nav-Images/insta-icon-1.png';
import LinkedIn from './Nav-Images/linkedin-icon-1.png';
import homeIcon from './Nav-Images/home-1.png';
import AboutIcon from './Nav-Images/about-icon-2.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const navbar = () => {
    return (
        <div id="navbar">
            <div className="b-name-1">
                <img className='b-logo' src={Logo} alt="logo" />
            </div>
            <div className="b-name-2">
                <AnchorLink href='#home-design'><img id='home-icon' src={homeIcon} alt="" /></AnchorLink>
                {/* <AnchorLink href="#aboutme-div"><img id='about-icon' src={AboutIcon} alt="" /></AnchorLink> */}
                <a href="https://www.instagram.com/ayusshh.mannbhavah/"><img id='insta-icon' src={InstaIcon} alt="insta-icon" /></a>
                <a href="https://www.linkedin.com/in/ayush-satvara-39ba66196/"><img id='linkedin-icon' src={LinkedIn} alt="insta-icon" /></a>
            </div>
        </div>
    )
}

export default navbar