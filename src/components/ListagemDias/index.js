import React from "react";
import ReactPlayer from "react-player";

import { formatDate } from "../../formatters";

import {
  Container,
  Content,
  Thumb,
  DivInfo,
  DataInfo,
  TitleInfo,
  NomeInfo,
  ContainerVideo,
  TituloVideo,
  SubTituloVideo,
  SeparatorVideo,
  VideoPlayerVideo,
  InfoVideo,
  DataInfoVideo,
  NomeInfoVideo,
} from "./styles";

export default function ListagemDias({ videos }) {
  function hasMatches(titulo) {
    const matches = titulo.match(/Bebê|bebê|baby|Baby/gi);
    return Array.isArray(matches);
  }

  return (
    <>
      <ContainerVideo>
        {videos && videos[0] && (
          <>
            <TituloVideo>
              Aula do dia:
              <SubTituloVideo
                type={(hasMatches(videos[0].titulo) && "baby") || ""}
              >
                {videos[0].titulo}
              </SubTituloVideo>
            </TituloVideo>
            <VideoPlayerVideo>
              <ReactPlayer url={videos[0].urlvideo} className="videoYoutube" />
            </VideoPlayerVideo>
            <InfoVideo>
              <DataInfoVideo>{formatDate(videos[0].datavideo)}</DataInfoVideo>
              <NomeInfoVideo>Por {videos[0].autor}</NomeInfoVideo>
            </InfoVideo>
            <SeparatorVideo />
          </>
        )}
      </ContainerVideo>

      <Container>
        {videos &&
          videos.length > 1 &&
          videos
            .filter((v, i) => i > 0)
            .map((video, index) => {
              return (
                <a
                  href={video.urlvideo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Content>
                    <Thumb imagem={video.videoThumbnail} />
                    <DivInfo>
                      <DataInfo num={index + 1}>
                        {formatDate(video.datavideo)}
                      </DataInfo>
                      <TitleInfo
                        type={(hasMatches(video.titulo) && "baby") || ""}
                      >
                        {video.titulo}
                      </TitleInfo>
                      <NomeInfo>Por {video.autor}</NomeInfo>
                    </DivInfo>
                  </Content>
                </a>
              );
            })}
      </Container>
    </>
  );
}
