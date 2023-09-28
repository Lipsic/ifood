import React from "react";
import OrdersContent from "../components/OrdersContent";
import { OrdersPageWrapper } from "../styles/OrdersPage";
import { ArrowBackIosNew } from "@mui/icons-material";
import SectionHeader from "../UI/SectionHeader";
function Pedidos() {
  return (
    <OrdersPageWrapper>
      <SectionHeader
        linkTo="/"
        icon={<ArrowBackIosNew />}
        title="PEDIDOS"
      />
      <OrdersContent />
    </OrdersPageWrapper>
  );
}

export default Pedidos;
