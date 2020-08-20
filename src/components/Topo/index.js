import React from "react";

import {
  Container,
  Titulo,
  SubTitulo,
  ButtonFiltro,
  Separator
} from "./styles";

export default function Topo() {
  return (
    <>
      <Container>
        <Titulo>Treine sem sair de casa</Titulo>
        <SubTitulo>
          Veja as rotinas de treino da Topus Performance pra você realizar
          sozinha(o) na sua casa.
        </SubTitulo>
        <ButtonFiltro>ultimos vídeos</ButtonFiltro>
        <Separator />
      </Container>
    </>
  );
}
