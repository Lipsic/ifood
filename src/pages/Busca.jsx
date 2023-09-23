import React from "react";
import SearchAppBar from "../components/SearchInput";
import { BuscaStyles } from "../styles/Busca";
import { Typography, Container, Grid, Box } from "@mui/material";

import bebidas from "../assets/busca/bebidas.avif";
import mercado from "../assets/busca/mercado.avif";
import farmacia from "../assets/busca/farmacia.avif";
import pets from "../assets/busca/pets.avif";
import acai from "../assets/busca/acai.avif";
import pastel from "../assets/busca/pastel.avif";
import salgados from "../assets/busca/salgados.avif";
import sorvete from "../assets/busca/sorvete.avif";
import pudim from "../assets/busca/pudim.avif";
import padaria from "../assets/busca/sorvete.avif";

const banners = [
  {
    banner: bebidas,
    label: "Bebidas",
    link: "http://localhost/5173/bebidas",
  },
  {
    banner: mercado,
    label: "Mercado",
    link: "http://localhost/5173/mercado",
  },
  {
    banner: farmacia,
    label: "Farmácia",
    link: "http://localhost/5173/farmacia",
  },
  {
    banner: padaria,
    label: "Padaria",
    link: "http://localhost/5173/padaria",
  },
  {
    banner: pets,
    label: "Pet",
    link: "http://localhost/5173/pets",
  },
  {
    banner: acai,
    label: "Açai",
    link: "http://localhost/5173/acai",
  },
  {
    banner: pastel,
    label: "Pastel",
    link: "http://localhost/5173/pastel",
  },
  {
    banner: pudim,
    label: "Pudim",
    link: "http://localhost/5173/pudim",
  },
  {
    banner: salgados,
    label: "Salgados",
    link: "http://localhost/5173/salgados",
  },
  {
    banner: sorvete,
    label: "Sorvete",
    link: "http://localhost/5173/sorvete",
  },
];

function Busca() {
  return (
    <BuscaStyles>
      <SearchAppBar />
      <Container sx={{ marginTop: "4rem", paddingBottom: "90px" }}>
        <Typography sx={{ margin: "2rem" }}>Categorias</Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 12, md: 16, lg: 16, xl: 16 }}
        >
          {banners.map((banner) => (
            <Grid item xs={2} sm={4} md={4} key={banner.label}>
              <Box
                component="img"
                sx={{
                  height: 100,
                  width: "100%",
                  objectFit: "cover",
                }}
                alt="The house from the offer."
                src={banner.banner}
              />
              <div className="banner-overlay">
                <Typography className="banner-text">{banner.label}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </BuscaStyles>
  );
}

export default Busca;
