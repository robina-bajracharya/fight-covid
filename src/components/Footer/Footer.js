import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleArrows, faLaptopHouse, faHandsWash } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@material-ui/core";

const footer = () => {
  return (
    <div className = "footer">
        <Grid container className = "footer__icons" justify = "space-around" alignItems = "center" xs = {12}>
            <Grid item>
                <FontAwesomeIcon icon = { faPeopleArrows } size = "4x" color = "white"/>
                <h3 className = "txt">Keep the <br></br>distance!</h3>
            </Grid>
            <Grid item>
                <FontAwesomeIcon icon = { faLaptopHouse } size = "4x" color = "white"/>
                <h3 className = "txt1">Stay at home!</h3>
            </Grid>
            <Grid item>
                <FontAwesomeIcon icon = { faHandsWash } size = "4x" color = "white"/>
                <h3 className = "txt2">Wash your hands!</h3>
            </Grid>
        </Grid>
        <h4 className = "footer__credits">&copy; Copyright 2020 created by AR Team!</h4>
    </div>
    );
};

export default footer;
