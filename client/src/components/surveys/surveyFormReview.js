import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import surveyTypes from "./surveyTypes";

const SurveyFormReview = ({ onCancel, formVals }) => {
  const formReviewFields = _.map(surveyTypes, ({ label, name }) => {
    return (
      <div key={name}>
        <div>{label}</div>
        {formVals[name]}
        <div style={{ marginBottom: "10px" }} />
      </div>
    );
  });

  return (
    <div className="container">
      {formReviewFields}
      <button className="btn btn-danger" onClick={onCancel}>
        Back
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
export default connect(mapStateToProps)(SurveyFormReview);
