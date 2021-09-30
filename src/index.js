import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./mocks";
// import dotenv from "dotenv";
import { Provider } from "react-redux";
import store from "./redux/store/index";

// const result = dotenv.config();

// if (result.error) {
//   throw result.error;
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
