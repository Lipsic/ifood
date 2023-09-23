import React from "react";
import { ModalWrapper } from "../styles/modal";
function ModalCotainer(props) {
  return <ModalWrapper>{props.children}</ModalWrapper>;
}

export default ModalCotainer;
