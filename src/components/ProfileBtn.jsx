import React, { useState, useContext, useEffect } from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import { ProfileContext } from "../store/ModalContext";

const menuButtonsStyles = {
  flexDirection: "column",
  backgroundColor: "#f2f2f2",
  color: "black",
  gap: "1px",
};
function ProfileBtn() {
  const profileCtx = useContext(ProfileContext);
  function handleClick() {
    window.history.pushState(null, "", "/perfil");
    profileCtx.modalHandler(true);
  }
  return (
    <a>
      <Button
        fullWidth
        startIcon={
          profileCtx.isActive ? <PersonIcon /> : <Person2OutlinedIcon />
        }
        sx={menuButtonsStyles}
        style={{ border: "none" }}
        onClick={handleClick}
      >
        <p className={"label-btn"}>Perfil</p>
      </Button>
    </a>
  );
}

export default ProfileBtn;
