import React from 'react';
import './Home.css';

export default function AlexaSection(){

    let repeatingContentContainerStyle = {
        paddingLeft:"150px",
        paddingRight:"0px"
    }

    return(
        <div className='alexaSection'>
            <section className='repeatingOuterContainer'>
                <div className='repeatingImageContainer' style={{paddingTop:"50px"}}>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/L0_bknd_alexa._CB299516724_.png" alt=""/>
                </div>
                <div className='repeatingContentContainer' style={repeatingContentContainerStyle}>
                    <div className='repeatingContentTitle'>
                        Alexa
                    </div>
                    <div className='repeatingContentSummary'>
                        Build voice experiences for your services and devices. Alexa, the voice service that powers Echo, provides a set of built-in abilities, or skills, that enable customers to interact with devices in a more intuitive way using voice. With the Alexa Skills Kit, you can build and add your own skills to Alexa. Learn more »
                    </div>
                    <div className='repeatingContentListItem'>
                        <ul>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-icon_80x80._CB509274287_.png" alt=""/>
                        </ul>
                        <ul>
                            <h3>Fire OS & Android</h3>
                            <h1>Fire OS is our Android-based operating system that powers Fire tablets and Amazon Fire TV devices. Learn more »</h1>
                        </ul>
                    </div>
                    <div className='repeatingContentListItem'>
                        <ul>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-icon_80x80._CB509274287_.png" alt=""/>
                        </ul>
                        <ul>
                            <h3>Cross-Platform Engines</h3>
                            <h1>Plugins and extensions make cross-platform development easier. Amazon offers plugins and extensions that work with some of the most popular cross-platform engines to extend our APIs and services to your apps. Learn more »</h1>
                        </ul>
                    </div>
                    <div className='repeatingContentListItem'>
                        <ul>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-icon_80x80._CB509274287_.png" alt=""/>
                        </ul>
                        <ul>
                            <h3>PC & Mac</h3>
                            <h1>Distribute your PC and Mac applications to millions of new customers through two dedicated storefronts on Amazon.com - Digital Software and Games Store and Indie Games Store. It’s easy to get started. Learn more »</h1>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}