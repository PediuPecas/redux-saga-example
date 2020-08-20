import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegEnvelope, FaSpinner } from "react-icons/fa";

import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";

import { formatDate, formatDate2 } from "../../formatters";
import Paginator from "../../components/Paginator";
import AlunosAction from "../../store/ducks/alunos";
import EmailNotificarActions from "../../store/ducks/email_notificar";

import {
  Container,
  Title,
  Subtitle,
  DivBotoes,
  BtnAzul,
  BtnBranco,
  Separator,
  DivTable,
  Head,
  Nome,
  Email,
  Celular,
  Instagram,
  Cpf,
  DataCadastro,
  Linha,
  DivBotoesEmail,
  BtnNotificar,
  BtnNovamente,
  Spinner,
} from "./styles";

const schema2 = Yup.object().shape({
  idUser: Yup.string().required("Obrigatório"),
});

export default function ListagemAlunos() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState({
    pagamento: "pago",
    count: 10,
    page: 1,
  });

  const notifyingAlunoId = useSelector(
    (state) => state.email_notificar.notifyingAlunoId
  );

  const { data: alunos, pagination, loading } = useSelector(
    (state) => state.alunos
  );

  const loadingNotificar = useSelector(
    (state) => state.email_notificar.loading
  );

  async function handleSubmit2(data) {
    dispatch(EmailNotificarActions.emailNotificarRequest(data, resposta2));
  }

  function resposta2(msg, type, title) {
    Swal.fire({
      title: title,
      text: msg,
      icon: type,
      confirmButtonText: "Ok",
      onClose: () => {
        window.location.reload(false);
      },
    });
  }

  function handleTabClick(pagamento) {
    setQuery((state) => ({ ...state, pagamento }));
  }

  function handlePageChange(page) {
    setQuery((state) => ({ ...state, page }));
  }

  function limita(str) {
    var nova = "";
    var tamanho = str.length;

    if (tamanho > 40) {
      for (var i = 0; i < 40; i++) {
        nova = nova + str.substr(i, 1);
      }
      return nova + "...";
    } else {
      return str;
    }
  }

  function renderList() {
    let HeadComponent;

    switch (query.pagamento) {
      case "pago":
        HeadComponent = (
          <Head>
            <Nome>Nome:</Nome>
            <Email>E-mail:</Email>
            <Celular>Celular:</Celular>
            <Instagram titulo>Instagram:</Instagram>
            <Cpf>CPF:</Cpf>
            <DataCadastro>Data de Cadastro:</DataCadastro>
          </Head>
        );
        break;
      case "pendente":
        HeadComponent = (
          <Head>
            <Nome>Nome:</Nome>
            <Email>E-mail:</Email>
            <Celular>Celular:</Celular>
            <Instagram titulo pendente>
              Instagram:
            </Instagram>
            <DataCadastro>Data de Cadastro:</DataCadastro>
            <DivBotoesEmail></DivBotoesEmail>
          </Head>
        );
        break;
    }

    function alunosMapper(aluno) {
      if (query.pagamento === "pago") {
        return (
          <Linha key={aluno.id}>
            <Nome>{limita(aluno.nome)}</Nome>
            <Email>{aluno.email}</Email>
            <Celular>{aluno.celular}</Celular>
            <Instagram>@{aluno.instagram}</Instagram>
            <Cpf>{aluno.cpf}</Cpf>
            <DataCadastro>{formatDate2(aluno.data_cadastro)}</DataCadastro>
          </Linha>
        );
      }

      if (query.pagamento === "pendente") {
        return (
          <Linha pendente key={aluno.id}>
            <Nome>{limita(aluno.nome)}</Nome>
            <Email>{aluno.email}</Email>
            <Celular>{aluno.celular}</Celular>
            <Instagram pendente>@{aluno.instagram}</Instagram>
            <DataCadastro>{formatDate2(aluno.data_cadastro)}</DataCadastro>
            <DivBotoesEmail>
              <Form onSubmit={handleSubmit2} schema={schema2}>
                <Input name="idUser" id="idUser" value={aluno.id} />
                {aluno.email_enviado == 0 && (
                  <BtnNotificar disabled={loadingNotificar}>
                    {(loadingNotificar && notifyingAlunoId == aluno.id && (
                      <Spinner>
                        <FaSpinner />
                      </Spinner>
                    )) || (
                      <>
                        <FaRegEnvelope />
                        Notificar por e-mail
                      </>
                    )}
                  </BtnNotificar>
                )}
                {aluno.email_enviado > 0 && (
                  <BtnNovamente disabled={loadingNotificar}>
                    {(loadingNotificar && notifyingAlunoId == aluno.id && (
                      <Spinner>
                        <FaSpinner />
                      </Spinner>
                    )) || (
                      <>
                        <FaRegEnvelope />
                        Notificar Novamente
                      </>
                    )}
                  </BtnNovamente>
                )}
              </Form>
            </DivBotoesEmail>
          </Linha>
        );
      }
    }

    const ListComponent = alunos.map((aluno) => alunosMapper(aluno));

    return (
      <DivTable>
        {HeadComponent}
        {ListComponent}
      </DivTable>
    );
  }

  const fetchAlunosCB = useCallback(() => {
    dispatch(AlunosAction.alunosRequest(query));
  }, [dispatch, query]);

  useEffect(() => {
    fetchAlunosCB();
  }, [fetchAlunosCB]);

  return (
    <>
      <Container>
        {/* {alunos &&
          alunos.map((aluno, index) => {
            return <Title>Lista de Alunos</Title>;
          })} */}
        {/* <pre>{JSON.stringify(alunos, null, 2)}</pre> */}
        <Title>Lista de Alunos</Title>
        <Subtitle>Alunos cadastrados na plataforma de vídeo-aulas.</Subtitle>
        <DivBotoes>
          <BtnAzul
            onClick={() => handleTabClick("pago")}
            setinha={query.pagamento === "pago"}
          >
            Alunos que realizaram o pagamento
          </BtnAzul>
          <BtnBranco
            onClick={() => handleTabClick("pendente")}
            setinha={query.pagamento === "pendente"}
          >
            Cadastros com pagamento pendente
          </BtnBranco>
        </DivBotoes>
        <Separator />
        {renderList()}
        <Paginator pagination={pagination} onPageChange={handlePageChange} />
      </Container>
    </>
  );
}
