import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import authTypes from "./authTypes";
import authFields from "./authFields";
import * as authActions from "../../actions/authActions";

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
      <div className="container">
        <form onSubmit={handleSubmit(this.onSignIn.bind(this))}>
          {this.renderFields()}
          <button className="btn btn-primary" type="submit">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "signInForm",
  fields: ["email", "password"]
})(connect(null, authActions)(SignIn));