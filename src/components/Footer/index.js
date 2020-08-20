import React from "react";
import { Container, Endereco, Dev } from "./styles";
export default function Footer() {
  return (
    <>
      <Container>
        <Endereco>
          Topus Performance. Rua 21, 85, Vila Santa Cecília, Volta Redonda - RJ
        </Endereco>
        <Dev>Desenvolvido por Foco Comunicação.</Dev>
      </Container>
    </>
  );
}
