import styled from "styled-components";
export const BuscaStyles = styled.div`
  padding: 0;
  margin: 0;
  .input {
    width: 100%;
    height: 2em;
    background-color: #ece8e8;
    border: none;
    border-radius: 5px;
    padding: 0.3rem;
    padding-left: 0.7rem;
  }
  .app-bar__busca {
    background-color: "transparent";
    border: "none";
    box-shadow: "none";
    padding: "1rem";
    box-shadow: "none";
  }
  .banner-overlay {
    position: relative;
    top: -105px;
    height: 98%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10;
  }
  .banner-text {
    position: absolute;
    color: #ece8e8;
    padding: 0.5rem;
    opacity: 1;
  }
`;
