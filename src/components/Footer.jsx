import { useContext } from "react";
import { FooterMobStyles } from "../styles//mobile/FooterMobile";
import { Link, useLocation } from "react-router-dom";
import { ProfileContext } from "../store/ModalContext";
import ProfileBtn from "./ProfileBtn";

import { Button } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import SacolaBtn from "./BagButton";
import useViewport from "../store/Viewport";

const menuButtonsStyles = {
  flexDirection: "column",
  backgroundColor: "#f2f2f2",
  color: "black",
  gap: "1px",
};

function Footer() {
  const profileCtx = useContext(ProfileContext);
  const pathname = useLocation().pathname;
  const isLarge = useViewport();
  const clickHandler = function () {
    profileCtx.modalHandler(false);
  };

  return (
    <FooterMobStyles>
      {!isLarge && <SacolaBtn />}
      <div
        className="footer-button-group"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <Link to="/">
          <Button
            fullWidth
            startIcon={
              pathname === "/" && !profileCtx.isActive ? (
                <HomeIcon />
              ) : (
                <HomeOutlinedIcon />
              )
            }
            sx={menuButtonsStyles}
            variant="small"
            size="large"
            style={{ border: "none" }}
            onClick={clickHandler}
          >
            <p className={"label-btn"}>Início</p>
          </Button>
        </Link>
        <Link to="/busca">
          <Button
            fullWidth
            startIcon={
              pathname === "/busca" && !profileCtx.isActive ? (
                <SearchOutlinedIcon color="warning" />
              ) : (
                <SearchOutlinedIcon />
              )
            }
            sx={menuButtonsStyles}
            style={{ border: "none" }}
            onClick={clickHandler}
          >
            <p className={"label-btn"}>Buscar</p>
          </Button>
        </Link>

        <Link to="/pedidos">
          <Button
            fullWidth
            startIcon={
              pathname === "/pedidos" && !profileCtx.isActive ? (
                <ReceiptIcon />
              ) : (
                <ReceiptOutlinedIcon />
              )
            }
            sx={menuButtonsStyles}
            style={{ border: "none" }}
            onClick={clickHandler}
          >
            <p className={"label-btn"}>Pedidos</p>
          </Button>
        </Link>
        <ProfileBtn />
      </div>
    </FooterMobStyles>
  );
}

export default Footer;
