import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  padding: 40px 0;
  height: 250px;
`;

export const Titulo = styled.h1`
  color: #000;
  font-family: "Poppins", sans-serif;
  font-size: 37px;
  font-weight: bold;
  width: 90%;
  max-width: 303px;
  line-height: 30px;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const SubTitulo = styled.p`
  width: 90%;
  max-width: 364px;
  font-size: 15px;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

export const ButtonFiltro = styled.button`
  color: #00a3e1;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;

export const Separator = styled.span`
  height: 1px;
  width: 100%;
  background-color: #ccc;
`;
