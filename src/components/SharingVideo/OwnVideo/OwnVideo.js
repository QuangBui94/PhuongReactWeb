import React from 'react';

import VideoItem from '../../../assets/img/video-item.png';
import './OwnVideo.css';

const OwnVideo = () => (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
        <div className="item-block">
            <div className="row">
                <img src={VideoItem} className="col-12"/>
            </div>
            <div className="row">
                <div className="video-info col-12">
                    <div className="video-category">Design</div>
                    <div className="video-release">15/02/2019</div>
                </div>
            </div>
            <div className="row">
                <h6 className="sixth__heading col-12 mb-3">What is user experience design?</h6>
            </div>
            <div className="row">
                <p className="col-12">Getting a job in design nowaday is not easy, and pure graphic design role are getting less and less. How can yourself..</p>
            </div>
        </div> 
    </div>
)

export default OwnVideo;