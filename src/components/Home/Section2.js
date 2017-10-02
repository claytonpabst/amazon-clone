import React from 'react';
import './Home.css';

export default function Section2(){
    return (
        <div className='section2'>
            <section className='section2ContentContainer'>
                <div className='section2Content'>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/subhero_01_appsgames._CB289996544_.png" alt=""/>
                    <h3>Apps & Games</h3>
                    <h1>Develop and publish for mobile devices and Amazon Fire TV</h1>
                </div>
                <div className='section2Content'>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/alexa/dev-portal_alexa-logo._CB509266805_.png" alt=""/>
                    <h3>Alexa</h3>
                    <h1>Build voice experiences for your services and devices</h1>
                </div>
                <div className='section2Content'>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/subhero_03_aws_new1._CB515864688_.png" alt=""/>
                    <h3>AWS</h3>
                    <h1>Reliable, scalable, and inexpensive cloud computing services</h1>
                </div>
                <div className='section2Content'>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/subhero_04_servicesapis._CB289006158_.png" alt=""/>
                    <h3>Service & APIs</h3>
                    <h1>Create better experiences to improve reach and monetization</h1>
                </div>
                <div className='section2Content'>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/dex/subhero_05_devices._CB289996545_.png" alt=""/>
                    <h3>Devices</h3>
                    <h1>Reach millions of users on Amazon's best-selling devices</h1>
                </div>
            </section>
        </div>
    )
}