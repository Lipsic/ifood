import React, { useContext } from "react";
import { ProfileContainer } from "../styles/profile-styles";
import { ProfileContext } from "../store/ModalContext";
import { ButtonGroup, Button, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LoginIcon from "@mui/icons-material/Login";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SupportIcon from "@mui/icons-material/Support";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ModalCotainer from "../UI/ModalCotainer";
import SectionHeader from "../UI/SectionHeader";

function Perfil({ signClickHandler }) {
  const profileCtx = useContext(ProfileContext);

  const closeClickHandler = () => {
    profileCtx.modalHandler(false);
  };

  return (
    <>
      {profileCtx.isActive && (
        <ModalCotainer>
          <ProfileContainer
            as={motion.section}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 1 }}
            exit={{ opacity: 60, y: 0 }}
          >
            <SectionHeader
              icon={<ArrowBackIosNewIcon />}
              onClose={closeClickHandler}
              className="header"
              title={"\u00a0"}
            />
            <div>Modal de notificação de configuração</div>
            <div className="btn-group"></div>
            <ButtonGroup orientation="vertical" fullWidth size="large">
              <Button
                className="button"
                onClick={signClickHandler}
                startIcon={<LoginIcon />}
              >
                <Link to="sign">Entrar ou cadastrar</Link>
              </Button>
              <Button className="button" startIcon={<FavoriteIcon />}>
                Favoritos
              </Button>
              <Button className="button" startIcon={<SupportIcon />}>
                Ajuda
              </Button>
            </ButtonGroup>
            <p>Modal adicione à tela principal</p>
          </ProfileContainer>
        </ModalCotainer>
      )}
    </>
  );
}

export default Perfil;
