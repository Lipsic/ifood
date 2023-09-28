import React from "react";
import panelas from "../assets/panelas.svg";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function OrdersContent({ hasContent }) {
  return (
    <>
      <div className="no-orders-image">
        <img src={panelas} alt="" width={300} height="auto" />
      </div>
      <div className="no-orders-text">
        <Typography align="center">Você ainda não pediu</Typography>
        <Typography align="center">
          Que tal conhecer as melhores opções na sua região?
        </Typography>
        <Link to="/" align="center" className="red-accent">
          Ir para o início
        </Link>
      </div>
    </>
  );
}

export default OrdersContent;
