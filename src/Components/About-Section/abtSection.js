import React from 'react';
import './abtSection.css';
import codingImg from './AboutSection-Images/coding.png'

const abtSection = () => {
    return (
        <div id='aboutme-div'>

            <div id="texts">
                <div id='txt-4-1'>
                    <h3>Business Website</h3>
                    <p>
                        You are a recognized company or a growing one, and want everyone to know about you? Having your own website is a suitable choice for your business. You can promote your products and services, all the time, without resorting to the media.
                    </p>
                </div>
                <div id='txt-4-2'>
                    <h3>Maintenance & update</h3>
                    <p>
                        Having a website means maintenance. You'll need to be sure that your site is secure, backed up and up to date. Never worry about if your plugins are up to date, your website has been backed up or your site will be hacked.
                    </p>
                </div>
                <div id='txt-4-3'>
                    <h3>Personal Website</h3>
                    <p>
                        You have skills, hobbies, passions and want others to know about them? Are social networks not enough? Take your own blog or web page.
                    </p>
                </div>
                <div id='txt-4-4'>
                    <h3>E-Commerce</h3>
                    <p>
                        Want to sell products or services online? Choosing an e-commerce website is the fastest way.
                    </p>
                </div>
            </div>
            <div id='aboutme'>
                <img src={codingImg} alt="" />
            </div>
        </div>
    )
}

export default abtSection