import React from "react";
import data from "../data";
import Card from "../Card/Card";
import { Grid } from "@material-ui/core";
import './Content.css';

const content = () => {
  const resdata = data.map((d) => {
    return (
      <Grid item xs="12" sm="6" md = "4" className = "card__container">
        <Card
          title={d.title}
          description={d.description}
          avatarUrl={d.avatarUrl}
          imageUrl={d.imageUrl}
          webUrl = {d.webUrl}
        />
      </Grid>
    );
  });

  return (
    <Grid container spacing="4">
      {resdata}
    </Grid>
  );
};

export default content;
