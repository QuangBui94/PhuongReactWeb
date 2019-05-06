import React from 'react';
import Aux from 'react-aux';

import LongCall from '../../assets/img/long-call.png';
import Button from '../../UI/Button/Button';
import './Journey.css';

const Journey = () => (
    <Aux>
        <div className="section Journey">
            <div className="container">
                <div className="row">
                    <h2 className="col-12 secondary__heading">My Journey</h2>
                </div>
                <div className="row">
                    <p className="col-12">Growing up in Vietnam for 19 years then in 2014, I came to finland to study university with the hope to learn something new. </p>
                </div>
                <div className="row">
                    <p className="col-12">In 2016, I was working as a freelance videographer, I came across a UX course online and I love it. 
                    From there, it had become my one and only passion. I started developing a taste for pixel perfect design and how to make an idea possible in this digital world by desiging and iterating.</p>
                </div>
                <br/>
                <div className="row">
                    <p className="col-12">My background as a film maker has helped me a lot to tell a compelling story of the product to attract the target audience. However, it is not enough, being a designer mean you have to be able to communicate with everyone in the team and understand their characteristic as well as their field of knowledge. Thus, I spend a majority of my time trying to build a meaningful relationship with others and improve my communication skill to have them working with me as a partner, side by side and together.</p>
                </div>
                <br/>
                <div className="row">
                    <p className="col-12">Today, I focus my energy on learning as much as possible to make every day count because: </p>
                </div>
                <div className="row justify-content-center mt-5 pt-3 mb-5 pb-3">
                    <img className="col-11 col-sm-10" src={LongCall}/>
                </div>
                <div className="row">
                    <p className="col-12">My journey to get here wasn’t so smooth, I failed a lot more than I won. Each time I fail, I get a lesson that I will never forget. Therefore, I want to share that lesson to everyone as well as giving my knowledge to those who can’t afford and are struggling in their design journey. I made a Youtube channel to talk about design problem and how people can learn to become a designer. I would wake up early in the morning and write something to share for my audience. Maybe you can also benefit from what I share. Have a look down here. </p>
                </div>
                <div className="row justify-content-center">
                    <Button btnType="primary">My sharing</Button>
                </div>
                <div className="row justify-content-center journey-end">
                    <p className="ending-paragraph col-6 text-center mt-5">That’s enough about me!</p>
                    <p className="ending-paragraph col-7 text-center">How about you? Tell me your stories!</p>
                    <span className="col-11 text-center emoji">👇</span>
                    <Button btnType="fourth">Let's have a talk</Button>
                </div>
            </div>
        </div>
    </Aux>
)

export default Journey;