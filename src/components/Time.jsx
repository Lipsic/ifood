import React from "react";
import { Box, Typography } from "@mui/material";

function Time() {
  return (
    <Box
      sx={{ border: "red 1px solid", borderRadius: "10px", padding: "1rem" }}
    >
      <Typography color="#ea1d2c">Padrão</Typography>
      <Typography color="#717171">Hoje, 35-45 min</Typography>
      <Typography color="success.main">Grátis</Typography>
    </Box>
  );
}

export default Time;
