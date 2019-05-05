import React, { Component } from 'react';
import Aux from 'react-aux';
import Header from '../../components/Header/Header';
import Process from '../../components/Process/Process';
import Work from '../../components/Work/Work';
import Sharing from '../../components/Sharing/Sharing';
import Contact from '../../components/Contact/Contact';

class Project extends Component {
    render() {
        return (
            <Aux>
                <Header /> 
                <Process />
                <Work />
                <Sharing />
                <Contact />
            </Aux>     
        )
    }
}

export default Project;