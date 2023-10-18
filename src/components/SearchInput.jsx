import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import { BuscaStyles } from "../styles/Busca";
import { useState } from "react";
import { useEffect } from "react";
import { Popper, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function SearchAppBar() {
  const [input, setInput] = useState("");
  const [matches, setMatches] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://restaurant-api.dicoding.dev/search?q=${input}`,
        {
          method: "GET",
        }
      );
      const response = await res.json();
      setMatches(response);
    })();
  }, [input]);

  const handleChange = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <>
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
              aria-describedby={id}
              className="input"
              placeholder="Busque por item ou loja"
              name="buscar"
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onClick={handleChange}
            />
            {input !== "" &&
              matches.restaurants &&
              matches.restaurants.length !== 0 && (
                <Popper
                  id={id}
                  open={true}
                  placement="bottom"
                  anchorEl={anchorEl}
                >
                  <List>
                    {matches.restaurants.map((el) => (
                      <Link
                        to={`/restaurantes/${el.id}`}
                        style={{ width: "100%", height: "100%" }}
                        key={el.id}
                      >
                        <ListItem disablePadding>{el.name}</ListItem>
                      </Link>
                    ))}
                  </List>
                </Popper>
              )}
          </Container>
        </AppBar>
      </BuscaStyles>
    </>
  );
}
