import React, { Component } from "react";
import FetchSurveys from "./surveys/FetchSurveys";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return <div>{this.props.auth.authenticated ? <FetchSurveys /> : <div>Please Sign Up or Log In</div>}</div>;
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Dashboard);
