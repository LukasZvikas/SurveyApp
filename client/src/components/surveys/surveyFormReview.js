import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import surveyTypes from "./surveyTypes";
import * as surveyActions from "../../actions/surveyActions";
import Footer from "../footer";

const SurveyFormReview = ({ onCancel, formVals, sendSurvey }) => {
  const formReviewFields = _.map(surveyTypes, ({ label, name }) => {
    return (
      <div className="form-review">
        <div>
          <h4>{label}</h4>
        </div>
        {formVals[name]}
      </div>
    );
  });
  return (
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
