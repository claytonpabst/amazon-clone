import React from 'react';
import './Home.css';

export default function AppsAndGamesSection(){
    return(
        <div className='appsAndGamesSection'>
            <section className='repeatingOuterContainer'>
                <div className='repeatingContentContainer'>
                    <div className='repeatingContentTitle'>
                        Apps & Games
                    </div>
                    <div className='repeatingContentSummary'>
                        The Amazon Appstore allows developers to distribute and sell their Android and HTML5 web apps to millions of customers in 236 countries and territories around the world through the Amazon device ecosystem. The Amazon Mobile App SDK gives developers access to a range of APIs and services to earn more revenue, engage audiences, and manage apps. Learn more »
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
                    <div className='repeatingContentListItem'>
                        <ul>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/icon_ios_80x80._CB294112938_.png" alt=""/>
                        </ul>
                        <ul>
                            <h3>iOS</h3>
                            <h1>Amazon offers services and APIs to help you enhance your iOS apps. With Amazon Drive, Login with Amazon, Amazon Mobile Ads Network, and A/B Testing you can build, earn, and test engaging apps experiences. Learn more »</h1>
                        </ul>
                    </div>
                </div>
                <div className='repeatingImageContainer'>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/L0_bknd_appsgames._CB299118604_.png" alt=""/>
                </div>
            </section>
        </div>
    )
}