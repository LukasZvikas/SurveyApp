import React, { Component } from "react";
import FetchSurveys from "./surveys/FetchSurveys";
import { connect } from "react-redux";
import * as authActions from "../actions/authActions";
import IndexDashboard from "./indexDashboard";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return <div>{this.props.auth.authenticated ? <FetchSurveys /> : <IndexDashboard />}</div>;
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, authActions)(Dashboard);
