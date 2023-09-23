import { Container } from "@mui/material";
import { MainContainerStyles } from "../../styles/home/MainContainer";

import React from "react";

function MainContainer(props) {
  return (
    <MainContainerStyles>
      <Container className="main-container" maxWidth="100%">
        {props.children}
      </Container>
    </MainContainerStyles>
  );
}

export default MainContainer;
