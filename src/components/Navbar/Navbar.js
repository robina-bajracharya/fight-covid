import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return ( <
        div className = "navbar" >
        <
        a className = "nav__logo"
        href = "/" >
        <
        div className = "nav__fight" > Fight < /div> <
        div className = "nav__covid" > Covid. < /div> <
        /a> <
        ul className = "navRight" >
        <
        li >
        <
        NavLink to = "/stats" > Data & Statistics < /NavLink> <
        /li> <
        li >
        <
        NavLink to = "/symptoms" > Symptoms < /NavLink> <
        /li> <
        li >
        <
        NavLink to = "/prevention" > Prevention < /NavLink> <
        /li> <
        /ul> <
        /div>
    );
}

export default Navbar;