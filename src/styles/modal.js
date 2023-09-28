import styled from "styled-components";

export const ModalWrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: transparent;
  top: 0;
  opacity: 1;
  z-index: 999;
  justify-content: end;
  .button {
    gap: 1em;
    justify-content: start;
  }
`;
