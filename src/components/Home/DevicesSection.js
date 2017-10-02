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
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/icon_echo_80x80._CB298883946_.png" alt=""/>
                        </ul>
                        <ul>
                            <h3>Amazon Echo</h3>
                            <h1>Amazon Echo is a new category of device designed around your voice – it is hands-free and always on. Alexa, the voice service that powers Echo, provides skills that enable customers to interact with devices using voice. Learn more »</h1>
                        </ul>
                    </div>
                    <div className='repeatingContentListItem'>
                        <ul>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/icon_firetv_80x80._CB298883947_.png" alt=""/>
                        </ul>
                        <ul>
                            <h3>Amazon Fire TV</h3>
                            <h1>Amazon’s powerful and popular streaming media players, Amazon Fire TV and Fire TV Stick, help enable app and game developers to reach more customers in the living room. To get started, you can build with Android or use HTML5. Learn more »</h1>
                        </ul>
                    </div>
                    <div className='repeatingContentListItem'>
                        <ul>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/icon_firetablet_80x80._CB298883946_.png" alt=""/>
                        </ul>
                        <ul>
                            <h3>Fire Tablets</h3>
                            <h1>The all-new 7" Fire tablet was the #1 best-selling product across Amazon.com this holiday. Now is the time to get your apps and games published in the Amazon Appstore and available to the millions of new Fire tablet customers. Learn more »</h1>
                        </ul>
                    </div>
                </div>
                <div className='repeatingImageContainer' style={{paddingTop:"150px"}}>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/L0_bknd_devices._CB299118606_.png" alt=""/>
                </div>
            </section>
        </div>
    )
}