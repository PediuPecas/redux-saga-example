import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #000;
  padding: 20px 0;
  font-family: "Poppins", sans-serif;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 0 40px 0;

  @media (max-width: 575px) {
    width: 100%;
    a {
      width: 100%;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 100%;
    a {
      width: 100%;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    a {
      width: 100%;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 90%;
    a {
      width: 50%;
    }
  }
  @media (min-width: 1200px) {
    width: 90%;
    max-width: 1200px;
    a {
      width: 50%;
    }
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin: 20px 0;
`;

export const Separator = styled.span`
  height: 1px;
  width: 68.5%;
  background-color: #ccc;
  margin: 40px 0 20px 0;
`;

export const InfoContent = styled.div`
  width: 48%;
  margin: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  @media (max-width: 575px) {
    flex-direction: column;
    width: 90%;
    margin: 20px auto;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 80%;
    margin: 20px auto;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 80%;
    margin: 20px auto;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 100%;
    height: 120px;
  }

  @media (min-width: 1200px) {
    width: 100%;
    padding: 0 13px;
  }
`;

export const Thumb = styled.div`
  width: 40%;
  height: 120px;
  ${props =>
    props.imagem && `background: url(${props.imagem}) no-repeat center center`};
  background-size: contain;
  @media (max-width: 575px) {
    width: 100%;
    height: 202px;
    margin-bottom: 20px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 40%;
    height: 155px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 40%;
    height: 175px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 40%;
    height: 175px;
  }
  @media (min-width: 1200px) {
    width: 40%;
    height: 137px;
  }
`;

export const DivInfo = styled.div`
  width: 60%;
  margin: 0;
  padding: 0 0 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 575px) {
    width: 85%;
    height: 100px;
    margin-bottom: 20px;
    padding: 0 25px 0 25px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 60%;
    height: 100px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 60%;
    min-height: 153px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 60%;
    height: 122px;
  }
  @media (min-width: 1200px) {
    width: 60%;
    min-height: 125px;
  }
`;

export const DataInfo = styled.span`
  ${props =>
    (props.num && props.num == 1 && `background: #E54375;`) ||
    (props.num == 5 && `background: #E54375;`)};
  ${props =>
    (props.num && props.num == 3 && `background: #1BB983;`) ||
    (props.num == 7 && `background: #1BB983;`)};
  ${props =>
    (props.num && props.num == 2 && `background: #E8532E;`) ||
    (props.num == 6 && `background: #E8532E;`)};
  ${props =>
    (props.num && props.num == 4 && `background: #7538D1;`) ||
    (props.num == 8 && `background: #7538D1;`)};
  color: #fff;
  padding: 4px;
  font-size: 12px;
  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 10px;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const TitleInfo = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  line-height: 25px;
  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 17px;
  }
  @media (min-width: 1200px) {
    font-size: 23px;
  }
`;

export const NomeInfo = styled.p`
  color: #767676;
  font-size: 15px;
  line-height: 15px;
  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 13px;
  }
  @media (min-width: 1200px) {
    font-size: 19px;
  }
`;
