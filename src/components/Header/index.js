import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthActions from "../../store/ducks/auth";

import {
  Container,
  Content,
  Logo,
  Separator,
  Titulo,
  SairBtn,
  AlunosBtn,
  VideosBtn,
} from "./styles";

import LogoImage from "../../assets/logo.png";

function Header({ history, sair }) {
  const dispatch = useDispatch();

  const { data: auth } = useSelector((state) => state.auth);

  function handleLogout() {
    dispatch(AuthActions.logoutRequest(history));
  }

  return (
    <Container>
      <Content>
        <Logo src={LogoImage}></Logo>
        <Separator />
        <Titulo>Treinamento Funcional</Titulo>
        {sair && (
          <>
            <SairBtn onClick={handleLogout}>Sair</SairBtn>
            {auth.admin == 1 && (
              <>
                <AlunosBtn to={"/alunos"}>Meus Alunos</AlunosBtn>
                <VideosBtn to={"/videos"}>Video-aulas</VideosBtn>
              </>
            )}
          </>
        )}
      </Content>
    </Container>
  );
}

export default withRouter(Header);
