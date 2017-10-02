import React, { Component } from 'react';
import Header from './Header.js';
import HeaderPageDrop from './HeaderPageDrop.js';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import WhatsNewSection from './WhatsNewSection.js';

import './Home.css';


class Home extends Component {


  render() {

    return (
      <section className="home">
        <Header/>
        <HeaderPageDrop/>
        <Section1/>
        <Section2/>
        <WhatsNewSection/>
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