import React, { useContext } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { ProfileContext } from "../store/ModalContext";
import {useAtom} from 'jotai';
import { readOnlyCart } from "../store/cart";
import { useEffect } from "react";

function MobSacolaButton() {
  const sacolaCtx = useContext(ProfileContext);
  const [items]=useAtom(readOnlyCart)
  const clickHandler = function () {
    sacolaCtx.modalSacolaHandler(true);
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
         {items.length === 1 && items[0] !== 'No item was added yet!'? items.length : 0}
        </Typography>
      </Box>
    </IconButton>
  );
}

export default MobSacolaButton;
