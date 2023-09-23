import styled from "styled-components";
export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  position: relative;
  .header {
    width: 100%;
    margin-bottom: 5rem;
    padding-top: 1rem;
    display: flex;
    columns: 5rem 1fr;
  }
  .icon {
    position: absolute;
    left: 0;
    padding: 5px;
    margin-left: 1rem;
    color: #ea1d2c;
    z-index: 1;
  }
`;
