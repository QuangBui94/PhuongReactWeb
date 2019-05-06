import React from 'react';
import Aux from 'react-aux';
import Button from '../../../UI/Button/Button';

import './WorkItem.css';

const WorkItem = (props) => (
    <Aux>
        <div className="col-12 col-sm-6 row">
            <div className="col-12 col-xl-11">
                <img src={props.imgLink} className="Work-img"/>
            </div>
            <div className="col-12">
                <h3 className="third__heading Work-heading">{props.heading}</h3>
            </div>
            <div className="col-12 col-xl-11"><p>{props.paragraph}</p></div>
            <div className="col-12"><Button btnType="second">{props.btnName}</Button></div>
        </div>
    </Aux>
)

export default WorkItem;