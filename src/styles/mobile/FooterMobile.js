import styled from "styled-components";
export const FooterMobStyles = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: #ccc 1px solid;
  z-index: 10;
  justify-content: center;
  background-color: #f2f2f2;
  padding-bottom: 0.3rem;
  .footer-button-group {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  a {
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
  .label-btn {
    font-size: 11px;
    color: #aaa;
    padding: 0;
    margin-bottom: 0;
  }
  svg,
  img,
  .MuiButton-startIcon {
    width: 1.2em;
    height: 1.2em;
  }

  .link-navbar__mobile {
    position: relative;
    background-color: #aaa;
    opacity: 0.3;
    height: 100%;
    width: 100%;
  }
`;
