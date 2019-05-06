import React from 'react';
import Aux from 'react-aux';

import './Contact.css';
import Button from '../../UI/Button/Button';
import InstaLogo from '../../assets/img/Insta.png';
import FacebookLogo from '../../assets/img/facebook.png';
import YoutubeLogo from '../../assets/img/youtube.png';
import LinkedInLogo from '../../assets/img/linkedin.png';

const Contact = () => (
    <Aux>
        <div className="Contact section">
            <div className="container text-center">
                <div className="row col-12 justify-content-center">
                    <h2 className="secondary__heading">Got a digital problem? Let's solve it together!</h2>
                </div>
                <div className="row col-12 justify-content-center mb-5">
                    <p className="col-12 row">
                        <div className="col-12">
                            <span className="text-block--1">You can fill in the form below or sent me an email to  </span> 
                            <span className="text-block--2"><a href="#" className="link">jayden.ng12@gmail.com</a></span>
                        </div> 
                        <div className="col-12 text-block--1">( You will hear back from me within 24 hours )</div>
                    </p>
                </div>
                <form className="form">
                    <div className="form-group row justify-content-center">
                        <input type="text" className="form-control col-10 col-sm-10 col-lg-6" placeholder="Name" required/>
                    </div>
                    <div className="form-group row justify-content-center">
                        <input type="email" className="form-control col-10 col-sm-10 col-lg-6" placeholder="Email" required/>
                    </div>
                    <div className="form-group row justify-content-center">
                        <input type="text" className="form-control col-10 col-sm-10 col-lg-6" placeholder="Phone number (optional)"/>
                    </div>
                    <div className="form-group justify-content-center row">
                        <textarea className="form-control col-10 col-sm-10 col-lg-6" rows="6" placeholder="Hello, I am looking for a designer to help me out with..."></textarea>
                    </div>
                    <Button btnType="fourth">Send now</Button>
                </form>
                <p className="ending-paragraph">That's it. Want to check a bit more about me? <br/><span className="emoji" style={{marginTop: '2rem', display: 'block'}}>👇</span></p>
                <Button btnType="primary">See my bio</Button>
                <footer className="footer">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-6 col-sm-5 col-md-4 col-lg-3 mb-1">
                                <ul className="list-unstyled row">
                                    <li className="col-3"><a href="https://www.instagram.com/j4jayden/"><img src={InstaLogo} /></a></li>
                                    <li className="col-3"><a href="https://www.facebook.com/nguyenhoang.phuong.56"><img src={FacebookLogo} /></a></li>
                                    <li className="col-3"><a href="https://www.youtube.com/channel/UC9pSfWSzrgQVHl9MumywezQ"><img src={YoutubeLogo} /></a></li>
                                    <li className="col-3"><a href="https://www.linkedin.com/in/phuongnguyen1205/"><img src={LinkedInLogo} /></a></li>
                                </ul>
                            </div>
                            <div className="col-10 col-md-4 offset-lg-1 col-lg-4 mb-1"><a href="#" className="link">Jayden's resume</a></div>
                            <div className=" col-10 col-md-4 mb-1 link">+358 465 765 271</div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>  
    </Aux>
)

export default Contact;