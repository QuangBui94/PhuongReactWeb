import React from 'react';
import YoutubeVideo from './YoutubeVideo/YoutubeVideo';
import Book from '../Book/Book';
import Button from '../../UI/Button/Button';

import './Inspiration.css';
import MailPhoto from '../../assets/img/mail-icon.png';

const Inspiration = () => (
    <div className="section">
        <div className="container">
            <div className="row">
                <h2 className="secondary__heading col-12">My Inspiration</h2>
            </div>
            <div className="row mb-5">
                <p className="col-12">I would love to share all the resources that has helped me develop as a person and a designer.</p>
            </div>
            <div className="row">
                <h5 className="col-12 fifth__heading">#YOUTUBE CHANNEL</h5>
            </div>
            <div className="row">
                <YoutubeVideo />
                <YoutubeVideo />
                <YoutubeVideo />
                <YoutubeVideo />
                <YoutubeVideo />
                <YoutubeVideo />
            </div>
            <div className="row">
                <h5 className="col-12 fifth__heading">#BOOKS THAT I READ</h5>
            </div>
            <div className="row">
                <Book />
                <Book />
                <Book />
                <Book />
            </div>
            <div className="text-center">
                <Button btnType="fourth">see all books</Button>
            </div>
            <div className="subscribe">
                <div className="text-center">
                    <p className="ending-paragraph mt-5 pt-5">Like what you see?</p>
                    <p className="ending-paragraph mb-5">I still have a lot more to share with you!</p>
                </div>
                <div className="subsribe-form">
                    <div className="section">
                        <div className="row justify-content-center">
                            <p className="col-12" style={{fontSize: '2rem'}}><span style={{fontWeight: 'bold'}}>Choose what you want to see/learn</span> and subscribe to my email list to get lesson every week.</p>
                        </div>
                        <div className="row align-items-center justify-content-around">
                            <ul className="row list-unstyled col-6 ml-2" style={{fontFamily: 'Bodoni 72'}}>
                                <li className="col-12 mb-1">- Getting started with Design</li>
                                <li className="col-12 mb-1">- My weekly lesson learned</li>
                                <li className="col-12 mb-1">- Step by step to get a job in design</li>
                                <li className="col-12 mb-1">- How to be more confident</li>
                                <li className="col-12 mb-1">- Video making essential</li>
                            </ul>
                            <div className="col-4">
                                <img src={MailPhoto} />
                            </div>
                            <div className="col-12">
                                <p style={{fontWeight: 'bold', fontSize: '2rem'}} className="mb-4">Enter your email below to Subscribe: </p>
                            </div>
                            <form className="col-8 mr-auto">
                                <input type="email" className="form-control" placeholder="Your email here"/>
                                <select className="custom-select">
                                    <option selected>Choose your topic</option>
                                </select>
                            </form>
                            <div className="col-12">
                                <Button btnType="fourth">Subscribe</Button>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Inspiration;