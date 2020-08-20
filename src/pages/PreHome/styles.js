import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #141515;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3%;

  @media (max-width: 575px) {
    padding: 8% 3%;
  }
`;

export const Logo = styled.div`
  ${(props) => `background: url(${props.src}) no-repeat center center`};
  background-size: cover;
  width: 215px;
  height: 80px;
  @media (max-width: 575px) {
    width: 169px;
    height: 62px;
    margin: 0 auto;
  }
`;

export const Slogan = styled.p`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  color: #ffd340;
  text-align: center;
  font-family: "Barlow", sans-serif;
  @media (max-width: 575px) {
    font-size: 18px;
  }
`;

export const Titulo = styled.h1`
  color: #fff;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  max-width: 480px;
  text-transform: uppercase;
  font-family: "Barlow", sans-serif;
  line-height: 56px;

  @media (max-width: 575px) {
    width: 90%;
    font-size: 30px;
    line-height: 35px;
    margin: 0 auto;
  }
`;

export const SubTitulo = styled.p`
  color: #fff;
  font-family: "Chivo", sans-serif;
  font-size: 16px;
  max-width: 516px;
  text-align: center;
  line-height: 20px;
  @media (max-width: 575px) {
    width: 80%;
  }
`;

export const DivPreco = styled.div`
  display: flex;
  flex-direction: column;
  justfy-content: center;
  align-items: center;
`;

export const InfoPreco = styled.span`
  color: #919191;
  font-family: "Barlow", sans-serif;
  font-size: 17px;
  font-weight: bold;
  text-transform: uppercase;
  @media (max-width: 575px) {
    font-size: 15px;
  }
`;

export const Preco = styled.p`
  color: #ffd340;
  font-family: "Barlow", sans-serif;
  font-size: 38px;
  @media (max-width: 575px) {
    font-size: 32px;
  }
`;

export const Header = styled.div``;

export const DivBotoes = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 405px;
  width: 405px;
  justify-content: space-between;
  @media (max-width: 575px) {
    width: 90%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 115px;
  }
`;

export const ButtonCadastro = styled(Link)`
  width: 190px;
  font-family: "Barlow", sans-serif;
  background-color: #ffd340;
  color: #000;
  font-weight: bold;
  font-size: 17px;
  text-transform: uppercase;
  border-radius: 4px;
  text-align: center;
  padding: 16px 29px;
`;

export const ButtonEntrar = styled(Link)`
  width: 190px;
  font-family: "Barlow", sans-serif;
  background-color: #d13838;
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  text-transform: uppercase;
  border-radius: 4px;
  text-align: center;
  padding: 16px 29px;
`;

export const Footer = styled.p`
  color: #919191;
  font-family: "Chivo", sans-serif;
  font-size: 16px;
  text-align: center;

  a {
    color: #fff;
    text-decoration: underline;
  }
`;

export const FooterPreco = styled.p`
  color: #919191;
  font-family: "Chivo", sans-serif;
  font-size: 13px;
  text-align: center;
  margin-top: 16px;
`;
