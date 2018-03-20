import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import surveyTypes from "./surveyTypes";
import * as surveyActions from "../../actions/surveyActions";

const SurveyFormReview = ({ onCancel, formVals, sendSurvey }) => {

  const formReviewFields = _.map(surveyTypes, ({ label, name }) => {
    return (
      <div key={name}>
        <div>
          <h4>{label}</h4>
        </div>
        {formVals[name]}
        <div style={{ marginBottom: "10px" }} />
      </div>
    );
  });
  return (
    <div className="container jumbotron">
      {formReviewFields}
      <button className="btn btn-warning" onClick={onCancel}>
        Back
      </button>
      <button
        onClick={() => sendSurvey(formVals)}
        className="btn btn-success right float-right"
      >
        Send Survey
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    formVals: state.form.SurveyForm.values
  };
}
export default connect(mapStateToProps, surveyActions)(SurveyFormReview);
