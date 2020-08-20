import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "../pages/Home";
import PreHome from "../pages/PreHome";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import EsqueciSenha from "../pages/EsqueciSenha";
import pagamentoRecebido from "../pages/PagamentoRecebido";
import NovaSenha from "../pages/NovaSenha";
import Alunos from "../pages/Alunos";

export default function Routes() {
  const authed = useSelector((state) => state.auth.logado);

  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={PreHome} />
        <GuestRoute authed={authed} path="/login" component={Login} exact />
        <PrivateRoute authed={authed} path="/videos" component={Home} exact />

        <Route path="/pagamentoRecebido" exact component={pagamentoRecebido} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/esqueci" exact component={EsqueciSenha} />
        <Route path="/novaSenha" exact component={NovaSenha} />
        <Route path="/alunos" exact component={Alunos} />
      </Switch>
    </HashRouter>
  );
}

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
}

function GuestRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/videos" }} />
        )
      }
    />
  );
}
