import React from 'react';
import Aux from 'react-aux';

import './Sharing.css';
import SharingItem from './SharingItem/SharingItem';
import MLogo from '../../assets/img/M.png';
import YLogo from '../../assets/img/Y.png';

const Sharing = () => (
    <Aux>
        <div className="section Sharing">
            <div className="container">
                <div className="row">
                    <h2 className="secondary__heading col-12">My Sharing.</h2>
                </div>
                <div className="row">
                    <p className="col-12 col-sm-6">I love sharing my knowledge to everyone and bringing value to the design communities.</p>
                </div>
                <div className="row SharingBlock justify-content-center">
                        <SharingItem 
                            fourthHeading="I AM ON MEDIUM"
                            thirdHeading="Read more about my
                            Design Findings"
                            img={MLogo}/>
                        <SharingItem 
                            fourthHeading="I AM ON Youtube"
                            thirdHeading="Guide to become an 
                            Product Designer"
                            img={YLogo}/>
                        
                </div>
            </div>   
        </div>
    </Aux>
)

export default Sharing;