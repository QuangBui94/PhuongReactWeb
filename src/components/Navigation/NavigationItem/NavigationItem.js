import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './NavigationItem.css';

class NavigationItem extends Component {
    state = {
        navLink: {
            home: '/',
            about: '/about',
            sharing: '/sharing',
            contact: '/contact'
        }
    }

    render () {
        let navItem = Object.keys(this.state.navLink).map(el => (
            <div key={el}>
                <li className="nav-item"><NavLink className="nav-link" exact to={this.state.navLink[el]}>{el}</NavLink></li>
            </div> 
        ))  

        return (
            <div>
                <ul className="navbar-nav ml-auto">
                    {navItem}
                </ul>
            </div>
        )
                   
    }  
}

export default withRouter(NavigationItem);