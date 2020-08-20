import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #000;
  padding: 10px 0;
  max-height: 96px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Logo = styled.div`
  ${(props) => `background: url(${props.src}) no-repeat center center`};
  width: 215px;
  height: 80px;
`;

export const Separator = styled.span`
  width: 1px;
  height: 37px;
  background-color: #e8532e;
  margin: auto 10px;
  @media (max-width: 575px) {
    display: none;
  }
`;

export const Titulo = styled.p`
  color: #fff;
  font-size: 15px;
  margin: auto 0;
  width: 215px;
  font-family: "Chivo", sans-serif;
  font-weight: bold;
  text-align: center;
  @media (max-width: 575px) {
    display: none;
  }
`;

export const SairBtn = styled.span`
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: #ffd340;
  position: absolute;
  right: 10%;
  top: 6%;
  cursor: pointer;
`;

export const AlunosBtn = styled(Link)`
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: #ffd340;
  position: absolute;
  width: 104px;
  height: 19px;
  right: 13%;
  top: 6%;
  cursor: pointer;
`;

export const VideosBtn = styled(Link)`
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: #ffd340;
  position: absolute;
  width: 104px;
  height: 19px;
  right: 21%;
  top: 6%;
  cursor: pointer;
`;
