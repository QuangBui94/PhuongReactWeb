import React from 'react';
import Aux from 'react-aux';
import WorkItem from './WorkItem/WorkItem';

import HostMyPetPhoto from '../../assets/img/HostMyPet.jpg';
import VietTopPhoto from '../../assets/img/VietTop.jpg';
import SabSoTradingPhoto from '../../assets/img/SabsoTrading.jpg';
import RawPhoto from '../../assets/img/Raw.jpg';
import './Work.css';

const Work = () => {
    let paragraph = "In my free time, I like to be creative with design. Below are the projects I’ve transformed from concept to working product";
    let btnName = "See case study";

    return (
        <Aux>
            <div className="section Work">
                <div className="container">
                    <div className="row">
                        <h2 className="secondary__heading col-12">My Works.</h2>
                    </div>
                    <div className="row">
                        <p className="col-12 col-sm-6">In my free time, I like to be creative with design. Below are the projects I’ve transformed from concept to working product</p>
                    </div>
                    <div className="row">
                        <WorkItem 
                            imgLink={HostMyPetPhoto}
                            heading="1. Host My Pet"
                            paragraph={paragraph}
                            btnName={btnName}/>     
                        <WorkItem 
                            imgLink={VietTopPhoto}
                            heading="2. Viet's Top Restaurant"
                            paragraph={paragraph}
                            btnName={btnName}/>
                        <WorkItem 
                            imgLink={SabSoTradingPhoto}
                            heading="3. SabsoTrading"
                            paragraph={paragraph}
                            btnName={btnName}/>     
                        <WorkItem 
                            imgLink={RawPhoto}
                            heading="4. RAW - COLDPRESS JUICER"
                            paragraph={paragraph}
                            btnName={btnName}/> 
                    </div>
                </div>     
            </div>
        </Aux>
    )
}
    
export default Work;