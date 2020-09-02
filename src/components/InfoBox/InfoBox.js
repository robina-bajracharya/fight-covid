import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import './InfoBox.css';

function InfoBox({title, active, isRed, cases, total, ...props}) {
    return (
        <div className = "infoBox">
            <Card onClick = {props.onClick} 
                className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"
                }`}>
                <CardContent>
                    <Typography>{title}</Typography>
                    <h2 className = "infoBox__cases"
                    className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
                        {cases}
                    </h2>
                    <Typography className = "infoBox__total">{total} Total</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox
