import React from 'react';

import VideoCover from '../../assets/img/Sharing-video.png';
import Ellipse from '../../assets/img/Ellipse.png';
import Vector from '../../assets/img/Vector.png';

import './SharingVideo.css';
import OwnVideo from './OwnVideo/OwnVideo';
import Button from '../../UI/Button/Button';

const SharingVideo = () => (
    <div className="section SharingVideo">
        <div className="container">
            <div className="row">
                <h2 className="col-12 secondary__heading">My videos</h2>
            </div>
            <div className="row">
                <p className="col-12">Every week, I put out one video on what I learnt about Design, tech and strategy.</p>
            </div>
            <div className="row position-relative mt-5 mb-4">
                <img src={VideoCover} className="col-12"/>
                <div className="play-button">
                    <img src={Ellipse}/>   
                </div>  
                <div className="play-button">
                    <img src={Vector}/>  
                </div>  
            </div>
            <div className="row">
                <h5 className="fifth__heading col-12">RECENT POSTS</h5>
            </div>
            <div className="row justify-content-start">
                <OwnVideo />
                <OwnVideo />
                <OwnVideo />
                <OwnVideo />
                <OwnVideo />
                <OwnVideo />
                <OwnVideo />
                <OwnVideo />
            </div>
            <div className="text-center">
                <Button btnType="fourth">see all videos</Button>
            </div>
        </div>
    </div>
)

export default SharingVideo;