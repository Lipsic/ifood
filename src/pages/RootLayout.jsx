import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import GlobalStyles from "../styles/Globals";
import { createPortal } from "react-dom";
import Profile from "../containers/Profile";
import { ModalContextProvider } from "../store/ModalContext";
import { AnimatePresence } from "framer-motion";
import Bag from "../containers/Sacola";
import useViewport from "../store/Viewport";

function RootLayout() {
  const bagModal = createPortal(<Bag />, document.getElementById("modal"));

  const profileModal = createPortal(
    <Profile />,
    document.getElementById("modal")
  );

  const isLarge = useViewport();
  return (
    <>
      <ModalContextProvider>
        <Outlet />
        {bagModal}
        {profileModal}
        <AnimatePresence mode="wait">
          {!isLarge && <Footer />}
        </AnimatePresence>
        <GlobalStyles />
      </ModalContextProvider>
    </>
  );
}

export default RootLayout;
