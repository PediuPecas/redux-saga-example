import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../components/Header";
import Topo from "../../components/Topo";
import ListagemDias from "../../components/ListagemDias";
import ListagemMes from "../../components/ListagemMes";
import Footer from "../../components/Footer";
import AguardandoPagamento from "../../components/AguardandoPagamento";

import statusPedidoAction from "../../store/ducks/status_pedido";

import api from "../../services/api";

import { Container } from "./styles";

export default function Home({ history }) {

  const [videos, setVideos] = useState([]);
  const [videosAgrupamento, setVideosAgrupamento] = useState({});
  const dispatch = useDispatch();

  const { loading: statusLoading, data: statusData } = useSelector(
    (state) => state.status
  );
  
  const authData = useSelector(state => state.auth.data);

  const fetchAllVideosCB = useCallback(async () => {
    const { data: response } = await api.get("video");
    setVideos(response.data);
  }, [api, setVideos]);

  const agruparVideosCB = useCallback(() => {
    if (videos.length === 0) return null;

    const agrupamento = {
      novos: [],
    };

    for (let i = 0; i < videos.length; i++) {
      if (i < 5) {
        agrupamento.novos.push(videos[i]);
      } else {
        const data = videos[i].datavideo;
        const mesAno = data.substring(0, 7);
        if (!agrupamento[mesAno]) agrupamento[mesAno] = [];
        agrupamento[mesAno].push(videos[i]);
      }
    }

    setVideosAgrupamento(agrupamento);
  }, [videos, setVideosAgrupamento]);

  const fetchStatusCB = useCallback(() => {
    dispatch(statusPedidoAction.statusRequest({ id: authData.id }));
  }, [history, authData]);

  useEffect(() => {
    fetchAllVideosCB();
  }, [fetchAllVideosCB]);

  useEffect(() => {
    agruparVideosCB();
  }, [agruparVideosCB]);

  useEffect(() => {
    fetchStatusCB();
  }, [fetchStatusCB]);

  function handleStatus() {
    if (statusData === null) {
      return <></>;
    }

    if (statusLoading) {
      return <h1>Carregando...</h1>;
    }

    if (statusData === false) {
      return <AguardandoPagamento user={authData} />;
    }

    return (
      <>
        <Topo />
        <ListagemDias videos={videosAgrupamento.novos || []} />
        <ListagemMes videos={videosAgrupamento} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Container>
        <Header sair />
        {handleStatus()}
      </Container>
    </>
  );
}
