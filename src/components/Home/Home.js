import React, { Component } from 'react';
import Header from './Header.js';
import HeaderPageDrop from './HeaderPageDrop.js';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import WhatsNewSection from './WhatsNewSection.js';
import AppsAndGamesSection from './AppsAndGamesSection.js';
import AlexaSection from './AlexaSection.js';
import ServicesAndAPIsSection from './ServicesAndAPIsSection.js';
import DevicesSection from './DevicesSection.js';
import SocialMediaStrip from './SocialMediaStrip.js';
import FooterSection from './FooterSection.js';
import DropMenuAppsAndGames from './DropMenuAppsAndGames';

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
        <ServicesAndAPIsSection/>
        <DevicesSection/>
        <SocialMediaStrip/>
        <FooterSection/>
        <div className='allRightsReserved'>
          <h1>© 2010-2017, Amazon.com, Inc. or its affiliates. All Rights Reserved.</h1>
        </div>
      </section>
    );
  }
}


export default Home;