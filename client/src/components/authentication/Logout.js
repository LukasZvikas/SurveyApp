import React, { Component } from "react";
import { connect } from "react-redux";
import * as authActions from "../../actions/authActions";

class Logout extends Component {
  componentDidMount() {
    this.props.Logout();
  }
  render() {
    return <div />;
  }
}

export default connect(null, authActions)(Logout);