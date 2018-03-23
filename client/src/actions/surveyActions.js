import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";
import history from "../utilities/history";

export const sendSurvey = survey => async dispatch => {
  const res = await axios.post("/api/surveys/send", survey, {
    headers: { authorization: localStorage.getItem("token") }
  });

  history.push("/");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys", {
    headers: { authorization: localStorage.getItem("token") }
  });

  dispatch({ type: FETCH_SURVEYS, payload: res});
};
