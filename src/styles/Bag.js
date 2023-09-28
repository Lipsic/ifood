import styled, { css } from "styled-components";

export const BagWrapper = styled.div`
  width: ${(props) => (props.$large === "true" ? "50%" : "100%")};
  background-color: #f2f2f2;
  right: 0;
  min-height: 100vh;
  position: fixed;
  .header {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 1rem;
  }
`;
