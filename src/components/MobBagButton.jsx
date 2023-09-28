import React, { useContext } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import useModal from "../store/Modals";

function MobSacolaButton() {
  const active = false;
  const { isBagActive, setBag } = useModal(active);
  console.log("useModal", isBagActive);
  const clickHandler = function() {
    active === true;
    setBag(true);
  };
  return (
    <IconButton
      onClick={clickHandler}
      sx={{
        backgroundColor: "transparent",
        borderRadius: 0,
        color: "#ea1d2c",
        padding: "0 1.4rem 0 1.4rem",
        gap: "10px",
      }}
    >
      <LocalMallOutlinedIcon color="inherit" />
      <Box>
        <Typography noWrap color="#717171" fontSize="0.9rem">
          R$ 0,00
        </Typography>
        <Typography noWrap color="#717171" fontSize="0.9rem">
          0 itens
        </Typography>
      </Box>
    </IconButton>
  );
}

export default MobSacolaButton;
