import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import { BuscaStyles } from "../styles/Busca";
import { Popper, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { color } from "framer-motion";

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
                  sx={{ zIndex: "1000", width: "40%", justifyItems: "center" }}
                  disablePortal
                >
                  <List
                    className="search-list"
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      color: "white",
                      minWidth: "300px",
                      width: "90%",
                      margin: "0 auto",
                    }}
                  >
                    {matches.restaurants.map((el) => (
                      <Link
                        to={`/restaurantes/${el.id}`}
                        style={{
                          width: "100%",
                        }}
                        key={el.id}
                      >
                        <ListItem
                          disablePadding
                          sx={{
                            textAlign: "center",
                            width: "100%",
                            color: "white",
                            justifyContent: "center",
                          }}
                        >
                          <Typography textAlign="center" width="100%">
                            {el.name}
                          </Typography>
                        </ListItem>
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
