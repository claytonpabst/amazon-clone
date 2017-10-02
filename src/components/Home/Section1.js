import React from 'react';

import './Home.css';


export default function Section1() {

    return (
        <div className='section1'>
            <div className='section1Left'>
                <div className='section1LeftContent'>
                    <h3>Meet the Next Generation of</h3>
                    <h3>Alexa-Enabled Devices</h3>
                    <h1>Introduction the all-new Echo, Echo Plus, and Echo Spot</h1>
                    <a>Learn More >></a>
                </div>
            </div>
            <div className='section1Right'>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/echo/launch-hero-feature._CB515784757_.png" alt=""/>
            </div>
        </div>
    )
}