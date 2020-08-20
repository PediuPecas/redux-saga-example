import React from "react";

import {
  Container,
  Header,
  Logo,
  Slogan,
  Titulo,
  SubTitulo,
  DivPreco,
  Preco,
  InfoPreco,
  DivBotoes,
  ButtonEntrar,
  Check,
} from "./styles";

import LogoImage from "../../assets/logo.png";
import CheckImage from "../../assets/check.png";

export default function PagamentoRecebido() {
  return (
    <>
      <Container>
        <Header>
          <Logo src={LogoImage}></Logo>
          <Slogan>Treinamento Funcional</Slogan>
        </Header>
        <Check src={CheckImage}></Check>
        <Titulo>Pedido Realizado!</Titulo>
        <SubTitulo>
          Recebemos seu pedido de compra. Após a confirmação do pagamento pelo
          PayPal seu acesso será liberado e você já poderá assistir às aulas!
        </SubTitulo>
        <ButtonEntrar to={"/login"}>Entrar</ButtonEntrar>
      </Container>
    </>
  );
}
