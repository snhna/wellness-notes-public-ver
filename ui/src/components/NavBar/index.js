// Header: Wellness Notes Icon to return HOME
// import React, { useState, useEffect } from 'react';
import { NavLink, NavBarContainer } from './NavBarElements';
import logo from "./WNLogo.svg";

const NavBar = () => {
    return(
        <NavBarContainer>
            <NavLink to="home"> 
                <img alt="HomeLogo" src={logo} width="80" height="80"/>
            </NavLink>
        </NavBarContainer>
    );
};

export default NavBar;

