import React from "react";
import "./SymptomsCard.css";

function SymptomsCard({ photo, symptom, descriptions }) {
    return ( <
        div className = "symptomsCard" >
        <
        div className = "symptomsCard__detail" >
        <
        img src = { photo }
        height = "139px"
        width = "130px" / >
        <
        div className = "symptomsCard__content" >
        <
        h3 > { symptom } < /h3> <p> {descriptions} </p >
        <
        /div> <
        /div> <
        /div>
    );
}

export default SymptomsCard;