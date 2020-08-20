import React from "react";

import {
  Container,
  Header,
  Footer,
  Logo,
  Slogan,
  Titulo,
  SubTitulo,
  DivPreco,
  Preco,
  InfoPreco,
  DivBotoes,
  ButtonCadastro,
  ButtonEntrar,
  FooterPreco,
} from "./styles";

import LogoImage from "../../assets/logo.png";

export default function PreHome() {
  return (
    <>
      <Container>
        <Header>
          <Logo src={LogoImage}></Logo>
          <Slogan>Treinamento Funcional</Slogan>
        </Header>
        <Titulo>FaÇA EXERCÍCIOS EM CASA</Titulo>
        <SubTitulo>
          Cadastre-se e tenha acesso a vídeos exclusivos com aulas da professora
          Lívia Mietherhofer com treinamentos para serem realizados em casa!
        </SubTitulo>
        <DivPreco>
          <InfoPreco>cadastre-se por apenas:</InfoPreco>
          <Preco>R$ 29,90</Preco>
          <FooterPreco>Acesso disponível por 2 meses.</FooterPreco>
        </DivPreco>
        <DivBotoes>
          <ButtonCadastro to={"/cadastro"}>Cadastre-se</ButtonCadastro>
          <ButtonEntrar to={"/login"}>Entrar</ButtonEntrar>
        </DivBotoes>
        <Footer>
          Ir para{" "}
          <a href="http://topusperformance.com.br">topusperformance.com.br</a>
        </Footer>
      </Container>
    </>
  );
}
