import React from 'react';
import Aux from 'react-aux';

import '../../index.css';
import '../../typo.css';
import './Process.css';
import ProblemLogo from '../../assets/img/Problem.svg';
import SketchLogo from '../../assets/img/Sketch.png';
import PrototypeLogo from '../../assets/img/Prototype.svg';
import ReiterateLogo from '../../assets/img/Reiterate.svg';

const Process = () => (
    <Aux>
        <div className="section Process">
            <div className="container">
                <div className="row">
                    <h2 className="secondary__heading col-12">My Process.</h2>
                </div>
                <div className="row">
                    <p className="col-12 col-sm-6">I believe in having a well tested and repeatable process will eventually lead to a predictable outcome.</p>
                </div>
                <div className="row Process-item">
                    <div className="col-12 col-sm-6 col-md-3 mr-2 mb-4 row">
                        <div className="col-12 img">
                            <img src={ProblemLogo} />
                        </div>
                        <div className="col-12 Process-heading">
                            <h3 className="third__heading">Choose the right problem.</h3>
                        </div>
                        <div className="col-12">
                            <p>I believe in having a well tested and repeatable process will eventually lead to a predictable outcome.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mr-2 mb-4 row">
                        <div className="col-12 img">
                            <img src={SketchLogo} />
                        </div>
                        <div className="col-12 Process-heading">
                            <h3 className="third__heading">Sketch & Storyboard.</h3>
                        </div>
                        <div className="col-12">
                            <p>Getting people in a room to brainstorm, sketching their idea out and then vote for the right solution</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mr-2 mb-4 row">
                        <div className="col-12 img">
                            <img src={PrototypeLogo} />
                        </div>
                        <div className="col-12 Process-heading">
                            <h3 className="third__heading">Prototype & Test.</h3>
                        </div>
                        <div className="col-12">
                            <p>Create high/low fidelity prototype using paper or Invision/Marvel and test with target users. </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mr-2 mb-4 row">
                        <div className="col-12 img">
                            <img src={ReiterateLogo} />
                        </div>
                        <div className="col-12 Process-heading">
                            <h3 className="third__heading">Reiterate.</h3>
                            <p>Learn from the test and improve the product because your user deserve a better product.</p>    
                        </div>
                        <div className="col-12">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
    </Aux>
)

export default Process;