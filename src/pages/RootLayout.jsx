import React, { useState } from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import GlobalStyles from "../styles/Globals";
import { createPortal } from "react-dom";
import Perfil from "../containers/Perfil";
import { ModalContextProvider } from "../store/ModalContext";
import { AnimatePresence } from "framer-motion";
import Sacola from "../containers/Sacola";

function RootLayout() {
  const sacolaModal = createPortal(
    <Sacola />,
    document.getElementById("modal")
  );

  const profileModal = createPortal(
    <Perfil />,
    document.getElementById("modal")
  );
  return (
    <>
      <Outlet />
      <AnimatePresence mode="wait">
        <ModalContextProvider>
          {profileModal}
          {sacolaModal}
          <Footer />
        </ModalContextProvider>
      </AnimatePresence>
      <GlobalStyles />
    </>
  );
}

export default RootLayout;
