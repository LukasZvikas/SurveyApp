import React, { Component } from "react";
import { connect } from "react-redux";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Logout from "./authentication/Logout";
import SurveyNew from "./surveys/SurveyNew";
import history from "../utilities/history";
import { Router, Switch, Route } from "react-router-dom";
import * as authActions from "../actions/authActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/logout" component={Logout} />
              <Route path="/surveys/new" component={SurveyNew} />            
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, authActions)(App);