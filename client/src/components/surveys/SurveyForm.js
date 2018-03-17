import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import surveyTypes from "./surveyTypes";
import SurveyFields from "./SurveyFields";

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
    console.log(this.props);
    return (
      <div className="container">
        <form
          onSubmit={values => {
            console.log(values);
          }}
        >
          {this.renderFields()}
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({  
  form: "SurveyForm",
  fields: ["title", "subject", "body", "recipients"]
})(SurveyForm);
