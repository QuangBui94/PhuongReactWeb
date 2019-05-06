import React from 'react';

import SharingCall from '../../assets/img/Sharing-call.png';
import SharingCover from '../../assets/img/Sharing-cover.png';
import Button from '../../UI/Button/Button';

const SharingOverview = () => (
    <div className="section SharingOverview">
        <div className="container">
            <div className="row">
                <div className="col-6 align-self-center">
                    <img src={SharingCall} />
                </div>
                <div className="col-6">
                    <img src={SharingCover} />
                </div>
                <div className="col-12">
                    <Button btnType="fifth">My inspiration</Button>
                </div>
            </div>
        </div>
    </div>
)

export default SharingOverview;