import React from 'react';

import './Home.css';


export default function Header() {

    let headerSearchStyle = {
      borderLeft:'1px solid grey',
      height:'100%',
    }

    return (
        <header className='headerSection'>
          <div className='headerSectionLogo'>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/amazon_developer._CB288408811_.png"/>
          </div>
          <div className='headerSectionNav'>
            <a>Apps & Games</a>
            <a>Alexa</a>
            <a>AWS</a>
            <a>Services & APIs</a>
            <a>Devices</a>
            <a>Blog</a>
            <a>Docs</a>
            <a>Support</a>
          </div>
          <div className='headerSectionRight'>
            <a>Sign In</a>
            <a>English</a>
            <div style={headerSearchStyle}></div>
            <a>Search</a>
          </div>
        </header>
    )
}