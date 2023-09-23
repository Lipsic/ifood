import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { NavWrapper } from "../styles/SectionHeader";

function SectionHeader({ title = "", icon, onClose = () => {}, linkTo = "#" }) {
  return (
    <NavWrapper className="header">
      <Link to={linkTo} className="icon" onClick={onClose}>
        {icon}
      </Link>
      <Typography
        variant="h6"
        align="center"
        sx={{ width: "100%" }}
        fontSize="1.1rem"
      >
        {title === "" ? "\u00a0" : title}
      </Typography>
    </NavWrapper>
  );
}

export default SectionHeader;
