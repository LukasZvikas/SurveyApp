import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import surveyTypes from "./surveyTypes";
<<<<<<< HEAD
import SurveyFields from "./SurveyFields";
import emailValidation from "../../utilities/emailValidation";
=======
import SurveyFields from "../formFields";
import emailValidation from "../../utilities/emailValidation";
import { Link } from "react-router-dom";
import Footer from "../footer";
>>>>>>> sass

class SurveyForm extends Component {
  renderFields() {
    const surveyFields = _.map(surveyTypes, ({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          type="text"
          component={SurveyFields}
        />
      );
    });
    return surveyFields;
  }

  render() {
    console.log(this.props.form);
    return (
<<<<<<< HEAD
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onNext)}>
          {this.renderFields()}
          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </form>
=======
      <div className="form-container dashboard">
        <div className="heading-primary dashboard">New Survey</div>
        <form onSubmit={this.props.handleSubmit(this.props.onNext)}>
          {this.renderFields()}
          <div className="survey-buttons">
            <Link className="btn-submit add form" to="/">
              Back
            </Link>

            <button type="submit" className="btn-submit add form">
              Next
            </button>
          </div>
        </form>
        <Footer />
>>>>>>> sass
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
<<<<<<< HEAD
 
  	errors.recipients = emailValidation(values.recipients || '')

    _.each(surveyTypes, ({name}) => {
=======

  errors.recipients = emailValidation(values.recipients || "");

  _.each(surveyTypes, ({ name }) => {
>>>>>>> sass
    if (!values[name]) {
      errors[name] = "Please complete this field";
    }
  });

  return errors;
}
export default reduxForm({
  validate,
  form: "SurveyForm",
  destroyOnUnmount: false
})(SurveyForm);
<<<<<<< HEAD




=======
>>>>>>> sass
