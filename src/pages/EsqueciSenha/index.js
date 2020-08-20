import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeft, FaRegEnvelope } from "react-icons/fa";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";

import EsqueciActions from "../../store/ducks/esqueci_senha";
import Header from "../../components/Header";

import {
  Container,
  Content,
  Titulo,
  SubTitulo,
  Separator,
  Line,
  ButtonContinuar,
  ButtonReenviar,
  BtnVoltar,
} from "./styles";

const schema = Yup.object().shape({
  email: Yup.string().email("E-mail inválido").required("Obrigatório"),
});

export default function EsqueciSenha() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(0);

  const formValue = null;

  function resposta(msg, type, title) {
    Swal.fire({
      title: title,
      text: msg,
      icon: type,
      confirmButtonText: "OK",
      onClose: () => {},
    });
  }

  function handleSubmit(data) {
    dispatch(EsqueciActions.esqueciRequest(data, resposta));
    setShow(1);
  }
  return (
    <>
      <Container>
        <Header />
        <BtnVoltar to={"/login"}>
          <FaArrowLeft />
          Voltar
        </BtnVoltar>
        <Content>
          <Titulo>Esqueci minha senha</Titulo>
          <SubTitulo>
            Digite seu e-mail que lhe enviaremos um link para você alterar sua
            senha de acesso.
          </SubTitulo>
          <Separator />
          <Form onSubmit={handleSubmit} schema={schema}>
            <Line>
              <label for="email">E-mail:</label>
              <Input name="email" id="email" value={formValue} />
            </Line>
            {show === 0 && <ButtonContinuar>Continuar</ButtonContinuar>}
            {show === 1 && <ButtonReenviar>Reenviar E-mail</ButtonReenviar>}
          </Form>
        </Content>
      </Container>
    </>
  );
}
