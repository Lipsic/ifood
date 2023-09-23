import React from "react";
import localSvg from "../assets/local.svg";
import { Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

function Local() {
  return (
    <Grid container>
      <Grid item xs={9} sm={6}>
        <Card
          xs={6}
          direction="row"
          sx={{
            display: "flex",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <CardMedia
            component="svg"
            sx={{ width: 70, height: 70, alignSelf: "center" }}
            image={localSvg}
            alt="local on map"
          />

          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              R. João Alfredo, 112
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Fortaleza, CE
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={3} sm={6} alignSelf="center">
        <Typography textAlign="end" color="#ea1d2c">
          Escolher
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Local;
