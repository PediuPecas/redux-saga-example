import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1920px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #1b1e22;
  padding-bottom: 40px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
  }
  @media (min-width: 1200px) {
  }
`;

export const ContentLeft = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 79px 5% 0 10%;

  @media (max-width: 991px) {
    width: 90%;
    padding: 40px 5% 0 5%;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    padding-right: 2%;
    padding-left: 3%;
  }
  @media (min-width: 1200px) {
  }
`;

export const BtnVoltar = styled(Link)`
  display: flex;
  color: #fff;
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  font-weight: bold;
  justify-content: space-evenly;
  align-items: center;
  max-width: 90px;
  text-transform: uppercase;
  margin-bottom: 40px;
`;

export const DivPreco = styled.div`
  background-color: #2b2e32;
  width: 358px;
  height: 81px;
  padding: 0 30px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 6px;
  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const DivTitulo = styled.div`
  width: 70%;
  height: 42px;
  display; flex;
  flex-direction: row;
`;

export const DivLogo = styled.div`
  width: 42px;
  height: 42px;
  background-size: cover;
`;

export const Titulo = styled.span`
  color: #fff;
  font-family: "Barlow", sans-serif;
  font-size: 17px;
  font-weight: bold;
  width: 103px !important;
  height: 41px;
  position: absolute;
  margin-left: 12px;
`;

export const Preco = styled.span`
  color: #fff;
  font-family: "Barlow", sans-serif;
  font-size: 20px;
  font-weight: 500;
`;

export const ContentRight = styled.div`
  width: 60%;
  padding: 79px 10% 0 5%;
  @media (max-width: 575px) {
    width: 90%;
    padding: 30px 5% 0 5%;
  }
  @media (min-width: 576px) and (max-width: 991px) {
    width: 90%;
    padding: 79px 5% 0 5%;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    padding-right: 2%;
    padding-left: 3%;
  }
  @media (min-width: 1200px) {
  }
  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      padding: 24px;
      border-radius: 4px;
      border: 1px #6b6d76 solid;
      background-color: transparent;
      font-size: 14px;
      font-weight: 600;
      color: #c4c4c4;
      width: 100%;
      height: 50px;
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
      &::placeholder {
        color: #081728;
      }
    }

    span {
      color: #d13838;
    }
  }
`;

export const DivFaca = styled.div`
  background-color: #2b2e32;
  width: 358px;
  height: 275px;
  padding: 40px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 6px;

  svg {
    color: #ffd340;
    width: 55px;
    height: 43px;
  }

  @media (max-width: 991px) {
    height: 110px;
    padding: 0;
    background-color: unset;
    svg {
      display: none;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
  }
  @media (min-width: 1200px) {
  }
`;

export const TituloFaca = styled.h1`
  color: #fff;
  font-family: "Barlow", sans-serif;
  font-size: 26px;
  font-weight: 900;
  text-transform: uppercase;
  width: 128px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const DescFaca = styled.span`
  color: #fff;
  font-family: "Chivo", sans-serif;
  font-size: 16px;
  width: 280px;
`;

export const TituloCadastro = styled.h1`
  color: #fff;
  font-family: "Barlow", sans-serif;
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;

  &:first-child {
    flex-direction: column;
    align-items: flex-start;
    label {
      color: #fff;
      font-family: "Chivo", sans-serif;
      font-size: 15px;
      margin-bottom: 16px;
    }
  }

  &:nth-child(3) {
    flex-direction: column;
    align-items: flex-start;
    label {
      color: #fff;
      font-family: "Chivo", sans-serif;
      font-size: 15px;
      margin-bottom: 16px;
    }
  }
  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

export const DivInstagram = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding-left: 30px !important;
  }
`;

export const ButtonInstagram = styled.button.attrs({
  type: "button",
})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  border: none;
  background: transparent;
  outline: none;
  height: 100%;
  width: 35px;
  font-size: 16px;
  color: #ffd340;
  padding-top: 4px;
  cursor: default;
  svg {
    cursor: default;
    margin: 0 auto;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 48%;
  margin-bottom: 16px;

  label {
    color: #fff;
    font-family: "Chivo", sans-serif;
    font-size: 15px;
    margin-bottom: 16px;
  }

  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: #081728;
  margin-bottom: 24px;
`;

export const Separator = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #b4b4b4;
  margin: 44px 0 36px 0;
  @media (max-width: 575px) {
    margin: 0 0 30px 0;
  }
`;

export const TituloDados = styled.h1`
  color: #fff;
  font-family: "Barlow", sans-serif;
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const ButtonPagamento = styled.button.attrs({
  type: "submit",
})`
  display: flex;
  width: 240px;
  height: 53px;
  padding: 16px 32px;
  border-radius: 4px;
  background-color: #d13838;
  font-size: 18px;
  font-family: "Barlow", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  justify-content: center;
`;

export const Spinner = styled.span`
  animation: spin 1s linear infinite;
  font-size: 20px;
  width: 20px;
  height: 20px;
  color: #fff !important;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
