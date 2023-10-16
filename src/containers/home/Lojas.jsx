import React from "react";
import { Link } from "react-router-dom";
import chapaQuente from "../../assets/lojas/chapa-quente.avif";

import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { LojasStyles } from "../../styles/home/Lojas";
import { useState } from "react";
import { useEffect } from "react";
function Lojas() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://restaurant-api.dicoding.dev/list", {
        method: "GET",
      });
      const restaus = await res.json();
      setRestaurants(restaus.restaurants);
    })();
  }, []);

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
          {restaurants.map((loja) => {
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
                  <Card sx={{ display: "flex" }}>
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

// const DUMMY_DATA = [
//   {
//     nome: "Chapa Quente",
//     logo: chapaQuente,
//     tipo: "padaria",
//     rating: 10,
//     local: 123456789,
//     media: 5.99,
//     tempo: 5 * 60,
//     id() {
//       return this.nome.toLowerCase().replace(/\s/g, "");
//     },
//   },
//   {
//     nome: "Empório Café",
//     logo: emprorioCafe,
//     tipo: "padaria",
//     rating: 9,
//     local: 123456789,
//     media: 5.99,
//     tempo: 5 * 60,
//     id() {
//       return this.nome.toLowerCase().replace(/\s/g, "");
//     },
//   },
//   {
//     nome: "Frosty",
//     logo: frosty,
//     tipo: "lanchonete",
//     rating: 8,
//     local: 123456789,
//     media: 5.99,
//     tempo: 7 * 60,
//     id() {
//       return this.nome.toLowerCase().replace(/\s/g, "");
//     },
//   },
// ];
