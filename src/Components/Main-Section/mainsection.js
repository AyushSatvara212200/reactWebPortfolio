import React from 'react';
import './mainsection.css'
import scrollDown from './Main-section-Images/down-arrow.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import reactIcon from './Main-section-Images/React-icon.png'

const mainsection = () => {
  return (
    <div id='home-design'>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>

      <div className='sqr1'></div>

      <div className="design">
        <div className='design-1'></div>
        <div className='design-2'></div>
        <div className='design-3'></div>
        <div className='design-4'></div>
        <div className="main">
          <p className='text'> Hi ! I'm AYUSH SATVARA</p>
          <p className='text-2'> A Front End developer <img id='react-icon' src={reactIcon} alt="" /></p>
          <p className='text-1'>A portfolio website made with react , practising UI / UX . Very passionate about the coding and javascript libraries... <br />Making websites and web apps , worked as an intern in a company .</p>
          <p className='text-3'>Want to know more !!</p>
          <AnchorLink href='#aboutme-div' id='scroll-div'>
            <p className='text-scroll'>SCROLL DOWN</p>
            <img id='scrolldown' src={scrollDown} alt="" />
          </AnchorLink>
        </div>
      </div>

      <div className='sqr2'></div>

    </div>
  )
}

export default mainsection