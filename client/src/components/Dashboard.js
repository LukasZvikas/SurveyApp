import React, { Component } from "react";
import FetchSurveys from "./surveys/FetchSurveys";
import { connect } from "react-redux";

import IndexDashboard from "./indexDashboard";

class Dashboard extends Component {
  render() {
    return (
      <div>
        {this.props.auth.authenticated ? <FetchSurveys /> : <IndexDashboard />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Dashboard);
