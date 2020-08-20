import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background-color: #ebebeb;
  @media (max-width: 575px) {
    flex-direction: column;
    padding: 20px 0;
    justify-content: space-between;
  }
  @media (min-width: 576px) {
    max-height: 98px;
    height: 98px;
  }
`;

export const Endereco = styled.p`
  text-align: center;
  color: #000;
  width: 50%;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  @media (max-width: 575px) {
    margin-bottom: 20px;
  }
`;

export const Dev = styled.p`
  text-align: center;
  color: #000;
  width: 50%;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
`;
