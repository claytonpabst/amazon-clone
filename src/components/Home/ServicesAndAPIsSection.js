import React from 'react';
import './Home.css';

export default function ServicesAndAPIsSection(){
    return(
        <div className='servicesAndAPIsSection'>
            <section className='repeatingOuterContainer'>
                <div className='repeatingContentContainer'>
                    <div className='repeatingContentTitle'>
                        Services & APIs
                    </div>
                    <div className='repeatingContentSummary'>
                        Amazon provides Fire OS, Android, and iOS APIs that help you earn more money and create better experiences for your users. Generate more revenue from your apps and games using our unique monetization services, only available on Amazon. Whatever your platform, Amazon has the solutions for you to earn more, engage more customers, and optimize your apps. Learn more »
                    </div>
                    <div className='servicesAndAPIsListItemsContainer'>
                        <div className='servicesAndAPIsListItem'>
                            <ul>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/icon_earn_80x80._CB298883941_.png" alt=""/>
                            </ul>
                            <ul>
                                <h3>Earn</h3>
                                <a>Merch by Amazon</a><br/>
                                <a>In-App Purchasing</a><br/>
                                <a>Mobile Ads</a><br/>
                                <a>Mobile Associates</a><br/>
                                <a>Amazon Payments</a><br/>
                            </ul>
                        </div>
                        <div className='servicesAndAPIsListItem'>
                            <ul>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/icon_engage_80x80._CB298883947_.png" alt=""/>
                            </ul>
                            <ul>
                                <h3>Engage</h3>
                                <a>Device Messaging</a><br/>
                                <a>Game Circle</a><br/>
                                <a>Login with Amazon</a><br/>
                                <a>Advertise Your App</a><br/>
                                <a>Developer Promotions</a><br/>
                                <a>Console</a><br/>
                                <a>Product Advertising</a><br/>
                            </ul>
                        </div>
                        <div className='servicesAndAPIsListItem'>
                            <ul>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/icon_build_80x80._CB298883946_.png" alt=""/>
                            </ul>
                            <ul>
                                <h3>Build</h3>
                                <a>Amazon Drive</a><br/>
                                <a>Amazon Fling</a><br/>
                                <a>Amazon Maps</a><br/>
                                <a>Developer Publishing API</a><br/>
                                <a>Mechanical Turk</a><br/>
                                <a>Marketplace</a><br/>
                            </ul>
                        </div>
                        <div className='servicesAndAPIsListItem'>
                            <ul>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/icon_test_80x80._CB298883941_.png" alt=""/>
                            </ul>
                            <ul>
                                <h3>Test</h3>
                                <a>App Testing Service</a><br/>
                                <a>Live App Testing</a><br/>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='repeatingImageContainer' style={{paddingTop:"100px"}}>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/L0_bknd_servicesapis._CB299516725_.png" alt=""/>
                </div>
            </section>
        </div>
    )
}