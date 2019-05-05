import React from 'react';
import Aux from 'react-aux';

import HeroImage from '../../assets/img/hero images.png';
import '../../typo.css';
import './Header.css';
import Button from '../../UI/Button/Button';

const Header = () => (
    <Aux>
        <header>
            <div className="container Header">
                <div className="row align-items-center">
                    <div className="col-12 col-sm-6">
                        <h1>
                            <span className="primary__heading primary__heading--first">Hi, I'm Jayden</span>
                            <span className="primary__heading primary__heading--second">Product, UI/UX Designer</span>
                        </h1>
                        <p className="">I help business solve problems and test new ideas FAST</p>
                        <div className="overview-button">
                            <Button btnType="primary">See my work</Button>
                            <Button btnType="third">See More About Me -></Button>
                        </div> 
                    </div>
                    <div className="col-12 col-sm-6">
                        <img src={HeroImage}/>
                    </div>
                </div>
            </div>         
        </header>
    </Aux>
)

export default Header;