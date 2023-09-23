import styled from "styled-components";

export const ModalWrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: #f2f2f2;
  top: 0;
  opacity: 1;
  z-index: 999;
  .button {
    gap: 1em;
    justify-content: start;
  }
`;
