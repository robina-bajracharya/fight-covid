import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Home.css';

const Home = () => {
    return ( <
        div className = "home" >
        <
        header >
        <
        nav >
        <
        div className = "nav__logo" >
        <
        div className = "nav___fight" > Fight < /div> <
        div className = "nav__covid" > Covid. < /div> < /
        div > <
        ul className = "navBar" >

        <
        li > < NavLink to = "/stats" > Data & Statistics < /NavLink></li >
        <
        li > < NavLink to = "/symptoms" > Symptoms < /NavLink></li >
        <
        li > < NavLink to = "/prevention" > Prevention < /NavLink></li >
        <
        /ul> < /
        nav >

        <
        /header> <
        div className = "home__check" > < Button variant = "contained"
        color = "primary" > < Link to = "/stats" > Check Out < /Link></Button > < /div>

        <
        /div>
    )
}

export default Home;