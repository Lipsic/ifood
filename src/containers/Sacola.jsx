import React, { useState, useContext } from "react";
import { BagWrapper } from "../styles/Bag";
import { ProfileContext } from "../store/ModalContext";
import SectionHeader from "../UI/SectionHeader";
import ArrowDownwardTwoToneIcon from "@mui/icons-material/ArrowDownwardTwoTone";
import EastTwoToneIcon from "@mui/icons-material/EastTwoTone";
import ModalCotainer from "../UI/ModalCotainer";
import { Container } from "@mui/material";
import Local from "../components/Local";
import Time from "../components/Time";
import BagItems from "../components/BagItems";
import useViewport from "../store/Viewport";
import { motion, AnimatePresence } from "framer-motion";

function Sacola() {
  const [isDelivery, setIsDelivery] = useState(true);
  const sacolaCtx = useContext(ProfileContext);
  const closeHandler = function () {
    sacolaCtx.modalSacolaHandler(false);
  };
  const isLarge = useViewport();
  const initialAnimation = isLarge
    ? { opacity: 0, x: 100 }
    : { opacity: 0, y: 100 };
  const exitAnimation = isLarge
    ? { opacity: 0.7, x: 600 }
    : { opacity: 0.7, y: 1000 };
  return (
    <>
      <AnimatePresence mode="wait">
        {sacolaCtx.isSacolaActive && (
          <ModalCotainer>
            <BagWrapper
              $large={isLarge.toString()}
              as={motion.div}
              initial={initialAnimation}
              animate={{ opacity: 1, x: 1, y: 1 }}
              exit={exitAnimation}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <SectionHeader
                className="header"
                title="Sacola"
                onClose={closeHandler}
                icon={
                  isLarge ? (
                    <EastTwoToneIcon />
                  ) : (
                    <ArrowDownwardTwoToneIcon />
                  )
                }
              />
              <Container>
                {isDelivery ? "Entrega" : "Retirada"}

                <Local />
                <Time />
                <BagItems />
              </Container>
            </BagWrapper>
          </ModalCotainer>
        )}
      </AnimatePresence>
    </>
  );
}

export default Sacola;
