import React from "react";
import "./Prevention.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import SymptomsCard from '../Symptoms/SymptomsCard'
import washImg from '../../assets/wash.png';
import socialdistanceImg from '../../assets/socialdistance.png';
import stayathomeImg from '../../assets/stayathome.png';
import sneezeImg from '../../assets/sneeze.png';
import cleanImg from '../../assets/clean.png';
import drinkImg from '../../assets/drink.png';
const Prevention = () => {
    return ( <
        div >
        <
        header className = "prevention__header" >
        <
        nav >
        <
        Navbar / >
        <
        /nav>{" "} <
        /header>{" "} <
        section className = "symptoms__section" >
        <
        div className = "symptoms__title" >
        <
        h2 > Prevention < /h2>{" "} <
        /div>

        <
        div className = "symptoms__page" >
        <
        SymptomsCard photo = { washImg }
        symptom = "Wash Your Hands"
        descriptions = "Stop the spread of disease causing germs by washing your hands often with soap and water for 40 seconds. Use alcohol based hand sanitizer if soap and water are not available.
        " /
        > { " " } <
        SymptomsCard photo = { socialdistanceImg }
        symptom = "Practice social distancing"
        descriptions = "Work from home (if possible), engage in social distancing, maintain a 6 foot distance from other people, avoid crowded place and gathering in groups. " /
        >
        <
        SymptomsCard photo = { stayathomeImg }
        symptom = "Stay At Home"
        descriptions = "Avoid leaving your house unnecessarily. Connect with people through virtual visits or phone calls.
        " /
        > { " " } <
        SymptomsCard photo = { sneezeImg }
        symptom = "Cover Your Nose and Mouth"
        descriptions = "Cover your nose and mouth with a tissue while sneezing and coughing or use flexed elbow. Try to avoid touching your face.
        " /
        >
        <
        SymptomsCard photo = { cleanImg }
        symptom = "Clean And Disinfect"
        descriptions = "Use a virus killing disinfectant to clean frequently used surfaces such as door knobs. Dispose the used tissues immediately in a covered bin.
        " /
        > { " " } <
        SymptomsCard photo = { drinkImg }
        symptom = "Maintain Healthy Habits"
        descriptions = "Get enough sleep, eat healthy foods, drink plenty of liquids and exercise and help keep your immune system strong.
        " /
        > { " " } <
        /div> <
        /section>{" "} <
        footer >
        <
        Footer / >
        <
        /footer> <
        /div>
    );
};

export default Prevention;