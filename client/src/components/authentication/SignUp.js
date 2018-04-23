import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import * as authActions from "../../actions/authActions";
import { emailField, passwordField } from "../formFields";
import { connect } from "react-redux";
import authTypes from "./authTypes";
import Footer from "../footer";

class SignUp extends Component {
  handleFormSubmit({ email, password }) {
    this.props.SignUserUp({ email, password });
  }

  showError(error) {
    if (error != null) {
      return (
        <div className="auth-form__danger">Please Enter All Of The Fields!</div>
      );
    }
  }

  render() {
    const {
      handleSubmit,
      fields: { email, password, passwordConfirm }
    } = this.props;
    return (
      <div className="form-container sign">
        <h2 className="heading-primary">Sign Up</h2>
        <form
          className="auth-form"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
          <Field
            key={"email"}
            type="text"
            label={"Enter Email"}
            name={"email"}
            component={emailField}
          />

          <Field
            key={"password"}
            type="password"
            label={"Enter password"}
            name={"password"}
            component={passwordField}
          />

          <Field
            key={"passwordConfirm"}
            type="text"
            label={"Confirm Password"}
            name={"passwordConfirm"}
            component={passwordField}
          />

          {this.showError(this.props.formError)}
          <button className="btn-submit" type="submit">
            Sign Up
          </button>
        </form>
        <Footer />
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      .test(
        values.email ))
  {
    errors.email = "Please enter a valid email";
  }

  if (!values.password) {
    errors.password = "Please enter a password";
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = "please enter a password confirmation";
  }

  if (values.password != values.passwordConfirm) {
    errors.passwordConfirm = "Both Passwords Must Match";
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    formError: state.auth.authError
  };
}

export default reduxForm({
  form: "signUpForm",
  fields: ["email", "password", "passwordConfirm"],
  validate
})(connect(mapStateToProps, authActions)(SignUp));
