import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  a {
    margin: 24px 0;
  }
  @media (max-width: 575px) {
    width: 70%;
    a {
      margin: 0 0 40px 0;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 80%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 80%;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 90%;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

export const Content = styled.div`
  width: 77%;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 140px;

  @media (max-width: 575px) {
    width: 100%;
    flex-direction: column;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 75%;
    margin: 0 auto;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
`;

export const Thumb = styled.div`
  ${(props) =>
    props.imagem && `background: url(${props.imagem}) no-repeat center center`};
  background-size: cover;

  @media (max-width: 575px) {
    background-size: cover;
    width: 100%;
    // height: 202px;
    // margin-bottom: 20px;
    height: 10rem;
    margin-bottom: 10px;
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
    height: 195px;
  }
  @media (min-width: 1200px) {
    width: 40%;
    height: 150px;
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
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    padding: 0;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 60%;
    min-height: 133px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 60%;
    min-height: 153px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 60%;
    min-height: 173px;
  }
  @media (min-width: 1200px) {
    width: 60%;
    min-height: 150px;
  }
`;

export const DataInfo = styled.span`
  ${(props) => props.num && props.num == 1 && `background: #E54375;`};
  ${(props) => props.num && props.num == 2 && `background: #1BB983;`};
  ${(props) => props.num && props.num == 3 && `background: #E8532E;`};
  ${(props) => props.num && props.num == 4 && `background: #7538D1;`};
  color: #fff;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 6px 10px;
  font-family: "Poppins", sans-serif;
`;

export const TitleInfo = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  font-weight: 700;
  ${({ type }) => {
    if (type == "baby") {
      return css`
        color: #f85395;
      `;
    } else {
      return css`
        color: #000;
      `;
    }
  }}
  line-height: 26px;
  @media (max-width: 575px) {
    margin: 10px 0;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const NomeInfo = styled.p`
  color: #767676;
  font-size: 16px;
  line-height: 15px;
  font-family: "Poppins", sans-serif;
  @media (max-width: 575px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const ContainerVideo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  padding: 20px 0;
`;

export const TituloVideo = styled.span`
  color: #0da7e2;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  max-width: 704px;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

export const SubTituloVideo = styled.span`
  ${({ type }) => {
    if (type == "baby") {
      return css`
        color: #f85395;
      `;
    } else {
      return css`
        color: #000;
      `;
    }
  }}
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  margin-left: 5px;
  font-family: "Poppins", sans-serif;
`;

export const VideoPlayerVideo = styled.div`
  text-align: center;
  margin: 25px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 575px) {
    width: 90%;
    height: 18rem;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 70%;
    height: 20rem;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 70%;
    height: 25rem;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 70%;
    height: 28rem;
  }
  @media (min-width: 1200px) {
    width: 67%;
    height: 30rem;
  }

  .videoYoutube {
    width: 100% !important;
    height: 100% !important;
  }
`;

export const DataInfoVideo = styled.span`
  background: #00a3e1;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  padding: 6px 10px;
  max-width: 125px;
  font-family: "Poppins", sans-serif;
`;

export const NomeInfoVideo = styled.span`
  color: #767676;
  font-size: 15px;
  margin-left: 16px;
  font-family: "Poppins", sans-serif;
  @media (max-width: 575px) {
    margin: 10px 0 0 0;
  }
`;

export const InfoVideo = styled.div`
  width: 60%;
  padding: 24px 0;
  margin-bottom: 16px;
  @media (max-width: 575px) {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
`;

export const SeparatorVideo = styled.span`
  height: 1px;
  width: 70%;
  background-color: #ccc;
`;
