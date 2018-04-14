import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import authTypes from "./authTypes";
import authFields from "../formFields";
import * as authActions from "../../actions/authActions";
import Footer from '../footer';

class SignIn extends Component {
  renderFields() {
    const fields = _.map(authTypes, ({ label, name }) => {
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
    return fields.slice(0, 2);
  }

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
          {this.renderFields()}
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

  _.each(authTypes, ({ name }) => {
    if (!values[name]) {
      errors[name] = "Please complete this field";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "signInForm",
  fields: ["email", "password"]
})(connect(null, authActions)(SignIn));
