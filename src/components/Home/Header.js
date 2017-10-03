import React from 'react';
import DropMenuAppsAndGames from './DropMenuAppsAndGames.js';

import './Home.css';


export default function Header() {

    let headerSearchStyle = {
      borderLeft:'1px solid grey',
      height:'100%',
    }

    return (
        <header className='headerSection'>
          <section className='headerSectionWrapper'>
            <div className='headerSectionLogo'>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/amazon_developer._CB288408811_.png"/>
            </div>
            <div className='headerSectionNav'>
              <tr><a>Apps & Games
                <DropMenuAppsAndGames/>
              </a></tr>
              <tr><a>Alexa
                <DropMenuAppsAndGames/>
              </a></tr>
              <tr><a>AWS</a></tr>
              <tr><a>Services & APIs
                <DropMenuAppsAndGames/>
              </a></tr>
              <tr><a>Devices
                <DropMenuAppsAndGames/>
              </a></tr>
              <tr><a>Blog</a></tr>
              <tr><a>Docs</a></tr>
              <tr><a>Support</a></tr>
            </div>
            <div className='headerSectionRight'>
              <a>Sign In</a>
              <a>English</a>
              <div style={headerSearchStyle}></div>
              <a>Search</a>
            </div>
          </section>
        </header>
    )
}