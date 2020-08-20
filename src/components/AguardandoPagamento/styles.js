import styled from "styled-components";

import Arm from "../../assets/arm.png";

export const Container = styled.div`
  width: 535px;
  height: 545px;
  background: #fff;
  margin: 77px 0 70px 0;
  border: 1px solid #d9d9d9;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: rgba(128, 128, 128, 0.14) 0px 3px 12px;
  -moz-box-shadow: rgba(128, 128, 128, 0.14) 0px 3px 12px;
  box-shadow: rgba(128, 128, 128, 0.14) 0px 3px 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 74px 70px 54px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 22px;

    input,
    textarea {
      padding: 24px;
      border-radius: 4px;
      border: 1px #6b6d76 solid;
      background-color: transparent;
      font-size: 14px;
      font-weight: 600;
      color: #000;
      width: 100%;
      height: 50px;
      margin-right: 16px;
      background-color: #f8f8f8;

      &:last-child {
        margin-right: 0;
      }
      &::placeholder {
        color: #081728;
      }
      &#idUser {
        display: none;
      }
    }

    span {
      color: #d13838;
    }
  }
`;

export const ImageArm = styled.div`
  width: 75px;
  height: 66px;
  background: url(${Arm}) no-repeat center center;
`;

export const Titulo = styled.h1`
  color: #000;
  font-size: 33px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  width: 242px;
  height: 84px;
  line-height: 37px;
  text-align: center;
  margin-top: 16px;
  &.salvar {
    width: 265px;
    height: 47px;
  }
`;

export const Subtitulo = styled.p`
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  line-height: 22px;
  text-align: center;
  width: 394px;
  height: 87px;
  letter-spacing: 1px;

  &.salvar {
    height: unset;
  }
`;

export const ButtonReenviar = styled.button.attrs({
  type: "submit",
})`
  display: flex;
  width: 224px;
  height: 60px;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 4px;
  background-color: #d13838;
  font-size: 18px;
  line-height: 22px;
  font-family: "Barlow", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  margin: 30px 0;

  &.salvar {
    margin: 20px 0 30px 0;
  }
`;

export const AlterarEmail = styled.p`
  color: #1bb983;
  text-decoration: underline;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 22px;
  flex-direction: column;
  align-items: flex-start;
  height: 85px;
  label {
    color: #fff;
    font-family: "Chivo", sans-serif;
    font-size: 15px;
    margin-bottom: 16px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  label {
    color: #000;
    font-family: "Chivo", sans-serif;
    font-size: 15px;
    margin-bottom: 16px;
  }

  @media (max-width: 575px) {
    width: 100%;
  }
`;
