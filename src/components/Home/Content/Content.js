import React from "react";
import data from "../data";
import Card from "../Card/Card";
import { Grid } from "@material-ui/core";

const content = () => {
  const resdata = data.map((d) => {
    return (
      <Grid item xs="12" sm="4">
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
