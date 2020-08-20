import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import AuthActions from "../../store/ducks/auth";
import { FaArrowLeft, FaRegEnvelope, FaSpinner } from "react-icons/fa";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";

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
  email: Yup.string().email("E-mail inválido").required("Obrigatório"),
});

export default function Login({ history }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  async function handleSubmit(data) {
    dispatch(AuthActions.loginRequest(data, history));
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
          <Titulo>Entrar</Titulo>
          <SubTitulo>
            Digite seu e-mail e senha para acessar as aulas.
          </SubTitulo>
          <Separator />
          <Form onSubmit={handleSubmit} schema={schema}>
            <Line>
              <label htmlFor="email">E-mail:</label>
              <Input name="email" id="email" />
            </Line>
            <Line>
              <label htmlFor="senha">Senha de acesso:</label>
              <Input name="senha" id="senha" type="password" />
            </Line>
            <ButtonAcesso>
              {loading && (
                <Spinner>
                  <FaSpinner />
                </Spinner>
              )}
              {!loading && "Acessar Aulas"}
            </ButtonAcesso>
          </Form>
          <Footer>
            <Link to={"/esqueci"}>Esqueci minha senha</Link>
          </Footer>
        </Content>
      </Container>
    </>
  );
}
