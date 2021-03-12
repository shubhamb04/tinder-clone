import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import TinderLogo from "../src/images/tinderlogo.JPG"

function Header(props) {
    return (
        <div className="header">
            
            <IconButton>
            <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
            <img className="header__logo" src={TinderLogo} alt="tinderLogo"/>
        </div>
    );
}

export default Header;