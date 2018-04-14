import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import surveyTypes from "./surveyTypes";
import * as surveyActions from "../../actions/surveyActions";
<<<<<<< HEAD

const SurveyFormReview = ({ onCancel, formVals, sendSurvey }) => {

  const formReviewFields = _.map(surveyTypes, ({ label, name }) => {
    return (
      <div key={name}>
=======
import Footer from "../footer";

const SurveyFormReview = ({ onCancel, formVals, sendSurvey }) => {
  const formReviewFields = _.map(surveyTypes, ({ label, name }) => {
    return (
      <div className="form-review">
>>>>>>> sass
        <div>
          <h4>{label}</h4>
        </div>
        {formVals[name]}
<<<<<<< HEAD
        <div style={{ marginBottom: "10px" }} />
=======
>>>>>>> sass
      </div>
    );
  });
  return (
<<<<<<< HEAD
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
=======
    <div className="form-container dashboard">
      <div className="heading-primary dashboard">Review Survey</div>
      <div className="survey">{formReviewFields}</div>
      <div className="survey-buttons review">
        <button className="btn-submit add form" onClick={onCancel}>
          Back
        </button>
        <button
          onClick={() => sendSurvey(formVals)}
          className="btn-submit add form"
        >
          Send Survey
        </button>
      </div>
      <Footer />
>>>>>>> sass
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
