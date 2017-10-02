import React, { Component } from 'react';
import Header from './Header.js';
import Section1 from './Section1.js';

import './Home.css';


class Home extends Component {


  render() {

    return (
      <section className="home">
        <Header/>
        <Section1/>
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