import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import App from "./components/App";
import appReducer from "./reducers";
import { AUTH_USER } from "./actions/types";

import axios from 'axios';

window.axios = axios;

const store = createStore(appReducer, {}, applyMiddleware(reduxThunk));

const token = localStorage.getItem("token");


if (token) {
  store.dispatch({ type: AUTH_USER });
}
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.querySelector("#root")
);

console.log(process.env.NODE_ENV)