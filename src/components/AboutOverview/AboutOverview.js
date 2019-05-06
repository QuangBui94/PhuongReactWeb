import React from 'react';

import ShortCall from '../../assets/img/Short-call.png';
import AboutHero from '../../assets/img/about-hero.png';
import './AboutOverview.css';

const Overview = () => (
    <div className="section overview">
        <div className="container">
            <div className="row">
                <div className="short-call col-12 col-sm-5 align-self-center"><img className="mb-5 short-call" src={ShortCall}></img></div>
                <div className="about-hero col-12 col-sm-6 ml-auto"><img className="aboutHero" src={AboutHero}></img></div>
            </div>                     
        </div>
    </div>
)

export default Overview;