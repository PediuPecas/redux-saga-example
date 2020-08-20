import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 62px 88px;
  width: 100%;

  a {
    margin: 24px 0;
  }
  @media (max-width: 575px) {
  }
  @media (min-width: 576px) and (max-width: 767px) {
  }
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (min-width: 992px) and (max-width: 1199px) {
  }

  @media (max-width: 1200px) {
  }
`;

export const Title = styled.h1`
  color: #141515;
  font-size: 37px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  line-height: 38px;
  text-transform: uppercase;
`;

export const Subtitle = styled.p`
  color: #767676;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  line-height: 22px;
  margin: 24px 0 32px 0;
`;

export const DivBotoes = styled.div`
  width: 718px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const BtnAzul = styled.button.attrs({
  type: "button",
})`
  width: 347px;
  height: 46px;
  border-radius: 4px;
  padding: 12px 21px;
  background-color: #fff;
  color: #1ad8d8;

  font-size: 16px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  line-height: 22px;
  position: relative;
  ${(props) =>
    props.setinha &&
    `
    background-color: #1ad8d8;
    color: #fff;

    &:after {
      content: "";
  
      width: 0;
      height: 0;
  
      position: absolute;
  
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: 7px solid #1ad8d8;
  
      bottom: -7px;
      left: 170px;
    }`};
`;

export const BtnBranco = styled.button.attrs({
  type: "button",
})`
  width: 347px;
  height: 46px;
  border-radius: 4px;
  padding: 12px 16px;
  background-color: #fff;
  color: #e8532e;
  font-size: 16px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  line-height: 22px;
  position: relative;

  ${(props) =>
    props.setinha &&
    `
    background-color: #e8532e;
    color: #fff;

    &:after {
      content: "";
  
      width: 0;
      height: 0;
  
      position: absolute;
  
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: 7px solid #e8532e;
  
      bottom: -7px;
      left: 170px;
    }`};
`;

export const Separator = styled.span`
  width: 80%;
  height: 1px;
  background-color: #c2c2c2;
  margin: 21px 0 36px 0;
`;

export const DivTable = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  @media (max-width: 1400px) {
    overflow-x: scroll;
  }
`;

export const Head = styled.div`
  display: flex;
  font-weight: bold;
  color: #000;
  font-size: 13px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  padding: 17px 27px;
  min-width: 1247px;
  justify-content: space-between;
`;

export const Nome = styled.p`
  min-width: 320px;
`;

export const Email = styled.p`
  min-width: 290px;
`;

export const Celular = styled.p`
  min-width: 155px;
`;

export const Instagram = styled.p`
  min-width: 170px;
  color: #0ab1b1;

  ${(props) =>
    props.pendente &&
    `
    min-width: 160px;`};

  ${(props) =>
    props.titulo &&
    `
    color: #000;`};
`;

export const Cpf = styled.p`
  min-width: 150px;
`;

export const DataCadastro = styled.p`
  min-width: 150px;
`;

export const Linha = styled.div`
  color: #6f717c;
  font-size: 15px;
  justify-content: space-between;
  font-family: "Chivo", sans-serif;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 6px;
  padding: 17px 27px;
  margin-bottom: 17px;
  min-width: 1247px;

  ${(props) =>
    props.pendente &&
    `
    min-width: 1290px;`};
`;

export const DivBotoesEmail = styled.p`
  min-width: 170px;
  input {
    display: none;
  }
  form {
    width: min-content;
  }
`;

export const Spinner = styled.span`
  animation: spin 1s linear infinite;
  font-size: 20px;
  width: 20px;
  height: 20px;
  color: #fff !important;
  margin: 0 auto;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const BtnNotificar = styled.button.attrs({
  type: "submit",
})`
  width: 172px;
  height: 34px;
  border-radius: 4px;
  padding: 6px 15px;
  background-color: #0ab1b1;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  line-height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 14px;
  }
`;

export const BtnNovamente = styled.button.attrs({
  type: "submit",
})`
  width: 172px;
  height: 34px;
  border-radius: 4px;
  padding: 6px 12px;
  background-color: #e8532e;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  line-height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 14px;
  }
`;
