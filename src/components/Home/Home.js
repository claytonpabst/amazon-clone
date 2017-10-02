import React, { Component } from 'react';
import Header from './Header.js';
import HeaderPageDrop from './HeaderPageDrop.js';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import WhatsNewSection from './WhatsNewSection.js';
import AppsAndGamesSection from './AppsAndGamesSection.js';
import AlexaSection from './AlexaSection.js';
import DevicesSection from './DevicesSection.js';

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
        <AppsAndGamesSection/>
        <AlexaSection/>
        <div className='servicesAndAPIsSection'>Services and APIs</div>
        <DevicesSection/>
        <div className='socialMediaStrip'>Social Media</div>
        <div className='footerSection'>I am a footer</div>
        <div className='allRightsReserved'>All Rights Reserved</div>
      </section>
    );
  }
}


export default Home;