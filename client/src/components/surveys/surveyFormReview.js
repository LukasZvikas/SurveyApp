import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import surveyTypes from "./surveyTypes";
import * as surveyActions from "../../actions/surveyActions";
import Footer from "../footer";

const SurveyFormReview = ({ onCancel, formVals, user, sendSurvey }) => {
  const formReviewFields = _.map(surveyTypes, ({ label, name }) => {
    return (
      <div className="form-review">
        <div>
          <h4>{label}</h4>
        </div>
        {formVals[name]}
        <div style={{ marginBottom: "10px" }} />
      </div>
    );
  });

  console.log(user.credits);
  return (
    <div className="form-container dashboard">
      <div className="heading-primary dashboard">Review Survey</div>
      <div className="survey">{formReviewFields}</div>
      <div className="survey-buttons review">
        <button className="btn-submit add form" onClick={onCancel}>
          Back
        </button>
        <button
          onClick={() => {
            if (user.credits < 1) {
              swal({
                text: "Not enough credits to send a survey",
                icon: "error",
                dangerMode: true
              });
            } else {
              sendSurvey(formVals);
            }
          }}
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
  return {
    formVals: state.form.SurveyForm.values,
    user: state.auth
  };
}
export default connect(mapStateToProps, surveyActions)(SurveyFormReview);
