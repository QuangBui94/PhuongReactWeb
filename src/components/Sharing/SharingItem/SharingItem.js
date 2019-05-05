import React from 'react';
import Aux from 'react-aux';

import Button from '../../../UI/Button/Button';
import './SharingItem.css';

const SharingItem = (props) => (
    <Aux>
        <div className="container col-12 col-xl-5 SharingItem">
            <div className="row">
                <h4 className="fourth__heading col-12">{props.fourthHeading}</h4>
            </div>
            <div className="row">
                <h4 className="third__heading col-8 col-sm-10 col-md-10">{props.thirdHeading}</h4>
            </div>
            <div className="row">
                <div className="col-6"><Button btnType="primary">Read my blog</Button></div>
                <div className="col-6 row justify-content-end"><img src={props.img}></img></div>
            </div>
        </div>
    </Aux>
)

export default SharingItem;