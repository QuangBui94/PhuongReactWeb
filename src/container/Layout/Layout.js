import React, { Component } from 'react';
import Aux from 'react-aux';

import Navigation from '../../components/Navigation/Navigation';

class Layout extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <main>{this.props.children}</main>
            </div>  
        )
    }
}

export default Layout;