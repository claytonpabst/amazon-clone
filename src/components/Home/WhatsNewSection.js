import React from 'react';
import './Home.css';

export default function WhatsNewSection(){
    return(
        <div className='whatsNewSection'>
            <section className='whatsNewSectionMainParent'>
                <div className='whatsNewSectionLeft'>
                    <div className='whatsNewSectionTitle'>What's New for Amazon Developers</div>
                    <div className='whatsNewSectionLeftContentContainer'>
                        <div className='whatsNewSectionLeftContent'>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/appstore/devportal/promos/Book-promo-carousel._CB504230721_.png" alt=""/>
                            <h3>Developer's Guide to The Amazon Appstore</h3>
                            <h1>Learn how to publish, promote, and make money with your app with our free 142-page book.</h1>
                        </div>
                        <div className='whatsNewSectionLeftContent'>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/appstore/devportal/promos/Quiztix-carousel._CB518800245_.png" alt=""/>
                            <h3>Case Study: QuizTix</h3>
                            <h1>Game developer QuizTix shares their motivations behind creating popular games.</h1>
                        </div>
                        <div className='whatsNewSectionLeftContent'>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/alexa/hero/SmartHome-Entertainment-Controls_whatsnew._CB504692600_.png" alt=""/>
                            <h3>New in Alexa Smart Home: Entertainment Capabilities</h3>
                            <h1>New Device Controls for TVs, AV, Receivers and IR Hubs.</h1>
                        </div>
                        <div className='whatsNewSectionLeftContent'>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/alexa/hero/GUI-SDK_editorial._CB505525073_.png" alt=""/>
                            <h3>Build Skills for Echo Show</h3>
                            <h1>check out the new Alexa Skills Kit features for display and video interfaces.</h1>
                        </div>
                    </div>
                </div>

                {/*---------------------*/}

                <div className='whatsNewSectionRight'>
                    <div className='whatsNewSectionTitle'>Get Started</div>
                    <a>Test your app's compatibility</a>
                    <a>Register for a free Amazon developer account</a>
                    <a>Publish your apps and games</a>
                    <a>Get started with the Alexa Skills Kit</a>
                    <a>Get started with Amazon Fire TV</a>
                    <a>Subscribe to the weekly blog summary</a>
                </div>
            </section>
        </div>
    )
}