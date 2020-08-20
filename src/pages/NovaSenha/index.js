import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import RecoverActions from "../../store/ducks/recover_senha";
import { FaArrowLeft, FaRegEnvelope, FaSpinner } from "react-icons/fa";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";

import Header from "../../components/Header";

import {
  Container,
  Content,
  Footer,
  Titulo,
  SubTitulo,
  Separator,
  Line,
  ButtonAcesso,
  BtnVoltar,
  Spinner,
} from "./styles";

const schema = Yup.object().shape({
  senha: Yup.string().required("Obrigatório"),
  confirmaSenha: Yup.string().required("Obrigatório"),
  token: Yup.string().required("Obrigatório"),
});

export default function NovaSenha({ history }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.recover_senha);

  const searchToken = history.location.search;
  const arrtoken = searchToken.split("=");
  const token = arrtoken[1];

  function resposta(msg, type, title) {
    Swal.fire({
      title: title,
      text: msg,
      icon: type,
      confirmButtonText: type == "error" ? "Ok" : "Minha Conta",
      onClose: () => {
        type == "error"
          ? window.location.reload(false)
          : history.push("/login");
      },
    });
  }

  async function handleSubmit(data) {
    dispatch(RecoverActions.recoverRequest(data, resposta));
  }
  return (
    <>
      <Container>
        <Header />
        <BtnVoltar to={"/"}>
          <FaArrowLeft />
          Voltar
        </BtnVoltar>
        <Content>
          <Titulo>CADASTRAR NOVA SENHA</Titulo>
          <SubTitulo>
            Preencha os campos abaixo para alterar sua senha de acesso.
          </SubTitulo>
          <Separator />
          <Form onSubmit={handleSubmit} schema={schema}>
            <Input name="token" id="token" value={token} />
            <Line>
              <label htmlFor="senha">Senha:</label>
              <Input name="senha" id="senha" type="password" />
            </Line>
            <Line>
              <label htmlFor="confirmaSenha">Confirmar Senha:</label>
              <Input name="confirmaSenha" id="confirmaSenha" type="password" />
            </Line>
            <ButtonAcesso>
              {loading && (
                <Spinner>
                  <FaSpinner />
                </Spinner>
              )}
              {!loading && "Salvar"}
            </ButtonAcesso>
          </Form>
          <Footer>
            <Link to={"/login"}>Lembrei minha senha</Link>
          </Footer>
        </Content>
      </Container>
    </>
  );
}
