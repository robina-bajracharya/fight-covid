import React from "react";
import "./Symptoms.css";
import { Grid } from "@material-ui/core";
import SymptomsCard from "./SymptomsCard";
import coughImg from "../../assets/cough.png";
import Navbar from "../Navbar/Navbar";
import throatImg from "../../assets/throat.png";
import breathImg from "../../assets/breath.png";
import phlegmImg from "../../assets/phlegm.png";
import feverImg from "../../assets/fever.png";
import fatigueImg from "../../assets/fatigue.png";
import Footer from "../Footer/Footer";
import symptomsIcon from "../../assets/symptomsIcon.png";

const Symptoms = () => {
  return (
    <div class="symptoms">
      <header className="symptoms__header">
        <nav>
          <Navbar />
        </nav>
        <div className="symptoms__hero">
          <div className="symptoms__first"> Do You Have Any Of </div>
          <div className="symptoms__second"> These Symptoms? </div>
          <div className="symptoms__third">
            COVID-19 affects different people in different ways. Most infected
            people will develop mild to moderate illness and recover without
            hospitalization.
          </div>
        </div>
      </header>
      <section className="symptoms__section">
        <div className="symptoms__title">
          <h2>
            
            Symptoms <img src={symptomsIcon} className="symps" />
          </h2>
        </div>
        <Grid container className="symptomsInfo">
          <Grid item container xs={12} sm = {12} md = {6} justify="center">
            <SymptomsCard
              photo={coughImg}
              symptom="Coughing"
              descriptions="A new, continuous cough, where you cough a lot for more than an hour, or have three or more coughing episodes in 24 hours.
        "
            />
          </Grid>
          <Grid item container xs={12} sm = {12} md = {6} justify="center">
            <SymptomsCard
              photo={throatImg}
              symptom="Sore Throat"
              descriptions="The raw, scratchy, burning feeling at the back of your throat is often the first warning sign that you have a cold, or that the flu is on the way. "
            />
          </Grid>
          <Grid item container xs={12} sm = {12} md = {6} justify="center">
            <SymptomsCard
              photo={breathImg}
              symptom="Shortness Of Breath"
              descriptions="An intense tightening in the chest, air hunger, difficulty in breathing, breathlessness or a feeling of suffocation.
        "
            />
          </Grid>
          <Grid item container xs={12} sm = {12} md = {6} justify="center">
            <SymptomsCard
              photo={phlegmImg}
              symptom="Lots Of Phlegm"
              descriptions="A sticky thick stuff that hangs around in the back of your throat and makes you uncomfortable.
        "
            />
          </Grid>
          <Grid item container xs={12} sm = {12} md = {6} justify="center">
            <SymptomsCard
              photo={feverImg}
              symptom="Fever"
              descriptions="The body temperature rises above the normal range of 98–100°F (36–37°C). Sweating, loss of appetite, drowsiness, difficulty in concentration can be felt.
        "
            />
          </Grid>
          <Grid item container xs={12} sm = {12} md = {6} justify="center">
            <SymptomsCard
              photo={fatigueImg}
              symptom="Fatigue"
              descriptions="A feeling of tiredness and an overall lack of energy. A person with fatigue may feel drained, weak, or sluggish.
        "
            />
          </Grid>
        </Grid>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Symptoms;
