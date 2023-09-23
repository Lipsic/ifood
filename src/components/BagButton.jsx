import React, { useContext } from "react";
import { IconButton, Typography } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { ProfileContext } from "../store/ModalContext";

function SacolaBtn() {
  const sacolaCtx = useContext(ProfileContext);
  const clickHandler = function () {
    sacolaCtx.modalSacolaHandler(true);
  };
  return (
    <IconButton
      onClick={clickHandler}
      sx={{
        justifyContent: "space-between",
        width: "100%",
        height: "3.2rem",
        backgroundColor: "#ea1d2c",
        borderRadius: 0,
        color: "white",
        padding: "0 1.4rem 0 1.4rem",
      }}
    >
      <LocalMallOutlinedIcon color="inherit" fontSize="small" />
      <Typography color="white" fontSize="0.9rem">
        Ver sacola
      </Typography>
      <Typography color="white" fontSize="0.9rem">
        R$19,99
      </Typography>
    </IconButton>
  );
}

export default SacolaBtn;
