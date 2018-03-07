import _ from 'lodash';
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import * as authActions from "../../actions/authActions";
import { connect } from "react-redux";
import authFields from "./authFields";
import authTypes from "./authTypes";

class SignUp extends Component {
  renderFields() {
    return _.map(authTypes, ({name, label}) => {
      return (
        <Field
          key={name}
          type="text"
          label={label}
          name={name}
          component={authFields}
        />
      );
    });
  }

  handleFormSubmit({email, password}) {
    this.props.SignUserUp({email, password});
  }

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props;
    return (
      <div className="container">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          {this.renderFields()}
          <button className="btn btn-primary" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}


export default reduxForm({
  form: "signUpForm",
  fields: ["email", "password", "passwordConfirm"]
})(connect(null, authActions)(SignUp));