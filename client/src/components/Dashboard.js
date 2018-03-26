import React, { Component } from "react";
import FetchSurveys from "./surveys/FetchSurveys";
import { connect } from "react-redux";
import * as authActions from "../actions/authActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return <div>{this.props.auth.authenticated ? <FetchSurveys /> : <div>Please Sign Up or Log In</div>}</div>;
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, authActions)(Dashboard);
