import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../components/Header";
import ListagemAlunos from "../../components/ListagemAlunos";
import Footer from "../../components/Footer";

import { Container } from "./styles";

export default function Alunos({ history }) {
  return (
    <>
      <Container>
        <Header sair />
        <ListagemAlunos />
        <Footer />
      </Container>
    </>
  );
}
