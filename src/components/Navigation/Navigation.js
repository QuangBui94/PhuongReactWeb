import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import './Navigation.css';

const Navigation = () => (
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container">
            <a href="./index.html" class="navbar-brand">JN.</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav ml-auto">
                    <NavigationItem linkName="Project"/>
                    <NavigationItem linkName="About"/>
                    <NavigationItem linkName="Sharing"/>
                    <NavigationItem linkName="Get in touch"/>
                </ul>
            </div>
        </div>
    </nav>
{/* 
    <ul className="navbar-nav ml-auto">
                    <NavigationItem linkName="Project"/>
                    <NavigationItem linkName="About"/>
                    <NavigationItem linkName="Sharing"/>
                    <NavigationItem linkName="Get in touch"/>
                </ul> */}
    </div>
)

export default Navigation;