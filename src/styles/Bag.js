import styled, { css } from "styled-components";

export const BagWrapper = styled.div`
  width: ${(props) => (props.$large === "true" ? "40%" : "100%")};
  max-height: 100%;
  background-color: #f2f2f2;
  right: 0;
  min-height: 100vh;
  position: fixed;
  overflow: scroll;
  z-index: 1000;
  top: 0;
  bottom: 0;

  .header {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 1rem;
  }
`;
