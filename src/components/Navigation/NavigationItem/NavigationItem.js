import React from 'react';

import './NavigationItem.css';

const NavigationItem = (props) => (
    <div>
        <li className="nav-item"><a className="nav-link" href="#">{props.linkName}</a></li>
    </div>
)

export default NavigationItem;