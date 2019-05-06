import React from 'react';

import YoutubePhoto from '../../../assets/img/youtube-item.png';
import './YoutubeVideo.css';

const YoutubeVideo = () => (
    <div className="col-12 col-sm-6 col-md-4 mb-5">
        <div className="item-block">
            <div className="row">
                <img src={YoutubePhoto} className="col-12"/>
            </div>
            <div className="row">
                <h6 className="col-12 video-author">THE FUTUR by CHRIS DO</h6>
            </div>
            <div className="row">
                <p className="col-12">Getting a job in design nowaday is not easy, and pure graphic design role are getting less and less. How can yourself.</p>
            </div>
        </div>     
    </div>
)

export default YoutubeVideo;