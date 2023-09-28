import { HeaderStyles } from "../styles/Header";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Grid, Typography, IconButton, Toolbar } from "@mui/material";
import CategorySelector from "./CategorySelector";
import ifoodIcon from "../assets/icons/ifood-43.svg";
import { AnimatePresence } from "framer-motion";
import SearchInput from "../components/SearchInput";
import LoginIcon from "@mui/icons-material/Login";
import MobSacolaButton from "../components/MobBagButton";
import useViewport from "../store/Viewport";

function Header() {
  const isLarge = useViewport();
  const mobile = (
    <Grid
      className="container__header"
      container
      spacing={2}
      sx={{
        flexGrow: 1,
        overflow: "hidden",
      }}
    >
      <Grid item xlg={4} alignSelf={"center"}>
        <Toolbar variant="h6" ml={2}>
          <img src={ifoodIcon} style={{ height: 30 }} />
        </Toolbar>
      </Grid>

      <Grid
        item
        xs
        zeroMinWidth
        alignContent={"center"}
        sx={{ flexWrap: "nowrap", display: "flex" }}
      >
        <Typography noWrap alignSelf={"center"}>
          PRÓXIMO DE CIDADE DOS FUNCIONÁRIOS
        </Typography>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
  const desktop = (
    <Grid
      className="container__header"
      container
      spacing={0}
      sx={{
        overflow: "hidden",
      }}
    >
      <Grid item xl={1} lg={1} md={1} alignSelf={"center"}>
        <Toolbar variant="h6" ml={2}>
          <img src={ifoodIcon} style={{ height: 30 }} />
        </Toolbar>
      </Grid>
      <Grid item xl={1} lg={1} md={1} alignSelf="center">
        <Typography textAlign="center">Início</Typography>
      </Grid>

      <Grid item xl={4} lg={4} md={4} sx={{ minWidth: "50%" }}>
        <SearchInput />
      </Grid>
      <Grid
        item
        xl={2}
        lg={2}
        md={2}
        zeroMinWidth
        alignContent={"center"}
        sx={{ display: "flex" }}
      >
        <Typography noWrap alignSelf={"center"} fontSize="0.8em">
          PRÓXIMO DE CIDADE DOS FUNCIONÁRIOS
        </Typography>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </Grid>
      <Grid
        item
        xl={2}
        lg={2}
        md={2}
        alignSelf="center"
        sx={{ display: "inline-flex", fontSize: "1.2em" }}
      >
        <IconButton sx={{ color: "#ea1d2c" }}>
          <LoginIcon color="inherit" />
        </IconButton>
        <MobSacolaButton />
      </Grid>
    </Grid>
  );
  return (
    <HeaderStyles>
      {isLarge ? desktop : mobile}
      <AnimatePresence>
        <CategorySelector />
      </AnimatePresence>
    </HeaderStyles>
  );
}

export default Header;
