import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #1b1e22;
  padding-bottom: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 0;
  max-width: 325px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

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

export const Titulo = styled.h1`
  color: #fff;
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  max-width: 130px;
  text-transform: uppercase;
  font-family: "Barlow", sans-serif;
  line-height: 42px;
  margin-bottom: 22px;
`;

export const SubTitulo = styled.p`
  color: #fff;
  font-family: "Chivo", sans-serif;
  font-size: 16px;
  height: 46px;
  max-width: 307px;
  text-align: center;
  line-height: 22px;
`;

export const Separator = styled.span`
  width: 321px;
  height: 2px;
  background-color: #ffd340;
  margin: 25px 0;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  flex-direction: column;
  align-items: flex-start;
  label {
    color: #fff;
    font-family: "Chivo", sans-serif;
    font-size: 15px;
    margin-bottom: 16px;
  }
`;

export const Footer = styled.p`
  color: #919191;
  font-family: "Chivo", sans-serif;
  font-size: 16px;
  text-align: center;
  margin-top: 30px;

  a {
    color: #ffd340;
    text-decoration: underline;
  }
`;

export const ButtonAcesso = styled.button.attrs({
  type: "submit",
})`
  display: flex;
  width: 100%;
  height: 53px;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 4px;
  background-color: #d13838;
  font-size: 18px;
  font-family: "Barlow", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  margin-top: 24px;
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
  left: -30%;
  position: relative;
  margin-top: 40px;
}
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
