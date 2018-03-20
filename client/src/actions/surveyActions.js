import axios from "axios";
import { SEND_SURVEY } from "./types";

export const sendSurvey = survey => async dispatch => {
  const res = await axios.post("/api/surveys/send", survey, {
    headers: { authorization: localStorage.getItem("token") }
  });

  dispatch({ type: SEND_SURVEY, payload: res.data });
};
