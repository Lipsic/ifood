import React from "react";
import StoreCard from "../UI/StoreCard";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Wrapper } from "../styles/bag-items";
import { readOnlyCart } from "../store/cart"; 
import {useAtom} from 'jotai'
// TODO: add, edit and remove items from the bag

function BagItems() {
  const [items] = useAtom(readOnlyCart)
  
  return (
    <Wrapper>
      <StoreCard />
      <div>Tag promo</div>
      <Grid container direction="row" className="item">
        <Grid item xs={8}>
          <div>titulo</div>
          <ul className="ingredients">
            {items.length === 1  && items[0]===''&& <p>No item was added yet!</p>}
            {items.map(i=><p key={i}>
              {i}
            </p>)}
          </ul>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: "flex" }}>
            <h3>R$00,01</h3>
            <IconButton sx={{ color: "#ea1d2c" }}>
              <MoreVertIcon color="inherit" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Typography color="#ea1d2c" textAlign="center">
        Adicionar mais itens
      </Typography>
      <Grid item container direction="column">
        <Grid direction="row" container justifyContent="space-between">
          <Typography>Subtotal</Typography>
          <Typography>R$00,01</Typography>
        </Grid>
        <Grid direction="row" container justifyContent="space-between">
          <Typography>Texa de Entrega</Typography>
          <Typography>Grátis</Typography>
        </Grid>
        <Grid direction="row" container justifyContent="space-between">
          <Typography>Total</Typography>
          <Typography>R$00,01</Typography>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default BagItems;
