import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./config/ReactotronConfig";
import { store, persistor } from "./store";

import GlobalStyle from "./styles/global";
import history from "./history";
import Routes from "./routes";

toast.configure();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/aulas">
          <GlobalStyle />
          <Routes history={history} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
