import React from "react";
import { NavLink } from "react-router-dom";
import { Grid } from "@material-ui/core";
import "./Home.css";
import Content from "./Content/Content";
import pic from "../../assets/news.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return ( <
        div className = "home" >
        <
        header >
        <
        nav >
        <
        div className = "home__navbar" >
        <
        a className = "home__logo"
        href = "/" >
        <
        div className = "home___fight" > Fight < /div> <
        div className = "home__covid" > Covid. < /div> <
        /a> <
        ul className = "home__navBar" >
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
        /div> <
        /nav> <
        div className = "home__hero" >
        <
        div className = "home__first" > Get Well Soon, Earth! < /div> <
        div className = "home__second" > Let 's Help Our </div> <
        div className = "home__third" > Earth Recover! < /div> <
        div className = "home__fourth" >
        Check out the current country and global data on COVID - 19. <
        /div> <
        div className = "home__checkdata" >
        <
        a href = "/stats"
        className = "btn" >
        View Data <
        /a> <
        /div> <
        /div> <
        /header> <
        section >
        <
        Grid container >
        <
        Grid item xs = "12"
        className = "home__title" >
        <
        h2 >
        Latest news < img src = { pic }
        className = "pic" / >
        <
        /h2> <
        /Grid> <
        Grid item container className = "news" >
        <
        Grid item xs = "0"
        sm = "2" / >
        <
        Grid item xs = "12"
        sm = "8" >
        <
        Content / >
        <
        /Grid> <
        Grid item xs = "0"
        sm = "2" / >
        <
        /Grid> <
        /Grid> <
        /section> <
        footer >
        <
        Footer / >
        <
        /footer> <
        /div>
    );
};

export default Home;