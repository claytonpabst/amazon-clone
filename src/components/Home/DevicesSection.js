import React from 'react';
import './Home.css';

export default function DevicesSection(){
    return(
        <div className='DevicesSection'>
            <section className='repeatingOuterContainer'>
                <div className='repeatingContentContainer'>
                    <div className='repeatingContentTitle'>
                        Devices
                    </div>
                    <div className='repeatingContentSummary'>
                        For Fire OS, Android, and Alexa developers, there has never been a better time to publish to the Amazon Appstore. Amazon’s new 7” Fire tablet has become the fastest-selling tablet ever with millions sold since launch. Amazon's powerful and popular streaming media players help enable app and game developers to reach more customers in the living room. Amazon Echo topped 2015’s most wished-for and gifted item for Amazon.com customers. Learn more »
                    </div>
                    <div className='repeatingContentListItem'>
                        <ul>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/icon_fosandroid_80x80._CB298883947_.png" alt=""/>
                        </ul>
                        <ul>
                            <h3>Fire OS & Android</h3>
                            <h1>Fire OS is our Android-based operating system that powers Fire tablets and Amazon Fire TV devices. Learn more »</h1>
                        </ul>
                    </div>
                    <div className='repeatingContentListItem'>
                        <ul>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/icon_cpt_80x80._CB299518047_.png" alt=""/>
                        </ul>
                        <ul>
                            <h3>Cross-Platform Engines</h3>
                            <h1>Plugins and extensions make cross-platform development easier. Amazon offers plugins and extensions that work with some of the most popular cross-platform engines to extend our APIs and services to your apps. Learn more »</h1>
                        </ul>
                    </div>
                    <div className='repeatingContentListItem'>
                        <ul>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/icon_pcmac_80x80._CB299518046_.png" alt=""/>
                        </ul>
                        <ul>
                            <h3>PC & Mac</h3>
                            <h1>Distribute your PC and Mac applications to millions of new customers through two dedicated storefronts on Amazon.com - Digital Software and Games Store and Indie Games Store. It’s easy to get started. Learn more »</h1>
                        </ul>
                    </div>
                </div>
                <div className='repeatingImageContainer' style={{paddingTop:"80px"}}>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/L0_bknd_devices._CB299118606_.png" alt=""/>
                </div>
            </section>
        </div>
    )
}