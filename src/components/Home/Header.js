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
            <div className='headerSectionHamNav'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" alt=""/>
            </div>
            <div className='headerSectionLogo'>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/amazon_developer._CB288408811_.png" alt=""/>
            </div>
            <div className='headerSectionNav'>
              <span><a>Apps & Games
                <DropMenuAppsAndGames/>
              </a></span>
              <span><a>Alexa
                <DropMenuAppsAndGames/>
              </a></span>
              <span><a>AWS</a></span>
              <span><a>Services & APIs
                <DropMenuAppsAndGames/>
              </a></span>
              <span><a>Devices
                <DropMenuAppsAndGames/>
              </a></span>
              <span><a>Blog</a></span>
              <span><a>Docs</a></span>
              <span><a>Support</a></span>
            </div>
            <div className='headerSectionRight'>
              <a>Sign In</a>
              <a className='headerLanguageSelect'>English</a>
              <div style={headerSearchStyle}></div>
              <a>Search</a>
            </div>
          </section>
        </header>
    )
}