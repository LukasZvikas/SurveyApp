import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import surveyTypes from "./surveyTypes";
import SurveyFields from "./SurveyFields";
import emailValidation from "../../utilities/emailValidation";

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
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onNext)}>
          {this.renderFields()}
          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
 
  	errors.recipients = emailValidation(values.recipients || '')

    _.each(surveyTypes, ({name}) => {
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




