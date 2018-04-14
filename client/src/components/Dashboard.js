import React, { Component } from "react";
import FetchSurveys from "./surveys/FetchSurveys";
import { connect } from "react-redux";
<<<<<<< HEAD
=======
import * as authActions from "../actions/authActions";
import IndexDashboard from "./indexDashboard";
>>>>>>> sass

class Dashboard extends Component {
  render() {
<<<<<<< HEAD
    return <div>{this.props.auth.authenticated ? <FetchSurveys /> : <div>Please Sign Up or Log In</div>}</div>;
=======
    return <div>{this.props.auth.authenticated ? <FetchSurveys /> : <IndexDashboard />}</div>;
>>>>>>> sass
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

<<<<<<< HEAD
export default connect(mapStateToProps)(Dashboard);
=======
export default connect(mapStateToProps, authActions)(Dashboard);
>>>>>>> sass
