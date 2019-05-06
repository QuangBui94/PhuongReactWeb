
import React from 'react';
import Aux from 'react-aux';

import OverviewPic from '../../assets/img/about-image.png';
import './Introduction.css';
import Button from '../../UI/Button/Button';

const Introduction = () => (
    <Aux>
        <div className="section Introduction">
            <div className="container">
                <div className="row">
                        <div className="overview-pic col-5"><img src={OverviewPic}></img></div>
                        <div className="overview-paragraph col-6 align-self-center ml-auto">
                            <div className="row">
                                <div className="row col-12">
                                    <div className="col-12">
                                        <h2 className="secondary__heading">Hello, I'm Jayden Nguyen</h2>
                                    </div>
                                    <div className="col-12">
                                        <p>- I am a Product Designer based in Helsinki, Finland. I love to work in a group to come up with idea and solution to a problem. I have a strong passion to solve big problem and test new idea by using the Design Sprint 2.0.</p> 
                                        <p>- But why is the Design Sprint? You may ask. </p>
                                        <p>- It helps companies to have a look into the future to see whether their customer will like the product/ideas or not without spending weeks or months planning and developing.</p>
                                    </div> 
                                </div>
      
                            </div>
                            <div className="row col-12">
                                <Button btnType="primary">See my work</Button>
                            </div>
                        </div> 
                </div>
            </div>
        </div>
    </Aux>
)

export default Introduction;