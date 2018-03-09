import axios from "axios";
import { FETCH_USER } from "./types";

export const SendStripeToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token, {
    headers: { authorization: localStorage.getItem("token") }
  });

  dispatch({ type: FETCH_USER, payload: res.data });
};