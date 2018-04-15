import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import authTypes from "./authTypes";
import { emailField, passwordField } from "../formFields";
import * as authActions from "../../actions/authActions";
import emailValidation from "../../utilities/emailValidation";
import Footer from "../footer";

class SignIn extends Component {
  onSignIn({ email, password }) {
    this.props.SignUserIn({ email, password });
  }

  render() {
    const { handleSubmit, form: { email, password } } = this.props;
    return (
      <div className="form-container">
        <h2 className="heading-primary">Sign In</h2>
        <form
          className="auth-form"
          onSubmit={handleSubmit(this.onSignIn.bind(this))}
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

          <button className="btn-submit" type="submit">
            Sign In
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

  return errors;
}

export default reduxForm({
  validate,
  form: "signInForm",
  fields: ["email", "password"]
})(connect(null, authActions)(SignIn));
