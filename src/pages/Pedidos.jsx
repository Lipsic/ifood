import React from "react";
import BagContent from "../components/BagContent";
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
      <BagContent />
    </OrdersPageWrapper>
  );
}

export default Pedidos;
