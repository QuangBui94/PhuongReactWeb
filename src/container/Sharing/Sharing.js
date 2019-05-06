import React, { Component } from 'react';
import Aux from 'react-aux';

import SharingOverview from '../../components/SharingOverview/SharingOverview';
import SharingVideo from '../../components/SharingVideo/SharingVideo';
import Inspiration from '../../components/Inspiration/Inspiration';

class Sharing extends Component {
    render() {
        return (
            <Aux>
                <SharingOverview />
                <SharingVideo />
                <Inspiration />
            </Aux>
        )
    }
}

export default Sharing;