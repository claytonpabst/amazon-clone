import React, { Component } from 'react';

import './Home.css';


class Home extends Component {


  render() {

    let headerSearchStyle = {
      borderLeft:'1px solid grey',
      height:'100%',
    }

    return (
      <section className="home">
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
        <div className='section1'>Section 1</div>
        <div className='section2'>Section 2</div>
        <div className='whatsNewSection'>What's New</div>
        <div className='appsAndGamesSection'>Apps and Games</div>
        <div className='alexaSection'>Alexa Yo!</div>
        <div className='servicesAndAPIsSection'>Services and APIs</div>
        <div className='devicesSection'>Devices</div>
        <div className='socialMediaStrip'>Social Media</div>
        <div className='footerSection'>I am a footer</div>
        <div className='allRightsReserved'>All Rights Reserved</div>
      </section>
    );
  }
}


export default Home;