import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { LojasStyles } from "../../styles/home/Lojas";
import axiosClient from "../../utils/http";
import useRequestProcessor from "../../hooks/useQuery";
function Lojas() {
  const { query } = useRequestProcessor();

  const { data: restaurants, isLoading, isError } = query(
    "restaurants",
    () => axiosClient.get("/list").then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    return (
      <Container>
        <Typography>Loading...</Typography>
      </Container>
    );
  }
  if (isError) {
    return (
      <Container>
        <Typography>Sorry 😢! Somenthing went wrong. Try it later!</Typography>
      </Container>
    );
  }
  return (
    <LojasStyles>
      <Container>
        <Typography variant="h5">Lojas</Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          sx={{ paddingBottom: "5em" }}
        >
          {restaurants?.restaurants.map((loja) => {
            return (
              <Grid
                key={loja.id}
                className="merchant-v2"
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={3}
              >
                <Link to={`restaurantes/${loja.id}`}>
                  <Card sx={{ display: "flex", height: "100%" }}>
                    <CardMedia
                      className="logo-loja"
                      sx={{
                        height: "auto",
                        width: "100%",
                        maxWidth: "100px",
                        backgroundSize: "contain",
                      }}
                      image={`https://restaurant-api.dicoding.dev/images/small/${loja.pictureId}`}
                      title="olá"
                    />
                    <CardContent>
                      <Container>
                        <Typography>{loja.name}</Typography>
                        <Grid container direction="row" gap={1}>
                          <Typography>⭐{loja.rating}</Typography>
                          <Typography>{loja.city}</Typography>
                          <Typography>1,9km</Typography>
                        </Grid>
                        <Grid container direction="row" gap={1}>
                          <Typography>{loja.rating}min</Typography>
                          <Typography>{loja.rating}</Typography>
                        </Grid>
                      </Container>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </LojasStyles>
  );
}

export default Lojas;
