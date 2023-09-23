import React, { useState, useContext } from "react";
import { SacolaWrapper } from "../styles/Sacola";
import { ProfileContext } from "../store/ModalContext";
import SectionHeader from "../UI/SectionHeader";
import ArrowDownwardTwoToneIcon from "@mui/icons-material/ArrowDownwardTwoTone";
import ModalCotainer from "../UI/ModalCotainer";
import { Container } from "@mui/material";
import Local from "../components/Local";
import Time from "../components/Time";
import BagItems from "../components/BagItems";

function Sacola() {
  const [isDelivery, setIsDelivery] = useState(true);
  const sacolaCtx = useContext(ProfileContext);
  const closeHandler = function () {
    sacolaCtx.modalSacolaHandler(false);
  };

  return (
    <>
      {sacolaCtx.isSacolaActive && (
        <ModalCotainer>
          <SacolaWrapper>
            <SectionHeader
              className="header"
              title="Sacola"
              onClose={closeHandler}
              icon={<ArrowDownwardTwoToneIcon />}
            />
            <Container>
              {isDelivery ? "Entrega" : "Retirada"}
              <Local />
              <Time />
              <BagItems />
            </Container>
          </SacolaWrapper>
        </ModalCotainer>
      )}
    </>
  );
}

export default Sacola;
