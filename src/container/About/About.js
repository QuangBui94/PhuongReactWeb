import React, { Component } from 'react';
import Aux from 'react-aux';

import Introduction from '../../components/Introduction/Introduction';
import Overview from '../../components/AboutOverview/AboutOverview';
import Journey from '../../components/Journey/Journey';

class About extends Component {
    render() {
        return (
            <Aux>
                <Overview />
                <Introduction />
                <Journey />
            </Aux>
        )
    }
}

export default About;