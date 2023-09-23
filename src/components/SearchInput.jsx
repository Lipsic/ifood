import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import { BuscaStyles } from "../styles/Busca";

export default function SearchAppBar() {
  return (
    <BuscaStyles>
      <AppBar
        position="static"
        className="app-bar__busca"
        sx={{
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
          padding: "1rem",
        }}
      >
        <Container sx={{ display: "flex", alignItems: "center" }}>
          <SearchIcon color="success" fill={"#ea1d2c"} />
          <input
            className="input"
            placeholder="Busque por item ou loja"
            name="buscar"
            type="text"
          />
        </Container>
      </AppBar>
    </BuscaStyles>
  );
}
