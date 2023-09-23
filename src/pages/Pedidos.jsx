import React from "react";
import panelas from "../assets/panelas.svg";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { OrdersPageWrapper } from "../styles/OrdersPage";
import { ArrowBackIosNew } from "@mui/icons-material";
import SectionHeader from "../UI/SectionHeader";
function Pedidos() {
  const noOrdersContent = (
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
  return (
    <OrdersPageWrapper>
      <SectionHeader linkTo="/" icon={<ArrowBackIosNew />} title="PEDIDOS" />
      {noOrdersContent}
    </OrdersPageWrapper>
  );
}

export default Pedidos;
