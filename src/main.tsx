import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

import App from "./App";
import store from "./store/index";

import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
