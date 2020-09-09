import React from "react";
import "./Symptoms.css";

import SymptomsCard from './SymptomsCard';
import coughImg from '../../assets/cough.png';
import Navbar from '../Navbar/Navbar';
import throatImg from '../../assets/throat.png';
import breathImg from '../../assets/breath.png';
import phlegmImg from '../../assets/phlegm.png';
import feverImg from '../../assets/fever.png';
import fatigueImg from '../../assets/fatigue.png';
import Footer from '../Footer/Footer';

const Symptoms = () => {
    return ( <
        div class = "symptoms" >
        <
        header className = "symptoms__header" >
        <
        nav >
        <
        Navbar / >
        <
        /nav> <
        /header> <
        section className = "symptoms__section" >
        <
        div className = "symptoms__title" >
        <
        h2 >
        Symptoms <
        /h2> <
        /div>

        <
        div className = "symptoms__page" >
        <
        SymptomsCard photo = { coughImg }
        symptom = "Coughing"
        descriptions = "A new, continuous cough, where you cough a lot for more than an hour, or have three or more coughing episodes in 24 hours.
        "/> <
        SymptomsCard photo = { throatImg }
        symptom = "Sore Throat"
        descriptions = "The raw, scratchy, burning feeling at the back of your throat is often the first warning sign that you have a cold, or that the flu is on the way. " / >
        <
        SymptomsCard photo = { breathImg }
        symptom = "Shortness Of Breath"
        descriptions = "An intense tightening in the chest, air hunger, difficulty in breathing, breathlessness or a feeling of suffocation.
        "/> <
        SymptomsCard photo = { phlegmImg }
        symptom = "Lots Of Phlegm"
        descriptions = "A sticky thick stuff that hangs around in the back of your throat and makes you uncomfortable.
        "/>

        <
        SymptomsCard photo = { feverImg }
        symptom = "Fever"
        descriptions = "The body temperature rises above the normal range of 98–100°F (36–37°C). Sweating, loss of appetite, drowsiness, difficulty in concentration can be felt.
        "/> <
        SymptomsCard photo = { fatigueImg }
        symptom = "Fatigue"
        descriptions = "A feeling of tiredness and an overall lack of energy. A person with fatigue may feel drained, weak, or sluggish.
        "/> <
        /div>

        <
        /section> <
        footer >
        <
        Footer / >
        <
        /footer> <
        /div>
    );
};

export default Symptoms;