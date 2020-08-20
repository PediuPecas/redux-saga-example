import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import CadastroActions from "../../store/ducks/cadastro";
import { FaArrowLeft, FaRegEnvelope, FaSpinner, FaAt } from "react-icons/fa";
import { Form, Input, Textarea } from "@rocketseat/unform";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";

import ImageLogo from "../../assets/logotreinamento.png";

import Header from "../../components/Header";
import InputMask from "../../components/InputMask";

import {
  Container,
  Content,
  ContentLeft,
  ContentRight,
  BtnVoltar,
  DivPreco,
  DivTitulo,
  Titulo,
  Preco,
  DivFaca,
  TituloFaca,
  DescFaca,
  TituloCadastro,
  Line,
  Column,
  Separator,
  TituloDados,
  ButtonPagamento,
  Spinner,
  DivInstagram,
  ButtonInstagram,
} from "./styles";

const schema = Yup.object().shape({
  nome: Yup.string().required("Obrigatório"),
  senha1: Yup.string().required("Obrigatório"),
  senha2: Yup.string().required("Obrigatório"),
  email: Yup.string().email("E-mail inválido").required("Obrigatório"),
  confirmaremail: Yup.string().email("E-mail inválido").required("Obrigatório"),
  telefone: Yup.string().required("Obrigatório"),
  cpf: Yup.string().required("Obrigatório"),
  instagram: Yup.string(),
});

export default function Cadastro({ history }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.cadastro);

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

  function handleSubmit(data) {
    dispatch(CadastroActions.cadastroRequest(data, resposta));
  }
  return (
    <Container>
      <Header />
      <Content>
        <ContentLeft>
          <BtnVoltar to={"/"}>
            <FaArrowLeft />
            Voltar
          </BtnVoltar>
          <DivPreco>
            <DivTitulo>
              <img src={ImageLogo} width="42px" height="42px" />
              <Titulo>Treinamento Funcional</Titulo>
            </DivTitulo>
            <Preco>R$ 29,90</Preco>
          </DivPreco>
          <DivFaca>
            <FaRegEnvelope />
            <TituloFaca>Faça seu Cadastro</TituloFaca>
            <DescFaca>
              Preencha seus dados para se inscrever e assistir às aulas.
            </DescFaca>
          </DivFaca>
        </ContentLeft>
        <ContentRight>
          <TituloCadastro>Informações</TituloCadastro>
          <Form onSubmit={handleSubmit} schema={schema}>
            <Line>
              <label htmlFor="nome">Nome Completo:</label>
              <Input name="nome" id="nome" />
            </Line>
            <Line>
              <Column>
                <label htmlFor="celular">Celular:</label>
                <InputMask type="telefone" name="telefone" id="celular" />
              </Column>
              <Column>
                <label htmlFor="cpf">CPF:</label>
                <InputMask name="cpf" id="cpf" type="cpf" />
              </Column>
            </Line>
            <Line>
              <label htmlFor="instagram">Instagram:</label>
              <DivInstagram>
                <ButtonInstagram className="iconeBtn">
                  <FaAt />
                </ButtonInstagram>
                <Input name="instagram" id="instagram" />
              </DivInstagram>
            </Line>
            <Separator />
            <TituloDados>Dados de Acesso</TituloDados>
            <Line>
              <Column>
                <label htmlFor="email">E-mail:</label>
                <Input name="email" id="email" />
              </Column>
              <Column>
                <label htmlFor="confirmaremail">Confirmar e-mail:</label>
                <Input name="confirmaremail" id="confirmaremail" />
              </Column>
            </Line>
            <Line>
              <Column>
                <label htmlFor="senha1">Senha de acesso:</label>
                <Input name="senha1" type="password" id="senha1" />
              </Column>
              <Column>
                <label htmlFor="senha2">Confirme a senha:</label>
                <Input name="senha2" type="password" id="senha2" />
              </Column>
            </Line>
            <ButtonPagamento>
              {loading && (
                <Spinner>
                  <FaSpinner />
                </Spinner>
              )}
              {!loading && "Criar Conta"}
            </ButtonPagamento>
          </Form>
        </ContentRight>
      </Content>
    </Container>
  );
}
