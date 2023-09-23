import React from "react";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";

function StoreCard() {
  return (
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
        component="img"
        sx={{
          width: 70,
          height: 70,
          alignSelf: "center",
        }}
        image=""
        alt="store's banner"
      />
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h5">
          Nome da Loja
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StoreCard;
