import axios from "axios";
import { FETCH_USER, AUTH_USER, LOG_OUT } from "./types";

export const SignUserUp = ({ email, password }) => async dispatch => {
  const res = await axios.post("/user/signup", { email, password });

  dispatch({ type: AUTH_USER });

  localStorage.setItem("token", res.data.token);

  history.push("/");
};

export const SignUserIn = ({ email, password }) => async dispatch => {
  const res = await axios.post("/user/signin", { email, password });
  dispatch({ type: AUTH_USER });
  localStorage.setItem("token", res.data.token);

  history.push("/");
};

export const Logout = () => {
  localStorage.removeItem("token");

  history.push("/signin");

  return { type: LOG_OUT };
};