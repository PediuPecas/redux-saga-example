import React, { useState, useEffect, useCallback } from "react";
import Select from "react-select";

import { formatDate } from "../../formatters";

import {
  Container,
  Content,
  Separator,
  Title,
  InfoContent,
  Thumb,
  DivInfo,
  DataInfo,
  TitleInfo,
  NomeInfo,
} from "./styles";

const stylesCustom = {
  control: () => ({
    width: 150,
    display: "flex",
    color: "#18B2EC",
  }),
};

export default function ListagemMes({ videos }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);

  function handleChange(value) {
    setSelectedOption(value);
  }

  function renderVideos() {
    const { novos, ...rest } = videos;

    return (
      <Content>
        {rest &&
          selectedOption &&
          rest[selectedOption.value].map((video) => {
            return (
              <a
                href={video.urlvideo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InfoContent>
                  <Thumb imagem={video.videoThumbnail} />
                  <DivInfo>
                    <DataInfo num={1}>{formatDate(video.datavideo)}</DataInfo>
                    <TitleInfo>{video.titulo}</TitleInfo>
                    <NomeInfo>Por {video.autor}</NomeInfo>
                  </DivInfo>
                </InfoContent>
              </a>
            );
          })}
      </Content>
    );
  }

  const setOptionsCB = useCallback(() => {
    const { novos, ...rest } = videos;
    const mesesAno = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];
    const options = [];
    Object.keys(rest).forEach((anoMes) => {
      // const ano = anoMes.split("-")[0];
      const mes = mesesAno[Number(anoMes.split("-")[1]) - 1];
      options.push({ value: anoMes, label: `${mes}` });
    });
    setOptions(options);
    setSelectedOption(options[0]);
  }, [videos, setOptions, setSelectedOption]);

  useEffect(() => {
    setOptionsCB();
  }, [setOptionsCB]);

  return (
    <Container>
      <Title>Aulas Anteriores</Title>
      <Select
        defaultValue={options[0]}
        options={options}
        styles={stylesCustom}
        onChange={handleChange}
        value={selectedOption}
      />
      <Separator />

      {renderVideos()}
    </Container>
  );
}
