//Transferir para pasta 'components' porque é responsável por mostrar as lojas dinamicamente com uma api, e não conter só conter conteúdo

import React from "react";

import chapaQuente from "../../assets/lojas/chapa-quente.avif";
import emprorioCafe from "../../assets/lojas/emporio-cafe.avif";
import frosty from "../../assets/lojas/frosty.avif";
import noelia from "../../assets/lojas/noelia.avif";
import pao from "../../assets/lojas/pao-de-trigo.avif";
import portitalia from "../../assets/lojas/portitalia.avif";
import skina from "../../assets/lojas/skina.avif";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const DUMMY_DATA = [
  {
    nome: "Chapa Quente",
    logo: chapaQuente,
    tipo: "padaria",
    rating: 10,
    local: 123456789,
    media: 5.99,
    tempo: 5 * 60,
    id() {
      return this.nome.toLowerCase().replace(/\s/g, "");
    },
  },
  {
    nome: "Empório Café",
    logo: emprorioCafe,
    tipo: "padaria",
    rating: 9,
    local: 123456789,
    media: 5.99,
    tempo: 5 * 60,
    id() {
      return this.nome.toLowerCase().replace(/\s/g, "");
    },
  },
  {
    nome: "Frosty",
    logo: frosty,
    tipo: "lanchonete",
    rating: 8,
    local: 123456789,
    media: 5.99,
    tempo: 7 * 60,
    id() {
      return this.nome.toLowerCase().replace(/\s/g, "");
    },
  },
];
import { LojasStyles } from "../../styles/home/Lojas";
function Lojas() {
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
          {DUMMY_DATA.map((loja) => {
            return (
              <Grid
                key={loja.nome}
                className="merchant-v2"
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={3}
              >
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    className="logo-loja"
                    sx={{
                      height: "auto",
                      width: "100%",
                      maxWidth: "100px",
                      backgroundSize: "contain",
                    }}
                    image={loja.logo}
                    title="olá"
                  />
                  <CardContent>
                    <Container>
                      <Typography>{loja.nome}</Typography>
                      <Grid container direction="row" gap={1}>
                        <Typography>⭐{loja.rating}</Typography>
                        <Typography>{loja.tipo}</Typography>
                        <Typography>1,9km</Typography>
                      </Grid>
                      <Grid container direction="row" gap={1}>
                        <Typography>{loja.tempo}min</Typography>
                        <Typography>{loja.media}</Typography>
                      </Grid>
                    </Container>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </LojasStyles>
  );
}

export default Lojas;
