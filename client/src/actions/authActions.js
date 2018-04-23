import axios from "axios";
import { FETCH_USER, AUTH_USER, LOG_OUT, AUTH_ERROR } from "./types";
import history from "../utilities/history";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/user", {
    headers: { authorization: localStorage.getItem("token") }
  });
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const SignUserUp = ({ email, password }) => async dispatch => {
  try {
    const res = await axios.post("/user/signup", { email, password });

    dispatch({ type: AUTH_USER });

    localStorage.setItem("token", res.data.token);

    history.push("/");
  } catch (error) {
    dispatch(authError("Your Input Is Not Valid. Please, Try again."));
  }
};

export const SignUserIn = ({ email, password }) => async dispatch => {
  const res = await axios.post("/user/signin", { email, password });
  dispatch({ type: AUTH_USER });
  localStorage.setItem("token", res.data.token);

  history.push("/");
};

export const authError = error => {
  return { type: AUTH_ERROR, payload: error };
};

export const Logout = () => {
  localStorage.removeItem("token");

  history.push("/signin");

  return { type: LOG_OUT };
};
