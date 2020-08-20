import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import EmailActions from "../../store/ducks/email_alterar";
import EmailReenviarActions from "../../store/ducks/email_reenviar";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";

import {
  Container,
  ImageArm,
  Titulo,
  Subtitulo,
  ButtonReenviar,
  AlterarEmail,
  Content,
  Line,
  Column,
} from "./styles";

const schema = Yup.object().shape({
  confirmaremail: Yup.string().email("E-mail inválido").required("Obrigatório"),
  email: Yup.string().email("E-mail inválido").required("Obrigatório"),
  idUser: Yup.string().required("Obrigatório"),
});

const schema2 = Yup.object().shape({
  idUser: Yup.string().required("Obrigatório"),
});

export default function AguardandoPagamento({ user }) {
  const [show, setShow] = useState(0);
  const dispatch = useDispatch();
  async function handleSubmit(data) {
    dispatch(EmailActions.emailRequest(data, resposta));
  }

  async function handleSubmit2(data) {
    dispatch(EmailReenviarActions.emailRequest(data, resposta2));
  }

  function resposta(msg, type, title) {
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
  return (
    <>
      <Container>
        {show === 0 && (
          <Content active={show === 0}>
            <ImageArm />
            <Titulo>Aguardando Pagamento</Titulo>
            <Subtitulo>
              Enviamos para o seu e-mail um link para pagamento do curso. Após a
              confirmação do pagamento pelo PayPal seu acesso será liberado e
              você já poderá assistir às aulas!
            </Subtitulo>
            <Form onSubmit={handleSubmit2} schema={schema2}>
              <Input name="idUser" id="idUser" value={user.id} />
              <ButtonReenviar>Reenviar E-mail</ButtonReenviar>
            </Form>
            <AlterarEmail onClick={() => setShow(1)}>
              Alterar e-mail de cadastro
            </AlterarEmail>
          </Content>
        )}
        {show === 1 && (
          <Content active={show === 1}>
            <Titulo className="salvar">ALTERAR E-MAIL</Titulo>
            <Subtitulo className="salvar">
              Digite um novo endereço de e-mail para acessar sua conta.
            </Subtitulo>
            <Form onSubmit={handleSubmit} schema={schema}>
              <Input name="idUser" id="idUser" value={user.id} />
              <Line>
                <Column>
                  <label htmlFor="email">E-mail:</label>
                  <Input name="email" id="email" />
                </Column>
              </Line>
              <Line>
                <Column>
                  <label htmlFor="confirmaremail">Confirmar E-mail:</label>
                  <Input name="confirmaremail" id="confirmaremail" />
                </Column>
              </Line>
              <ButtonReenviar>Salvar E-mail</ButtonReenviar>
            </Form>

            <AlterarEmail onClick={() => setShow(0)}>Cancelar</AlterarEmail>
          </Content>
        )}
      </Container>
    </>
  );
}
